/*!
 * Create a random color value.
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @return {String} A random six-digit color hexcode
 */
var createColor = function () {

	// The available hex options
	var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	/**
	 * Randomly shuffle an array
	 * https://stackoverflow.com/a/2450976/1293256
	 */
	var shuffle = function () {

		var currentIndex = hex.length;
		var temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = hex[currentIndex];
			hex[currentIndex] = hex[randomIndex];
			hex[randomIndex] = temporaryValue;
		}

	};

	/**
	 * Create a six-digit hex color
	 */
	var hexColor = function () {

		var color = '#';

		for (var i = 0; i < 6; i++) {

			// Shuffle the hex values
			shuffle(hex);

			// Append first hex value to the string
			color += hex[0];

		}

		return color;

	};

	// Return the color string
	return hexColor();

};

/*!
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
var getContrast = function (hexcolor){

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};

debugger
// Set the color/BG color
var app = document.querySelector('#app');
var bgColor = createColor();
app.textContent = bgColor;
app.style.backgroundColor = bgColor;
app.style.color = getContrast(bgColor);