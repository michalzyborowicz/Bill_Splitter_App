const inPrice = document.querySelector('#price')
const inPeople = document.querySelector('#people')
const tipSelect = document.querySelector('#tip')
const btn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const err = document.querySelector('.error')
const result = document.querySelector('.cost')

//this Function checks if user wrote something in inputs and it initiates bill counting function

const billSplitter = () => {
	if (inPrice.value == '' || inPeople.value == '' || tipSelect.value == 0) {
		err.textContent = 'You have to fill all fields'
		costInfo.style.display = 'none'
	} else {
		countBill()
		err.textContent = ''
	}
}

// this function does actuall math on values from inputs
const countBill = () => {

    //Here i could write it without 'ekstra' variables but i think code looks cleaner this way
	const newPrice = parseFloat(inPrice.value)
	const newPeople = parseInt(inPeople.value)
	const tipSize = parseFloat(tipSelect.value)
	const sum = (newPrice + newPrice * tipSize) / newPeople

	costInfo.style.display = 'block'

	result.textContent = sum.toFixed(2)
}

btn.addEventListener('click', billSplitter)
