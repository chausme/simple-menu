class Menu {
    menuItems;

    constructor(items) {
        this.menuItems = items;
    }

    get items() {
        return this.menuItems;
    }

    set items(items) {
        this.menuItems = items;
    }

    displayMenuItems = (items = this.menuItems) => {
        try {
            if (!items.length) {
                throw new Error('No menu items found');
            }
            const itemsEl = document.querySelector('.items');
            let displayMenu = items.map(
                item => `<article class="menu-item">
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
                </article>`
            );
            displayMenu = displayMenu.join('');
            itemsEl.innerHTML = displayMenu;
        } catch (e) {
            console.error(e);
        }
    };

    displayButtons = () => {
        try {
            if (!this.menuItems.length) {
                throw new Error('No menu items found');
            }
            const filters = document.querySelector('.filters');
            const categories = this.menuItems.reduce(
                (values, item) => {
                    if (!values.includes(item.category)) {
                        values.push(item.category);
                    }
                    return values;
                },
                ['all']
            );
            const categoryBtns = categories
                .map(
                    category =>
                        `<button class="btn btn-dark mx-2 mb-3 mb-sm-0" type="button" data-category="${category}">${category}</button>`
                )
                .join('');
            filters.innerHTML = categoryBtns;
            const filterBtns = document.querySelectorAll(':scope .filters button');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', e => {
                    const { category } = e.currentTarget.dataset;
                    const menuFiltered = this.menuItems.filter(item => {
                        if (item.category === category) {
                            return item;
                        }
                        return false;
                    });
                    this.displayMenuItems(category === 'all' ? this.menuItems : menuFiltered);
                });
            });
        } catch (e) {
            console.error(e);
        }
    };
}

const menu = new Menu([
    {
        id: 1,
        title: 'Arugula and burratta pizza',
        category: 'lunch',
        img: new URL('./images/pizza.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 15,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid quia repellat sequi ipsa inventore! Repellendus possimus aut veritatis temporibus.',
    },
    {
        id: 2,
        title: 'Avocado and Poached Eggs on Toast',
        category: 'breakfast',
        img: new URL('./images/toast.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 7,
        description:
            'Sit amet consectetur adipisicing elit. Totam, doloremque incidunt rerum, reiciendis accusantium iusto odio asperiores dolore pariatur eos possimus ab odit voluptatibus nam perferendis dicta suscipit omnis aspernatur fugiat? Ut, tempore!',
    },
    {
        id: 3,
        title: 'Cortado',
        category: 'drinks',
        img: new URL('./images/cortado.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 4,
        description:
            'Adipisicing elit. Totam, doloremque incidunt rerum, reiciendis accusantium iusto odio asperiores dolore pariatur eos possimus ab odit voluptatibus nam perferendis dicta suscipit omnis aspernatur fugiat? Ut, tempore!',
    },
    {
        id: 4,
        title: 'Flat White',
        category: 'drinks',
        img: new URL('./images/flat-white.jpg?as=webp&quality=75&width=600', import.meta.url),
        price: 4,
        description:
            'Adipisicing elit. Totam, doloremque incidunt rerum, reiciendis accusantium iusto odio asperiores dolore pariatur eos possimus ab odit voluptatibus nam perferendis dicta suscipit omnis aspernatur fugiat? Ut, tempore!',
    },
]);

// Load items

window.addEventListener('DOMContentLoaded', () => {
    menu.displayMenuItems();
    menu.displayButtons();
});
