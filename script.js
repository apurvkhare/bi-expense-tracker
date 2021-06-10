
const totalBalance = document.querySelector('.amountvalue')
const costDescription = document.querySelector('#costname')
const costAmount = document.querySelector('#amount')
const costType = document.querySelector('#costtype')

const expenseList = document.querySelector('.expenselist')

let count = 0; 

const createListItem = (description, amount, type) => {
    const presentCount = count
    const expenseListItem = document.createElement('div')
    expenseListItem.classList.add('expenselistitem')
    expenseListItem.setAttribute('id', presentCount)
    count++
    if(type === "income"){
        expenseListItem.classList.add('income')
    }else if(type === "expense"){
        expenseListItem.classList.add('expense')
    }
    console.log(expenseListItem.classList)

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

    const editIcon = document.createElement('span')
    editIcon.innerHTML="&#9998;"
    editIcon.classList.add('editIcon')
    const deleteIcon = document.createElement('span')
    deleteIcon.innerHTML="delete"
    deleteIcon.classList.add('deleteIcon')
    deleteIcon.setAttribute('data-id', presentCount)

    deleteIcon.addEventListener('click', () => {
        const expenseListItem = document.getElementById(deleteIcon.dataset.id)
        const amountEle = expenseListItem.childNodes[0].childNodes[1]

        const type = Array(expenseListItem.classList).includes('income') ? 'income' : 'expense'

        if(type === "income"){
            totalBalance.textContent = parseInt(totalBalance.textContent, 10) - parseInt(amountEle.textContent, 10)
        }else if(type === "expense")
            totalBalance.textContent = parseInt(totalBalance.textContent, 10) + parseInt(amountEle.textContent, 10)

        expenseListItem.remove()
    })

    const optionsDiv = document.createElement('div')
    optionsDiv.appendChild(editIcon)
    optionsDiv.appendChild(deleteIcon)

    amountWithRupee.appendChild(rupeeSymbol);
    amountWithRupee.appendChild(amountValue);
    expenseListItem.appendChild(amountWithRupee);
    expenseListItem.appendChild(costItemDescription);
    expenseListItem.appendChild(optionsDiv)

    expenseList.appendChild(expenseListItem)
}

const addCostItem = () => {

    const desc = costDescription.value
    const amount = parseInt(costAmount.value, 10)
    let balance = parseInt(totalBalance.textContent, 10)
    const costTypeValue = costType.value

    console.log(amount)
    if(isNaN(amount)){
        alert("Please enter a valid amount")
        return
    }

    if(desc.toString() === '' || costAmount.value.toString().trim() === ''){
        alert('Description and amount should not be empty')
        return
    }
    
    if(costTypeValue === "income"){
        totalBalance.textContent = balance + amount
    }else if(costTypeValue === "expense")
        totalBalance.textContent = balance - amount

    createListItem(desc, amount, costTypeValue)
}


const addBtn = document.querySelector('#add')
console.log(addBtn)
addBtn.addEventListener('click', addCostItem)