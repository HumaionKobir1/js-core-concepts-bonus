const products = [
    {id: 1, name: 'xiami phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 119000},
    {id: 3, name: 'mac book air', price: 190000},
    {id: 4, name: 'lenovo yoga laptop', price: 19000},
    {id: 5, name: 'Dell insprion laptop', price: 56000},
    {id: 6, name: 'Samsung phone note 7', price: 18000},
    {id: 7, name: 'Nokia old age phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 48000}
];
// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
            
        }
    }
    return matched;
}
// const result = matchedProducts(products, 'laptop');
// console.log(result);
const result = matchedProducts(products, 'phone');
console.log(result);