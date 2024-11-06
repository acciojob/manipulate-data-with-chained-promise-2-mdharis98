function manipulateData(inputArray) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
      resolve(inputArray);
    }, 3000);
	}).then((array) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const evenNumbers = array.filter((num) => num % 2 === 0);
				document.getElementById("output").innerText = evenNumbers.join(",");
				resolve(evenNumbers);
			},1000);
		})
	}).then((evenNumbers)=> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const doubleNumbers = evenNumbers.map((num) => num * 2);
				document.getElementById("output").innerText = doubleNumbers.join(",");
				resolve(doubleNumbers);
			},2000);
		})
	});
}

const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);