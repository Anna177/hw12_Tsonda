const rectangle = {
    getSquare: 0,
    width: 5,
    height: 8,
    getRectangle: getRectangle
}
    function getRectangle() {
    	return this.width*this.height;
    }
    rectangle.getRectangle()


const price = {
	price: 10,
	discount: '15%',
	getPrice: function oldPrice() {
	return price.price
	},
	getPriceWithDiscount: function newPrice() {
	return parseInt(this.price) * (100 - parseInt(this.discount))/100;
	}
}
	price.getPrice();
	price.getPriceWithDiscount();


const user = {
  name: 'Abraham',
  getName: function getUserName() {
  return user.name 
  }
}
user.getName();


let getElementHeight = element.getHeight;
getElementHeight = function() {
return this.height;
}
getElementHeight.call(element);

const object = {
	height: 10,
	getHeight: function height() {
		return object.height + 1;
	}
}
object.getHeight();


const numerator = {
	value: 1,
	double(num = 2) {
		console.log(this);
		console.log(num);
		this.value += num;
		return this
	},
	plusOne(num = 1) {
		this.value -= num;
		return this
	},
	minusOne(num = 1) {
		this.value -= num;
		return this
	}

}
numerator.double().plusOne().minusOne();
numerator.value

const object = {
	price: 50,
	quantity: 300,
	gerPrice: function() {
		return this.price*this.quantity;
	}
};
object.gerPrice();

const object2 = {
	quantity: 600,
	price: 30,
};
object2.gerPrice = object.gerPrice;
object2.gerPrice();


let sizes = {
	width: 5,
	height: 10,
},
	getSquare = function() {
		return this.width*this.height
	};
	getSquare.call(sizes);

let numbers = [4, 12, 0, 10, -2, 4];
Math.min.apply(null, [4, 12, 0, 10, -2, 4]);


const element = {
	height: '15px',
	marginTop: '5px',
	marginBottom: '5px',
	getFullHeight: function() {
		return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
	} 
};
element.getFullHeight();

const block = {
	height: '5px',
	marginTop: '3px',
	marginBottom: '3px',
};
block.getFullHeight = element.getFullHeight;
block.getFullHeight();

let element = {
	height: 25,
	getHeight: function() {
		return this.height;
	}
};
let getElementHeight = element.getHeight;
getElementHeight = function() {
return this.height;
}
getElementHeight.call(element);