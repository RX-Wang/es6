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
const text = 'atiqImUrzuh2QCTmSht33w==';// 密文
const text = '406097'; // 明文
const token = '80201532354370d7';
const iv = 4431788;
console.log(_decrypt(text,token,iv));
// console.log(_encrypt(text,token,iv));