/**
 * 1、textarea 里面默认的Enter键就是换行，所以我们需要给它改掉。
 * 2、当我们按【shift】时，event属性里有一个字段叫：shiftkey=true
 * 3、判断【shift + Enter】只要： event.shiftkey === true && e.kenCode === 13 即可。
 * 4、由于Enter默认就是换行，所以任何组合键，只要不是【shift + Enter】就改写【Enter】的默认行为
 */

document.onkeydown = function(e) {
  var keyCode = e.keyCode;
  var div = document.getElementById("div"),
  textarea = document.getElementById("textarea");
  // 判断组合键，不是【shift + Enter】就改写【Enter】的默认功能
  if(!e.shiftKey && keyCode === 13) {
    div.innerText = textarea.value;
    setTimeout(() => {
      textarea.value = '';   
    }, 0);
  }
}