const CryptoJS = require('crypto-js');
const _data_ = require('./sec_data');
const fs = require('fs');

let _len;
/**
 * 截取指定长度的 token
 * @param {* token} _token
 * @param {* 待截取的长度} len
 */
function sliceToken(_token, len = 16) {
    if (!_token) {
        throw new Error('token is required!');
    }
    return _token.substr(0, len);
}
/**
 * 加密
 * @param {* 原文} text
 * @param {* 秘钥} _token
 * @param {* 初始化向量} iv
 */
function _encrypt(text, _token, iv) {
    const token = sliceToken(_token, _len);
    return CryptoJS.AES.encrypt(
        text, CryptoJS.enc.Utf8.parse(token),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }
    ).toString();
}

/**
 * 解密
 * @param {* 密文} text
 * @param {* 秘钥} _token
 * @param {* 初始化向量} iv
 */
function _decrypt(text, _token, iv) {
    iv = (iv || iv == 0) ? iv : 1;
    const token = sliceToken(_token, _len);
    const result = CryptoJS.AES.decrypt(
      text, CryptoJS.enc.Utf8.parse(token),
      {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return result.toString(CryptoJS.enc.Utf8);
}

/**
 * 递归加/解密。
 * @param {* 待处理的JSON} data
 * @param {* 待处理的字段} items
 * @param {* token秘钥} _token
 * @param {* 初始化向量} _iv
 * @param {* 类型：trut:解密；false：加密} type
 * @param {* 待处理的 key} _key
 */
function recursiveDecryptEncrypt(data, items, _token, _iv, type, _key) {
    if (data instanceof Array) {
        for (const v of data) {
            if (v instanceof Object) {
                recursiveDecryptEncrypt(v, items, _token, _iv, type, _key);
            }
        }
    } else if (Object.keys(_iv).indexOf(_key) > -1 || Object.keys(_iv).indexOf(_key.__key) > -1) {
        //对第一层为纯string/number键值对的result.data 进行处理。
        if(typeof data === 'string' || typeof data === 'number'){
            if(_key.__key === 'data' && items.indexOf(_key.checked_key) > -1){
                if (type) {
                    // 解密
                    data = _decrypt(data, _token, _key['__iv_value']);
                } else {
                    // 加密
                    data = _encrypt(data, _token, _key['__iv_value']);
                }
            }
            return data;
        }else{
            const _keyArray = Object.keys(data);
            _keyArray.sort(function (a) {
                return (data[a] instanceof Array || data[a] instanceof Object) ? 1 : -1;
            });
            for (const _k of _keyArray) {
                if ((typeof data[_k] === 'number' || typeof data[_k] === 'string') && items.indexOf(_k) > -1) {
                    if (type) {
                        // 解密
                        data[_k] = _decrypt(data[_k], _token, data[_iv[_key]]);
                    } else {
                        // 加密
                        data[_k] = _encrypt(data[_k], _token, data[_iv[_key]]);
                    }
                } else if (data[_k] instanceof Object) {
                    return recursiveDecryptEncrypt(data[_k], items, _token, _iv, type, _k);
                }
            }
        }
    }
}

//export default{
    /**
     * 对JSON的指定字段 加/解密。
     * 注：目前只适用于：data:[{},{},{}] 和  data:{key1:{},key2:{}}类型。
     * @param {* 待处理的JSON} data
     * @param {* 待处理的字段} items
     * @param {* token秘钥} _token
     * @param {* 初始化向量} _iv
     *  如果 后台返回的：result.data是： Array类型，那么为数组data中各直接子级对象元素指定_iv时，key应设为：'data'。如：
     *  result.data = [
     *        {id:123,phone:123456,books:[{name:'语文',price:10,orderId:666666}]},
     *        {id:456,phone:098765,books:[{name:'数学',price:20,orderId:777777}]},
     *   ]
     *  现在要为 phone、price进行加密，其对应iv分别为：id、orderId。 _iv应为：{ data: 'id', books: 'orderId' },
     * @param {* 类型：true:解密；false：加密} type
     */
    function jsonDecryptEncrypt(data, items, _token, _iv, type) {
        if (data instanceof Array) {
            recursiveDecryptEncrypt(data, items, _token, _iv, type, 'data');
        } else {
            const __keys = Object.keys(data);
            for (const _key of __keys) {
                if(typeof data[_key] === 'number' || typeof data[_key] === 'string' ){
                    data[_key] = recursiveDecryptEncrypt(data[_key], items, _token, _iv, type, { __key : 'data', __iv_value : data[_iv['data']], checked_key: _key});
                }else{
                    recursiveDecryptEncrypt(data[_key], items, _token, _iv, type, _key);
                }
            }
        }
        return data;
    }
    /**
     * 对于 String/Number 类型的返回值做处理
     * @param {*} text
     * @param {*} _token
     * @param {*} _iv
     */
    function decrypt(text, _token, _iv) {
        return _decrypt(text, _token, _iv);
    }
//};


const _d = jsonDecryptEncrypt(_data_.data,['name'],'123456789009876543211234567890',{data : 'id', books : 'bid', reader : 'uid', friends : 'fid'},true);

fs.writeFileSync('./a.json',JSON.stringify(_d));