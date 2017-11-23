const CryptoJS = require('crypto-js');
const fs = require('fs');
const _data_ = require('./sec_data.js').data;
const __token = '12s3456f789009876543211234567890';
const __iv = 'fffffffffff';

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
 * @param {* 矢量} iv
 */
function _encrypt(text, _token, iv) {
    const token = sliceToken(_token);
    return CryptoJS.AES.encrypt(
        text, CryptoJS.enc.Utf8.parse(token),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }
    );
}

/**
 * 解密
 * @param {* 密文} text
 * @param {* 密文} _token
 * @param {* 密文} iv
 */
function _decrypt(text, _token, iv) {
    const token = sliceToken(_token);
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

/* export default{
  encrypto(text, _token, _iv) {
    const _en = _encrypt(text, _token, _iv);
    console.log(_en.toString());
    return _en;
  },
  decrypto(text, _token, _iv) {
    const _de = _decrypt(text, _token, _iv);
    console.log(_de);
    return _de;
  },
}; */



//递归---解密
function recursiveDecrypt(data, items,_token,_iv) {
    //如果是数组：
    if (data instanceof Array) {
        for (let v of data) {
            if (v instanceof Object) {
                recursiveDecrypt(v, items,_token,_iv);
            }
        }
    } else {
        //如果是Object：
        let _keyArray = Object.keys(data);
        _keyArray.sort(function (a,b) {
            return (data[a] instanceof Array || data[a] instanceof Object) ? 1 : -1;
        });
        for (let _k of _keyArray) {
            if ((typeof data[_k] === 'number' || typeof data[_k] === 'string') && items.indexOf(_k) > -1) {
                //进行测试
                //data[_k] = '你好呀,糖糖';

                //进行加密
                data[_k] = _encrypt(data[_k],_token,_iv).toString();

                //进行解密
                //data[_k] = _decrypt(data[_k],_token,_iv);
            } else if (data[_k] instanceof Object) {
                return recursiveDecrypt(data[_k], items,_token,_iv);
            }
        }
    }
}

/**
 * 解密方法
 * @param data 待解密的對象
 * @param items 待解密的字段 Array
 * @param _token
 * @param _iv
 */
function decrypt(data,items,_token,_iv) {
    const __keys = Object.keys(data);
    for (let v of __keys) {
        recursiveDecrypt(data[v],items,_token,_iv);
    }
    //寫入到文件，這個測試用。
    fs.writeFileSync('./a.json', JSON.stringify(data));
}

decrypt(_data_, ['phone', 'day','guestMobile','certificateNumber','batchCode'],__token,__iv);
