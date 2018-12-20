// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// //创建新的图片对象
// var img = new Image();
// //指定图片的URL
// img.src = "./enemy.png";
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, 64, 48, 0, 0, 64, 48);
// };
window.onload = function () {
  // const count = parseInt(Math.random() * 100);
  const count = 70;
  let i = 0;
  const container = document.getElementById('container');
  while (i < count) {
    const aimg = new Image();
    aimg.src = './enemy.png';
    aimg.style.top = '-100px';
    aimg.style.left = `${i * window.innerWidth / count}px`;
    aimg.style.transitionProperty = 'transform';
    aimg.style.transitionDuration = '5s';
    aimg.style.transitionTimingFunction
    aimg.style.transitionTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`
    // aimg.setAttribute('class', 'img-transion');
    container.appendChild(aimg);
    i++;
  }
  
  const imgs = document.getElementsByTagName('img')
  for (let i = 0; i < imgs.length; i++) {
    setTimeout(() => {
      imgs[i].style.transform = `translateY(${window.innerHeight + 500}px)`;
    }, Math.random() * 2000);
  }
}