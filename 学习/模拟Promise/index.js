function func() {
  return new Promise((reso, rej) => {
    rej('接口 报错了');
  });
}

new Promise((reso, rej) => {
  reso(1234);
}).then(
  result => {
    console.log('1-' , result);
    return func();
  },
  err => {
    console.log(1 , err);
  }
).then(
  result => {
    console.log('2-' , result);
  },
  err => {
    console.log(2 , err);
  }
)