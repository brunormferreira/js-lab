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
  