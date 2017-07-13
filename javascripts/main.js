menu = [
	{
		title: "Truffled Knish",
		img: "images/knish.jpg",
		description: "A potato and cheese filling made with Cypress Grove's, Truffle Tremor & baked in a soft dough",
		price: "12.00"
	},
	{
		title: "Chicken Matzoh Ball Soup",
		img: "images/matzoh.jpg",
		description: "A golden chicken broth adorned with small, dill matzoh balls and spicy pickled carrots",
		price: "9.00"
	},
	{
		title: "Latke & Lox Benedict",
		img: "images/latke-benedict.jpg",
		description: "Poached eggs atop potato latkes and lox, topped with hollandaise and capers",
		price: "18.00"
	},
	{
		title: "Open Faced Reuben",
		img: "images/reuben.jpg",
		description: "A half pound of corned beef over house made rye, with purple cabbage coleslaw and russian dressing",
		price: "20.00"
	},
	{
		title: "Rasberry Rugelach Tart",
		img: "images/tart.jpg",
		description: "Tart of fresh rasberry rugelach and creme fraiche chantilly creme",
		price: "14.00"
	},
	{
		title: "Goat Cheese and Bluberry Blintz",
		img: "images/blintz.jpg",
		description: "Goat cheese, bluberry, walnut, and honey filled crepe",
		price: "14.00"
	},
	{
		title: "The Schmuck",
		img: "images/schmuck.jpg",
		description: "A gin and tonic made with Dr. Brown's, Cel-ray soda and Bombay Saphire, with a dash of celery bitters",
		price: "20.00"
	},
	{
		title: "The Mishegas",
		img: "images/sour.jpg",
		description: "A clove and pair sour with Manishevitz red wine",
		price: "20.00"
	},
]



let menuDiv = document.getElementById("menu");

	function menuItem() {
	
		menu.forEach(function(item){
			
			let card = `<div class="card">
				<h1>${item.title}</h1>
				<img src="${item.img}">
				<p>${item.description}</p>
				<p>${item.price}</p></div>`;

			menuDiv.innerHTML += card;
			

	});
}

	
menuItem();
	

		








// let myBtn = document.getElementsByClassName("myBtn");
// // myBtn.addEventListener("click", menuItem);
// 		console.log(myBtn);





// card = document.getElementById("menu");
// let menuItem = [title, description, price];

// function myFunction(item) {
//     card.innerHTML = card.innerHTML + menuItem; 
// }

// eventlistener
// menu =document.getElementById("menu");

// menuItem = `<h1>${item.title}</h1>
// 		<img src="${item.image}">
// 		<p>${item.description}</p>
// 		<p>${item.price}</p>`;

// menu.innerHTML += menuItem;