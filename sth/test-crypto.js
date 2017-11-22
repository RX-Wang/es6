const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const content = 'hello world';
const p_key = '1234567890qwertyuiop1234567890q=';

/**
 *  1、hash 加密算法
 */
const _hash = crypto.createHash('sha1').update(content).digest('hex');
console.log(`_hash算法:${_hash}`);

/**
 *  2、HMAC 加密算法
 * @type {string}
 */
//const key = '12345678qwertyui2345678asdfghj-1234567';
const key = fs.readFileSync(path.join(__dirname,'key.pem'));
const key_ascii = key.toString('ascii');
const _hmac = crypto.createHmac('sha1', key_ascii).update(content).digest('hex');
console.log(`_hmac算法：${_hmac}`);




/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
function encryption(data, key, iv) {
    iv = iv || "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var cipher = crypto.createCipheriv('aes-256-ecb', key, iv);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return cipherChunks.join('');
}

/**
 * aes解密
 * @param data 待解密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
function decryption(data, key, iv) {
    if (!data) {
        return "";
    }
    iv = iv || "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));
    return cipherChunks.join('');
}

let jm =  encryption(content,p_key);
console.log(`加密：${jm}`);
console.log(`解密：${decryption(jm,p_key)}`);