document.getElementById('calculateBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const basePrice = parseFloat(document.getElementById('startingBid').value) || 100;

    if (!name || isNaN(basePrice)) {
        alert("Please enter a valid name and starting bid.");
        return;
    }

    const educationCoefficient = parseFloat(document.getElementById('education').value) || 1;
    const netWorthCoefficient = parseFloat(document.getElementById('netWorth').value) || 1;
    const casteValue = parseFloat(document.getElementById('caste').value) || 0;

    let skillsBonus = 0;
    if (document.getElementById('musician').checked) skillsBonus += 10;
    if (document.getElementById('cook').checked) skillsBonus += 20;
    if (document.getElementById('easygoing').checked) skillsBonus += 15;
    if (document.getElementById('singer').checked) skillsBonus += 10;

    const ageCoefficient = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationMultiplier = 1;
	if (document.getElementById('parentsAttitude').checked) reputationMultiplier *= 0.85;
	if (document.getElementById('characterGossip').checked) reputationMultiplier *= 0.9;

	let finalPrice = basePrice * educationCoefficient * netWorthCoefficient * ageCoefficient * reputationMultiplier + casteValue + skillsBonus;

	if (document.getElementById('generalGossip').checked) {
		finalPrice -= 20;
	}

    let person = {
		bride_name: name,
		bride_price: finalPrice.toFixed(2),
		letter_to_bride: document.getElementById('loveLetter').value
	};
    
    document.getElementById('finalPrice').innerText = `${finalPrice.toFixed(2)}`;

	const resultText = `Your price for ${person.bride_name} is $${person.bride_price}. Love letter: "${person.letter_to_bride}"`;
	document.getElementById('result').innerText = resultText;
});