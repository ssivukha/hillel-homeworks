const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const isAlcoholFilter = document.querySelector('#is-alcohol');
const isLongFilter = document.querySelector('#is-long');

class Cocktail {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name; // instance property
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
        this.isOrdered = 0;
    }
    getPrice() { // methods of prototype
        return this.ingredients.reduce(function (sum, ingredient) {
            return sum+ingredient.price
        }, 0)
    }

    totalPrice() {
		return this.isOrdered.reduce(function (sum, isOrdered) {
			return sum + isOrdered;
		}, 0);
	}
}

class CocktailsList {
    constructor () {
        this.list = [] // model
        this.filteredList = []; // view model 

        this.filters = { // view model
            isAlcohol: true,
            isLong: true,
            cocktailValue: ''
        }
    }

    setFilterValue (value, type) {
        this.filters[type] = value;
    }

    add(cocktail) {
        this.list.push(cocktail)
    }

    remove(cocktail) {
        let index = this.list.indexOf(cocktail);
        if (index != -1) {
           return this.list.splice(index, 1)
        }
        return list;
    }

    getAll() {
        return this.list;
    }

    showAlcohol() {
        return this.list.filter(item => item.isAlcohol === true)
    }

    showNonAlcohol() {
        return this.list.filter(item => item.isAlcohol === false)
    }

    applyFilters() {
        this.filteredList = this.list.filter(item => {
            return item.isAlcohol === this.filters.isAlcohol
             && (item.type === 'long' && this.filters.isLong || item.type === 'shot' && !this.filters.isLong  )
             && (this.filters.cocktailValue === '' || item.name.indexOf(this.filters.cocktailValue) === 0 )
        });     
    }
  
    render() {
        this.applyFilters(); // change this.list
        let fragment = document.createDocumentFragment();
        
        this.filteredList.forEach(function (item) {
            let cocktailItem = document.createElement('div');
            let coctailName = document.createElement('span');
            let cocktailPrice = document.createElement('span');
            let orderButton = document.createElement('button');

            cocktailItem.className = 'cocktail';
            
            coctailName.innerText = item.name;
            coctailName.setAttribute('data-name', item.name);
           
            cocktailPrice.innerText = item.getPrice() + '$';
                 
            orderButton.innerText = 'Buy';
            orderButton.className = "button-order";

            cocktailItem.append(coctailName);
			cocktailItem.append(cocktailPrice);
			cocktailItem.appendChild(orderButton);

            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }
}

let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))
list.add(new Cocktail('bloody mary', [{name: 'vodka', price: 4},{name: 'juice', price: 2} ], true, 'shot'))
list.add(new Cocktail('orange juice', [{name: 'juice', price: 3}], false, 'long'))


const showList = function () {
    listElement.innerHTML = '';
    listElement.appendChild(list.render())
}
listElement.appendChild(list.render())


function filterHandler () {
    let value = this.type === "checkbox" ? this.checked : this.value;
    list.setFilterValue(value, this.name);
    listElement.innerHTML = '';
    listElement.appendChild(list.render())
}

isAlcoholFilter.addEventListener('change', filterHandler);
isLongFilter.addEventListener('change', filterHandler);
filterInput.addEventListener('input', filterHandler);





















const orderedRow = document.querySelector('#ordered-row');
//const orderListElement = document.querySelector('.order-list');
//const buttons = document.querySelectorAll('.button-order')


class Order {
    constructor () {
        this.ordered = {
			orderedList: []
		}
    }

   /* totalPrice() { // methods of prototype
        return this.items.reduce((sum, item) => item.price+sum, 0)
    }*/

    getOrderedCoctails(coctail) {
		let fragment = document.createDocumentFragment();

		let coctailTotalPrice = document.createElement('div');
		let coctailQuantity = document.createElement('div');

		let resultCoctail = this.filteredList.find(function (item) {
			return item.name === coctail;
		});

		if (this.ordered.orderedList.find((item) => item.name === resultCoctail.name)) {
			
			// update
			this.ordered.orderedList.forEach(function (item) {
				orderedRow.innerHTML = '';

				resultCoctail.isOrdered++;

				let getTotal = item.price * item.isOrdered;

				coctailQuantity.innerText = item.isOrdered;
				coctailTotalPrice.innerText = getTotal;

				fragment.appendChild(coctailQuantity);
				fragment.appendChild(coctailTotalPrice);
			});
			return fragment;

		} else {
			this.ordered.orderedList.push(resultCoctail);
			resultCoctail.isOrdered++;
		}
	}

	renderOrderedCoctails() {
		let fragment = document.createDocumentFragment();

		let coctailName = document.createElement('div');
		let coctailPrice = document.createElement('div');
		let coctailTotalPrice = document.createElement('div');
		let coctailQuantity = document.createElement('div');

		this.ordered.orderedList.forEach(function (item) {
			
			let getTotal = item.price * item.isOrdered;
			debugger
			coctailName.innerText = item.name;
			coctailPrice.innerText = item.price;
			coctailQuantity.innerText = item.isOrdered;
			coctailTotalPrice.innerText = getTotal;

			fragment.appendChild(coctailName);
			fragment.appendChild(coctailQuantity);
			fragment.appendChild(coctailPrice);
			fragment.appendChild(coctailTotalPrice);
			debugger
		});

		return fragment;
	}

    /*renderOrder() {
        this.applyFilters();
        let fragment = document.createDocumentFragment();
        
        this.orderList.forEach(function (item) {
            let cocktailItem = document.createElement('div');
            
            cocktailItem.innerText = `${item.name}`;
            cocktailItem.className = 'cocktail-ordered';

            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }*/

}

let orderList = new Order();

/*const showOrder = function () {
    orderListElement.innerHTML = '';
    orderListElement.appendChild(orderList.renderOrder())
}
orderButton.addEventListener('click', showOrder); */


container.onclick = function (e) {
	if (!e.target.classList.contains('button-order')) return;

	let parent = e.target.parentElement;
	let coctail = parent.children[0].getAttribute('data-name');
	list.getOrderedCoctails(coctail);
	// list.renderOrderedCoctails();
	orderedRow.appendChild(list.renderOrderedCoctails())
}