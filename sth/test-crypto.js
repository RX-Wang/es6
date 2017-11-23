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

/* let jm =  encryption(content,p_key);
console.log(`加密：${jm}`);
console.log(`解密：${decryption(jm,p_key)}`); */


/**
 * 加密方法
 * @param key 加密key
 * @param iv       向量
 * @param data     需要加密的数据
 * @returns string
 */
var encrypt = function (key, iv, data) {
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString('base64');
    return crypted;
};
 
/**
 * 解密方法
 * @param key      解密的key
 * @param iv       向量
 * @param crypted  密文
 * @returns string
 */
var decrypt = function (key, iv, crypted) {
    crypted = new Buffer(crypted, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};
 
var key1 = '751f621ea5c8f930';
console.log('加密的key:', key1.toString('hex'));
var iv = '2624750004598718';
console.log('加密的iv:', iv);
var data = "Hello, nodejs. 演示aes-128-cbc加密和解密";
console.log("需要加密的数据:", data);
var crypted = encrypt(key1, iv, data);
console.log("数据加密后:", crypted);
var dec = decrypt(key1, iv, crypted);
console.log("数据解密后:", dec);