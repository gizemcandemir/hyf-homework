const elements = [
	{ child: 1, color: "Red", x: 20, y: 300 },
	{ child: 2, color: "Blue", x: 400, y: 300 },
	{ child: 3, color: "Green", x: 400, y: 20 }
];

function translateOneByOne(elements) {
	if (elements.length) {
		const el = elements.shift();
		moveElement(document.querySelector(`li:nth-child(${el.child})`), {
			x: el.x,
			y: el.y
		}).then(() => {
			console.log(`${el.color} element has been moved`);
			translateOneByOne(elements);
		});
	}
}

function translateAllAtOnce(elements) {
	const promises = [];
	elements.forEach(el => {
    promises.push(
      moveElement(document.querySelector(`li:nth-child(${el.child})`), {
        x: el.x,
        y: el.y
      })
    );
	});
	Promise.all(promises).then(() => {
		console.log("All elements have been moved");
	});
}

// translateOneByOne(elements);
translateAllAtOnce(elements);
