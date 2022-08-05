const data = [
    {
        tittle: 'Notebook',
        id: 1,
        price: 2000
    },
    {
        tittle: 'Keyboard',
        id: 2,
        price: 200
    },
    {
        tittle: 'Mouse',
        id: 3,
        price: 100
    },
    {
        tittle: 'Gamepad',
        id: 4,
        price: 150
    }
];

const renderProduct = (tittle, id, price) =>{
    return `
        <div class='product-item'>
            <h3>${tittle}</h3>
            <p>${price}</p>
        </div>
    `;
};

const render = (products) =>{
    const productsList = products.map(item => renderProduct(item.tittle, item.id, item.price)).join('');

    document.querySelector('.products').innerHTML = productsList;
};

render(data);