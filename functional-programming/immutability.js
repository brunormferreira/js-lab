// Pure addToCart() returns a new cart.
// It does not mutate the original.
const addToCart = (cart, item, quantity) => ({
  ...cart,
  items: cart.items.concat([{
    item,
    quantity
  }])
});
/* We use the object spread syntax to mix in the existing cart state, and then we can 
override only the properties that change. In this case, we'll replace the items key 
with a new version, concatenated with the new item. Concat will return a new array 
without mutating the original. */

// Non-mutating methods are called accessor methods.

// You can test the code and see for yourself by giving it some data to act on:
const myCart = {
  id: 'cart123',
  items: [
    { item: 'Apple', quantity: 3 }
  ]
};

console.log(
  addToCart(myCart, 'Orange', 2), // the new cart
  myCart // myCart is unchanged
);

/* */
/* */
/* */ 
/* */

const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity
  });
  return cart;
};
/* It works by passing in a cart, and item to add to that cart, and an item quantity. The function then returns the same cart, with the item added to it. The problem with this is that we've just mutated some shared state. Other functions may be relying on that cart object state to be what it was before the function was called, and now that we've mutated that shared state, we have to worry about what impact it will have on the program logic if we change the order in which functions have been called */

