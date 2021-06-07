const totalBalance = document.querySelector('.amountvalue')
const costDescription = document.querySelector('#costname')
const costAmount = document.querySelector('#amount')
const costType = document.querySelector('#costtype')

const expenseList = document.querySelector('.expenselist')

const createListItem = (description, amount, type) => {
    const expenseListItem = document.createElement('div')
    expenseListItem.classList.add('expenselistitem')
    const amountWithRupee = document.createElement('div')
    amountWithRupee.classList.add('amountwithrupee')
    const costItemDescription = document.createElement('p')
    costItemDescription.textContent = description;
    costItemDescription.classList.add('costmessage')
    
    const rupeeSymbol = document.createElement('p')
    rupeeSymbol.classList.add('rupee')
    const amountValue =  document.createElement('p')
    amountValue.classList.add('amountvalue')
    amountValue.textContent = amount

    amountWithRupee.appendChild(rupeeSymbol);
    amountWithRupee.appendChild(amountValue);
    expenseListItem.appendChild(amountWithRupee);
    expenseListItem.appendChild(costItemDescription);

    expenseList.appendChild(expenseListItem)
}