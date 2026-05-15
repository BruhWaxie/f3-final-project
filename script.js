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


// What year u were born?
const inputLeapYear = document.querySelector('.year input[type="number"]')
const outputLeapYear = document.querySelector('.year .output')
const leapYearBtn = document.querySelector('.year .search-btn')

leapYearBtn.addEventListener('click', () => {
    if (inputLeapYear) {
        if (inputLeapYear.value % 4 === 0) {
            outputLeapYear.textContent = 'Ви народилися у високосний рік!'
            outputLeapYear.classList.add('pos')
            outputLeapYear.classList.remove('neg')
        } else if (inputLeapYear.value % 4 != 0) {
            outputLeapYear.textContent = 'Ви не народилися у високосний рік!'
            outputLeapYear.classList.add('neg')
            outputLeapYear.classList.remove('pos')
        } else {
            outputLeapYear.textContent = 'Спочатку введіть у поле рік!'
            outputLeapYear.classList.remove('pos')
            outputLeapYear.classList.remove('neg')
        }
    }
})


// Guess number
const inputGuessNum = document.querySelector('.guess-num input[type="number"')
const outputGuessNum = document.querySelector('.guess-num .output')
const guessNumBtn = document.querySelector('.guess-num .search-btn')

guessNumBtn.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 10 + 1)
    console.log(randNum)
    if (inputGuessNum) {
        if (Number(inputGuessNum.value) === randNum) {
            outputGuessNum.textContent = `Вітаю, ви вгадали число! (${randNum})`
            outputGuessNum.classList.add('pos')
            outputGuessNum.classList.remove('neg')
        } else {
            outputGuessNum.textContent = `Ви програли, комп’ютер загадав ${randNum}`
            outputGuessNum.classList.remove('pos')
            outputGuessNum.classList.add('neg')
        }
    }
})


// Rock - paper - scissors
const rockChoice = document.querySelector('#rock')
const paperChoice = document.querySelector('#paper')
const scissorsChoice = document.querySelector('#scissors')

const rpsBtn = document.querySelector('.rps .standart-btn')
const rpsResult = document.querySelector('.rpc-result')

const computerScoreBoard = document.querySelector('.computerScore')
const playerScoreBoard = document.querySelector('.yourScore')

let computerScore = 0
let yourScore = 0

rpsBtn.addEventListener('click', () => {
    let randChoice = Math.floor(Math.random() * 3 + 1)
    console.log(randChoice)
    if (randChoice === 1) {
        if (rockChoice.checked === true) {
            rpsResult.textContent = 'Ви виграли раунд!'
            rpsResult.classList.add('pos')
            rpsResult.classList.remove('neg')
            yourScore += 1
        } else {
            rpsResult.textContent = "Комп'ютер виграв раунд!"
            rpsResult.classList.remove('pos')
            rpsResult.classList.add('neg')
            computerScore += 1
        }
    } else if (randChoice === 2) {
        if (scissorsChoice.checked === true) {
            rpsResult.textContent = 'Ви виграли раунд!'
            rpsResult.classList.add('pos')
            rpsResult.classList.remove('neg')
            yourScore += 1
        } else {
            rpsResult.textContent = "Комп'ютер виграв раунд!"
            rpsResult.classList.remove('pos')
            rpsResult.classList.add('neg')
            computerScore += 1
        }
    } else if (randChoice === 3) {
        if (paperChoice.checked === true) {
            rpsResult.textContent = 'Ви виграли раунд!'
            rpsResult.classList.add('pos')
            rpsResult.classList.remove('neg')
            yourScore += 1
        } else {
            rpsResult.textContent = "Комп'ютер виграв раунд!"
            rpsResult.classList.remove('pos')
            rpsResult.classList.add('neg')
            computerScore += 1
        }
    }
    playerScoreBoard.textContent = yourScore
    computerScoreBoard.textContent = computerScore
})


// Calculator
const calcNumber1 = document.querySelector('#number1')
const calcNumber2 = document.querySelector('#number2')
const calcInputs = document.querySelectorAll('.calculator input')

const additionAct = document.querySelector('#add')
const subtractionAct = document.querySelector('#subtract')
const multiplicationAct = document.querySelector('#multiply')
const divisionAct = document.querySelector('#divide')

const calcResult = document.querySelector('.calculator .result')


calcInputs.forEach((input) => {
    input.addEventListener('input', () => {
        const num1 = Number(calcNumber1.value)
        const num2 = Number(calcNumber2.value)
        
        if (calcNumber1.value !== '' && calcNumber2.value !== '') {
            if (additionAct.checked) {
                calcResult.textContent = num1 + num2
            } else if (subtractionAct.checked) {
                calcResult.textContent = num1 - num2
            } else if (multiplicationAct.checked) {
                calcResult.textContent = num1 * num2
            } else if (divisionAct.checked) {
                if (num2 === 0) {
                    calcResult.textContent = 'Помилка'
                } else {
                    calcResult.textContent = num1 / num2
                }
            } else {
                calcResult.textContent = 'Результат'
            }
        } else {
                calcResult.textContent = 'Результат'
        }
    })
})


// Time calculator
const timeCalcInput = document.querySelector('.date-calc input')
const timeCalcBtn = document.querySelector('.date-calc .search-btn')
const timeCalcOutput = document.querySelector('.date-calc .output')

timeCalcBtn.addEventListener('click', () => {
    const num = Number(timeCalcInput.value)
    console.log(num)
    if (timeCalcInput) {
        timeCalcOutput.textContent = `${Math.floor(num/60)} год. ${num % 60} хв.`
    }
})

// Greatest num
const gNum1 = document.querySelector('#gnNumber1')
const gNum2 = document.querySelector('#gnNumber2')
const gNum3 = document.querySelector('#gnNumber3')

const gnNums = document.querySelectorAll('.greatest-number input')
const gnOutput = document.querySelector('.greatest-number p')

gnNums.forEach(a => {
    a.addEventListener('input', () => {
        let num1 = Number(gNum1.value)
        let num2 = Number(gNum2.value)
        let num3 = Number(gNum3.value)
        if (gNum1.value && gNum2.value && gNum3.value) {
            gnOutput.textContent = `Найбільше число, яке ви ввели - ${Math.max(num1, num2, num3)}`
        } else {
            gnOutput.textContent ='Спершу, введіть усі 3 числа'
        }
        
    })
})


// Carousel
const arwBtnPrev = document.querySelector('.arrow-btn.previous')
const arwBtnNext = document.querySelector('.arrow-btn.next')
const teamList = document.querySelector('.our-team-list-cont')
const slides = document.querySelectorAll('.slider-visual .slide')

let index = 0
const max = 6
let timer;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (index < max) {
            index++;
        } else {
            index = 0;
        }
        updateOurTeam();
    }, 10000);
}

function updateOurTeam() {
    teamList.style.transform = `translate(-${index*800}px)`;
    
    slides.forEach((slide) => {
        slide.classList.remove('current-slide');
    });
    
    const currentSlide = slides[index];
    void currentSlide.offsetWidth;
    currentSlide.classList.add('current-slide');
    
    startTimer();
}

arwBtnNext.addEventListener('click', () => {
    if (index < max) {
        index++;
        updateOurTeam();
    }
})

arwBtnPrev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateOurTeam();
    }
})

slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        index = i;
        updateOurTeam();
    })
})

startTimer();


// Football
const field = document.querySelector('.football-frame')
const ball = document.querySelector('.football-frame .ball')

field.addEventListener('click', function(event) {
  const fieldRect = field.getBoundingClientRect()

  let clickX = event.clientX - fieldRect.left - field.clientLeft
  let clickY = event.clientY - fieldRect.top - field.clientTop

  let ballLeft = clickX - ball.offsetWidth / 2
  let ballTop = clickY - ball.offsetHeight / 2

  if (ballLeft < 0) {
    ballLeft = 0
  }

  if (ballTop < 0) {
    ballTop = 0
  }

  if (ballLeft > field.clientWidth - ball.offsetWidth) {
    ballLeft = field.clientWidth - ball.offsetWidth
  }

  if (ballTop > field.clientHeight - ball.offsetHeight) {
    ballTop = field.clientHeight - ball.offsetHeight
  }

  ball.style.left = ballLeft + 'px'
  ball.style.top = ballTop + 'px'
})

// Choose Scientist
const scientistGrid = document.querySelector('.grid-list');
const scientistDivs = document.querySelectorAll('.scientist-div');

document.querySelectorAll('.sorting-div').forEach(div => div.style.cursor = 'pointer');

function renderScientists(arr) {
    scientistDivs.forEach(div => div.innerHTML = '');
    arr.forEach((scientist, index) => {
        if (index < scientistDivs.length) {
            scientistDivs[index].innerHTML = `
                <p style="font-size: 11px; margin: 10px 0 5px; text-align: center; font-weight: bold;">${scientist.name} ${scientist.surname}</p>
                <p style="font-size: 11px; margin: 0; text-align: center;">${scientist.born} - ${scientist.dead}</p>
            `;
        }
    });
}

function renderText(text) {
    scientistDivs.forEach(div => div.innerHTML = '');
    scientistDivs[0].innerHTML = `<p style="font-size: 12px; margin: 10px; text-align: center; font-weight: bold;">${text}</p>`;
}

renderScientists(scientists);

function handleFilterClick(element, action) {
    const wasActive = element.classList.contains('active');
    
    document.querySelectorAll('.sorting-div').forEach(div => div.classList.remove('active'));
    
    if (wasActive) {
        renderScientists(scientists);
    } else {
        element.classList.add('active');
        action();
    }
}

document.getElementById('task1').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = scientists.filter(s => s.born > 1800 && s.born <= 1900);
        renderScientists(result);
    });
});

document.getElementById('task2').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const albert = scientists.find(s => s.name === 'Albert' && s.surname === 'Einstein');
        renderText(albert ? albert.born : 'Не знайдено');
    });
});

document.getElementById('task3').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = [...scientists].sort((a, b) => a.surname.localeCompare(b.surname));
        renderScientists(result);
    });
});

document.getElementById('task4').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = scientists.filter(s => s.surname.startsWith('C'));
        renderScientists(result);
    });
});

document.getElementById('task5').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
        renderScientists(result);
    });
});

document.getElementById('task6').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = scientists.filter(s => !s.name.startsWith('A'));
        renderScientists(result);
    });
});

document.getElementById('task7').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const latest = scientists.reduce((latest, s) => s.born > latest.born ? s : latest, scientists[0]);
        renderScientists([latest]);
    });
});

document.getElementById('task8').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const longest = scientists.reduce((longest, s) => (s.dead - s.born) > (longest.dead - longest.born) ? s : longest, scientists[0]);
        const shortest = scientists.reduce((shortest, s) => (s.dead - s.born) < (shortest.dead - shortest.born) ? s : shortest, scientists[0]);
        renderScientists([longest, shortest]);
    });
});

document.getElementById('task9').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = scientists.filter(s => s.name[0] === s.surname[0]);
        renderScientists(result);
    });
});

document.getElementById('task10').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const total = scientists.reduce((sum, s) => sum + (s.dead - s.born), 0);
        renderText(`Всього: ${total} років`);
    });
});

document.getElementById('task11').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const result = scientists.filter(s => !(s.born > 1400 && s.born <= 1700));
        renderScientists(result);
    });
});

document.getElementById('task12').addEventListener('click', function() {
    handleFilterClick(this, () => {
        const allWorked = scientists.every(s => s.dead > 1800 && s.born <= 1900);
        renderText(allWorked ? 'Так, всі працювали в 19 ст.' : 'Ні, не всі працювали в 19 ст.');
    });
});

