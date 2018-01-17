const CryptoJS = require('crypto-js');

/**
 * AES_CBD_PCCK5/7 加解密
 */

/**
 * 加密
 * @param {*} text 
 * @param {*} _token 
 * @param {*} iv 
 */
function _encrypt(text, _token, iv) {
  console.log(`_token：${_token}`);
  iv = (iv || iv === 0 || iv === '0') ? iv : 'false';
  console.log('加密时的iv是：',iv);
  return CryptoJS.AES.encrypt(
    text, CryptoJS.enc.Utf8.parse(_token),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  ).toString();
}

/**
 * 解密
 * @param {*} text 
 * @param {*} _token 
 * @param {*} iv 
 */
function _decrypt(text, _token, iv) {
  console.log(`_token：${_token}`);
  iv = (iv || iv === 0 || iv === '0') ? iv : 'false';
  console.log('解密时的iv是：',iv);
  const result = CryptoJS.AES.decrypt(
    text, CryptoJS.enc.Utf8.parse(_token),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  const r = result.toString(CryptoJS.enc.Utf8);
  return r;
}
const text = 'J0HO6vvyDWo9cQsXnG6NQ==';// 密文
// const text = '3843867319'; // 明文
const token = 'd7f51692ef99294b12345678';
function subToken(token) {
  return token.substr(0,16);
}
const iv = '428';
console.log(_decrypt(text,subToken(token),iv));
// console.log(_encrypt(text,subToken(token),iv));