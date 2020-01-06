const inputValue = document.querySelector('input'),
  spanValue = document.querySelector('span');
let counter = 0;

function debounce(func, wait) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  }
}

inputValue.addEventListener('input', debounce(function(){
  mySpan.innerText = ++counter;
}, 500));