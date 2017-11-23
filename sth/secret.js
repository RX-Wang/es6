const _data_ = require('./sec_data');
const CryptoJS = require('crypto-js');

function sliceToken(_token, len = 16) {
  if (!_token) {
    throw new Error('token is required!');
  }
  return _token.substr(0, len);
}


function f(data,items){
    //如果是数组：
    if(data instanceof Array){
        for(let v of data){
            if(v instanceof Object){
                f(v,items);
            }
        }
    } else {
        //如果是Object：
        for(let _k in data){
            if((typeof data[_k] === 'number' || typeof data[_k] === 'string') && items.indexOf(_k) > -1) {
                data[_k] = '你好呀,糖糖';
            }else{
                f(data[_k],items);
            }
        }
    }
    console.log(data);
    return;
}
f(_data_,['phone','day']);







/**
 * 加密
 * @param {* 原文} text
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
