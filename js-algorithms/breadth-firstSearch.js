const personIsSeller = name => name[name.length - 1] === 'm';

const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = [];
  while (searchQueue.length) {
    const person = searchQueue.shift();
    // Only search this person if you haven't already searched them
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }
      searchQueue = searchQueue.concat(graph[person]);
      // Marks this person as searched
      searched.push(person);
    }
  }
  return false;
};

search('you'); // thom is a mango seller!

/* Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. 
It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') 
and explores the neighbor nodes first, before moving to the next level neighbors. */