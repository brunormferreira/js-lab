// let me = 'Bruce Wayne'

// function greetMe() {
//   console.log('Hello, ' + me + '!')
// }
// me = 'Batman'
// greetMe()

function init() {
  let name = 'Bruno';      // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert (name);          // displayName() uses variable declared in the parent function    
  }
  displayName();    
}
init();

// function makeSizer(size) {
//   return function() {
//     document.body.style.fontSize = size + 'px';
//   };
// }

// let size12 = makeSizer(12);
// let size14 = makeSizer(14);
// let size16 = makeSizer(16);