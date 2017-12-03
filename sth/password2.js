var CryptoJS = require("crypto-js");
var key ="d8140d774c435b7c";
var iv = "11477";
var text="222222";//明文

function encrypt(text){
    return CryptoJS.AES.encrypt(text,CryptoJS.enc.Utf8.parse(key),{
        iv:CryptoJS.enc.Utf8.parse(iv),
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })
}

function decrypt(text){
    var result = CryptoJS.AES.decrypt(text,CryptoJS.enc.Utf8.parse(key),{
        iv:CryptoJS.enc.Utf8.parse(iv),
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.Pkcs7
    })
    return result.toString(CryptoJS.enc.Utf8)
}


var encoded=encrypt(text)
console.log(`密文：${encoded.toString()}`);
console.log(`原文：${decrypt('6bIGC/9hFQIkylLlBcBg3w==')}`);
