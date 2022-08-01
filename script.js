

// Javascript program to accept an amount
// and count number of notes

	// function to count and
	// print currency notes
    
	let outData = ''
document.querySelector('#formCkeck').addEventListener('submit', countCurrency)   
 document.querySelector('#clear').addEventListener('click', clearOutput)

	function countCurrency(e) {
        let amount = document.getElementById("money").value
        console.log(amount)
		let notes = [ 1000, 500, 200, 100, 50, 20, 10, 5 ];
		let noteCounter = Array(8).fill(0);

		// count notes using Greedy approach
		for (let i = 0; i < 8; i++) {
			if (amount >= notes[i]) {
				noteCounter[i] = Math.floor(amount / notes[i]);
				amount = amount - noteCounter[i] * notes[i];
			}
		}
		// let results = document.querySelector('#results')
		// Print notes
		// document.write("Currency Count ->" + "<br/>");
        for (let i = 0; i < 8; i++) {
            if (noteCounter[i] != 0) {
                let cur = notes[i] + " : "
                    + noteCounter[i] + "<br/>";
					console.log(cur)
					outData += '<li>' + cur + '</li>'
					document.getElementById('results').innerHTML = outData
					document.querySelector('.total').innerHTML = document.getElementById("money").value
				}
        }

		
        
    e.preventDefault()
}

function clearOutput() {
	document.querySelector('#results').innerHTML = ''
	document.querySelector('.total').innerHTML = ''
    document.getElementById("money").value = ''
}
