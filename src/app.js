const menu = [
    {
        id: 1,
        title: 'Arugula and burratta pizza',
        category: 'Dinner',
        img: new URL('./images/pizza.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 15,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid quia repellat sequi ipsa inventore! Repellendus possimus aut veritatis temporibus.',
    },
];

const items = document.querySelector('.items');

window.addEventListener('DOMContentLoaded', () => {
    let displayMenu = menu.map(item => {
        return `<article class="menu-item">
            <div class="picture border-3 border-secondary border rounded">
                <img src="${item.img}" class="photo" alt="Menu item" />
            </div>
            <div class="item-info">
                <header>
                    <h3>${item.title}</h3>
                    <h5 class="price">$${item.price}</h5>
                </header>
                <p class="description">${item.description}</p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join('');
    items.innerHTML = displayMenu;
});
