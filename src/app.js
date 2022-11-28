const menu = [
    {
        id: 1,
        title: 'Arugula and burratta pizza',
        category: 'Lunch',
        img: new URL('./images/pizza.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 15,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid quia repellat sequi ipsa inventore! Repellendus possimus aut veritatis temporibus.',
    },
    {
        id: 2,
        title: 'Avocado and Poached Eggs on Toast',
        category: 'Breakfast',
        img: new URL('./images/toast.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 7,
        description:
            'Sit amet consectetur adipisicing elit. Totam, doloremque incidunt rerum, reiciendis accusantium iusto odio asperiores dolore pariatur eos possimus ab odit voluptatibus nam perferendis dicta suscipit omnis aspernatur fugiat? Ut, tempore!',
    },
    {
        id: 3,
        title: 'Cortado',
        category: 'Drinks',
        img: new URL('./images/cortado.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 4,
        description:
            'Adipisicing elit. Totam, doloremque incidunt rerum, reiciendis accusantium iusto odio asperiores dolore pariatur eos possimus ab odit voluptatibus nam perferendis dicta suscipit omnis aspernatur fugiat? Ut, tempore!',
    },
];

const items = document.querySelector('.items');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});

const displayMenuItems = menuItems => {
    let displayMenu = menuItems.map(item => {
        return `<article class="menu-item">
            <div class="picture shadow">
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
};
