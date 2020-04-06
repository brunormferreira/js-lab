const raptors = {
  aaa111: {
    name: "Kawhi Leonard"
  },
  bbb222: {
    name: "Kyle Lowry"
  },
  ccc333: {
    name: "Spicy P"
  }
};

/* ## Mapping Keys 
  The first approach uses Object.keys, which when passed an object will return you an array 
  containing the keys (properties/attributes) of the object. With the keys we can map them, 
  using each key to access the correct attribute to grab each Raptor's name. 
*/

function App() {
  return (
    <ul>
      {Object.keys(raptors).map(key => (
        <li key={key}>{raptors[key].name}</li>
      ))}
    </ul>
  );
}

/* ## Mapping Values
The second approach uses Object.values, which when passed an object will return you an array 
containing the values of the object.
If you have an id or some other unique value for each of the values, awesome! But if you don't, 
this approach has some downfalls as you may not have access to the value's key.

In this example we'll use the Raptor's name because it happens to be unique. */

function App() {
  return (
    <ul>
      {Object.values(raptors).map(raptor => (
        <li key={raptor.name}>{raptor.name}</li>
      ))}
    </ul>
  );
}

/* ## Mapping Entries
The third approach uses Object.entries, which when passed an object will return you an array,
where each element in the array is another array that has two values (a tuple): [key, value].

This approach easily gives us access to both the key and the value, providing the most flexible 
approach of the three that we have looked at. */

function App() {
  return (
    <ul>
      {Object.entries(raptors).map(([key, raptor]) => (
        <li key={key}>{raptor.name}</li>
      ))}
    </ul>
  );
}
