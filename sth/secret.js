const _data_ = require('./sec_data');
const CryptoJS = require('crypto-js');

function sliceToken(_token, len = 16) {
  if (!_token) {
    throw new Error('token is required!');
  }
  return _token.substr(0, len);
}


function f(){
    
}








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
export default{
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
};
