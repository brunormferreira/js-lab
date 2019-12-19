let obj = {
  method: function(p1, p2, p3) { console.log("method:", arguments) } 
}

let str = "method('p1', 'p2', 'p3');"

let match = str.match(/^\s*(\S+)\((.*)\);\s*$/);

let func = match[1]
let parameters = match[2].split(',');
for (let i = 0; i < parameters.length; ++i) {
  // clean up param begninning
	parameters[i] = parameters[i].replace(/^\s*['"]?/,'');
  // clean up param end
  parameters[i] = parameters[i].replace(/['"]?\s*$/,'');
}

obj[func](parameters); // sends parameters as array 
// method: [Arguments] { '0': [ 'p1', 'p2', 'p3' ] }

obj[func].apply(this, parameters); // sends parameters as individual values
// method: [Arguments] { '0': 'p1', '1': 'p2', '2': 'p3' }
