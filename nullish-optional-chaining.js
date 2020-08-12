const artist = {
  name: 'Bruno', 
  age: 24,
  categories: ['rock', 'pop'],
  band: 'Red Hot Chilli Peppers',
  pets: [
    { name: 'Perola', type: 'cat' },
    { name: 'Panqueca', type: 'dog' }
  ]
};

const bandName = artist?.band ?? 'Sem Banda'

let pets = artist?.pets?.map(pet => pet?.name || pet?.type) ?? 'Sem pets'

//

const customer = {
  name: 'Carl',
  details: { age: 82 }
};
const customerCity = customer?.city ?? 'Cidade desconhecida';
console.log(customerCity); // Cidade desconhecida