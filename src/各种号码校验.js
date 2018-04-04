function test(data, keys) {
  // 1、姓名：name
  var a = '上官问号';
  var _a = a.substr(0, 1) + masks(a.length -1);
  console.log(_a);

  // 2、身份证号
  var b = '370685199201141032';
  var _b = b.substr(0, 5) + masks(b.length - 8) + b.substr(b.length-3, 3);
  console.log(_b);

  // 3、银行卡号
  var c = '6225750000001496';
  var _c = c.substr(0, 6) + masks(c.length - 10) + c.substr(c.length-4, 4);
  console.log(_c);

  // 4、地址
  var d = '融泽嘉园A6号院b9号楼Ca1234室';
  var _d = d.replace(/\w+\d+/g, function(match) {
    return match.replace(/./g, '*');
  });
  console.log(_d);

  // 5、电话
  var e = '13585858585'; // 大陆手机号
  // var e = '053584128171';   // 大陆固话
  // var e = '28789876';   // 港澳 手机
  // var e = '987898769';   // 台湾手机
  // var e = '3587898769';   // 台湾座机
  var _e = '';
  // 大陆手机
  if(/1\d{10}/.test(e)) {
    console.log(1111)
    _e = e.substr(0, 3) + masks(e.length - 7) + e.substr(e.length - 4, 4);
  }
  // 大陆固话
  else if(/^(\d{3,4}|\d{3,4}-)(\d{7,8})$/.test(e)) {
    console.log(2222)
    _e = e.replace(/^(\d{3,4}|\d{3,4}-)(\d{7,8})$/, function(match,$1,$2) {
      return $1 + masks($2.length - 4) + $2.substr($2.length - 4, 4);
    })
  }
  // 港澳手机、固话
  else if(/^[2,3,5,6,8,9]\d{7}$/.test(e)) {
    console.log(33333);
    _e = e.substr(0, 2) + masks(e.length - 4) + e.substr(e.length - 2, 2);
  }
  /* // 台湾手机
  else if(/^9\d{8}/.test(e)) {
    console.log(4444)
  }
  // 台湾座机
  else if(/(\d{2,3}|\d{2,3}-)(\d{6,8})/.test(e)) {
    console.log(5555)
  } */
  console.log(_e);

  /**
   *  6、邮箱
   */
  var f = 'abc@aa.vip.com';
  var _f = f.replace(/(^[a-zA-Z0-9+]+\w+[-_.]?\w+)*(@\w+[-.]\w+.\w*)/, function(match, $1, $2) {
    return ($1.length > 3 ? $1.substr(0, 3) : $1.substr(0, 1)) + masks($1.length - ($1.length > 3 ? 3 : 1)) + $2;
  });
  console.log(_f);

  /**
   *  7、 其他
   */
  var g = '2345678989asdf';
  var _g = '', leftLength = Number.parseInt(g.length/3);
  _g = g.substr(0, leftLength) + masks(g.length - leftLength - 2) + g.substr(g.length -2, 2); 
  console.log(_g);
}

function masks(len) {
  var mask = '';
  for(let i = 0; i < len; i++) {
    mask += '*';
  }
  return mask;
}

test();