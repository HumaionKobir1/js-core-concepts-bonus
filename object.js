const nayok = {
    name: "Humaion Kobir",
    id: 121,
    address: 'Movie cinema',
    issSingle: true,
    friends: ['tanivr', 'raaz', 'salman', 'aamir'],
    movies: [{name: 'no. 1', year: 2012}, {name: 'King khan', year: 2022}],
    act: function (){
        console.log('acting like Humaion Kobir');
    } ,
    car: {
        brand: 'tesla',
        price: 50000,
        made: 2023,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon mask'
        }
    }
}

console.log(nayok.act);
nayok.act();
