const popupCross = document.querySelector('.svg-cross')
const popupWindow = document.querySelector('.popup-container')

const saveUserNameBtn = document.querySelector('#saveUserNameBtn')
const userNameInput = document.querySelector('.button-container input')
const welcomeUserNameSpan = document.querySelector('.welcomeUserName')

popupCross.addEventListener('click', () => {
    popupWindow.remove('opened')
})

saveUserNameBtn.addEventListener('click', () => {
    if (userNameInput.value != '') {
        welcomeUserNameSpan.textContent = userNameInput.value
        popupWindow.remove('opened')
    } else {
        alert('Нічого не було введено!')
    }
})

const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownBtn = document.querySelector('.dropdown-btn')

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open')
})

const frame = document.querySelector('.football-frame');
const customCursor = document.querySelector('.cursor');

frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    customCursor.style.left = `${x-5}px`;
    customCursor.style.top = `${y-5}px`;
});

frame.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
});

frame.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
});


// Calculator
const firstCalcNumber = document.querySelector('#number1')
const secondCalcNumber = document.querySelector('#number2')
const calcOutputField = document.querySelector('.calc-result')

const addAct = document.querySelector('#addAct')
const subtractAct = document.querySelector('#subtractAct')
const multiplyAct = document.querySelector('#multiplyAct')
const divideAct = document.querySelector('#divideAct')


firstCalcNumber.addEventListener('input', () => {
    if (secondCalcNumber) {
        if (addAct.value) {
            calcOutputField.textContent = firstCalcNumber.value + secondCalcNumber.value
        } else if (subtractAct.value) {
            calcOutputField.textContent = firstCalcNumber.value - secondCalcNumber.value
        } else if (multiplyAct.value) {
            calcOutputField.textContent = firstCalcNumber.value * secondCalcNumber.value
        } else if (divideAct.value) {
            if (secondCalcNumber.value === 0) {
                calcOutputField.textContent = "Помилка. На 0 ділити не можна"
            } else {
            calcOutputField.textContent = firstCalcNumber.value - secondCalcNumber.value
        }}
    }
})