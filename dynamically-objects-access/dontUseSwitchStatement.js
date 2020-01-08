// They are not Reusable. They are not Extensible. They are not SOLID.

// Bad
function handleActions(action) {
  switch (action.type) {
      case 'delete':
        this.handleDelete(action.data);
        break;
      case 'create':
        this.handleCreate(action.data);
        break;
      case 'update':
        this.handleUpdate(action.data);
        break;
      case 'upsert':
        this.handleCreate(action.data);
        this.handleUpdate(action.data);
        break;
      case 'fall...':
      case '...through...':
      case '...statement':
        this.handleActionForFallThrough(action.data);
        break;
      default:
        this.handleDefault(action.data);
  }
}

// Good
let actions = {
  'delete': handleDelete,
  'create': handleCreate,
  'update': handleUpdate,
  'upsert': function handleUpsert(data) {
    this['create'](data);
    this['update'](data);
  },
  'fall...': handleActionForFallThrough,
  '...through...': handleActionForFallThrough,
  '...statement': handleActionForFallThrough,
  'default': new Function(),
};

let handler = actions[action.type] || actions['default'];
console.log(handler)
handler.call(actions, action.data);
console.log(handler)

// ###############################################

function getDrink (type) {
  let drinks = {
    'coke': 'Coke',
    'pepsi': 'Pepsi',
    'lemonade': 'Lemonade',
    'default': 'Default item'
  };
  return 'The drink I chose was ' + (drinks[type] || drinks['default']);
}

let drink = getDrink('coke');
// The drink I chose was Coke
console.log(drink);

// ###############################################

function getDrink (type) {
  let drink;
  let drinks = {
    'coke': function () {
      drink = 'Coke';
    },
    'pepsi': function () {
      drink = 'Pepsi';
    },
    'lemonade': function () {
      drink = 'Lemonade';
    },
    'default': function () {
      drink = 'Default item';
    }
  };

  // invoke it
  (drinks[type] || drinks['default'])();

  // return a String with chosen drink
  return 'The drink I chose was ' + drink;
}

let drink = getDrink('coke');
// The drink I chose was Coke
console.log(drink);

// Article: https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals#object-literal-fall-through