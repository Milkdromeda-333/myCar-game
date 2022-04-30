const myCar = {
	type: "Scion xB",
	color: "black",
	mileage: 0,
	damage: 0,
	checkEngineLightOn: false,
	money: 2000,
	describe() {
		return `Your debit is ${this.money}. Your damage is ${this.damage}. Your mileage is ${this.mileage}`;
	}
}

function events() {
	let num = Math.ceil(Math.random() * 5);
	if (myCar.damage < 50 && num === 1) {
		myCar.damage -= 3;
		myCar.money += 200;
		myCar.mileage += 50;
		console.log(`You have a normal drive to work. ${myCar.describe()}`);
	} else if (myCar.damage > 50 && num === 1) {
		myCar.damage -= 10;
		myCar.money -= 200;
		myCar.mileage += 5;
		console.log(`Oil change is needed, maybe. Costs 200$" ${myCar.describe()}`);
		} else if (myCar.damage < 50 && num === 2) {
				myCar.damage += 15;
				myCar.money -= 300;
				myCar.mileage += 1000;
				console.log(`Your great cousin died of dysentary. Time to drive out to Wisconsin and act like you care.. oh god and Aunt Carol... ${myCar.describe()}`);
			} else if(myCar.damage > 50 && num === 2) {
				myCar.damage += 10;
				myCar.mileage += 60;
				console.log(`While driving home at night you hit something. You get out to check it out. What is that thing? Better get back into the car and act like it never happened........${myCar.describe()}... also curiosity level at 100000. But, you're not going back.`)
			} else if(myCar.damage < 50 && num === 3) {
				myCar.damage += 10;
				myCar.money += 100;
				myCar.mileage += 100;
				console.log(`You plan on going to college this summer for under-water basket weaving. Need to make money somehow. You descide to do uber eats for the evening. ${myCar.describe()}`);
			} else if(myCar.damage > 50 && num === 3) {
				myCar.damage += 15;
				myCar.money += 150;
				myCar.mileage += 120;
				console.log(`Tinder date with a person who hasn't been to Francisco's Fancy Crab Legs in the next couple cities over. For them...... ${myCar.describe()}`)
			} else if(myCar.damage < 50 && num === 4) {
				console.log(``)
			}
						
}

//events();
