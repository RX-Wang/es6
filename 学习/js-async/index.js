/* function getSomething() {
  return "something";
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test(); */
/* function will() {
  console.log('willMount');
  testAsync();
}
async function testAsync() {
  await new Promise((reso) => {
    setTimeout(() => {
      reso('hello async func');
    }, 2000);
  });
  console.log('async--');
  return;
}
function render() {
  console.log('render--');
}
function test() {
  will();
  render();
}
test(); */


function takeLongTime(n) {
  return new Promise(resolve => {
      setTimeout(() => resolve(n + 200), n);
  });
}

function step1(n) {
  console.log(`step1 with ${n}`);
  return takeLongTime(n);
}

function step2(n) {
  console.log(`step2 with ${n}`);
  return takeLongTime(n);
}

function step3(n) {
  console.log(`step3 with ${n}`);
  return takeLongTime(n);
}
async function doIt() {
  console.time("doIt");
  const time1 = 300;
  const time2 = await step1(time1);
  const time3 = await step2(time2);
  const result = await step3(time3);
  console.log(`result is ${result}`);
  console.timeEnd("doIt");
}

doIt();