// Меджнунов Рауф ИСиП(п)2/4

// Задание 1
// 1. Вывести кнопку с текстом Привет, при нажатии на неё выводим alert c
// текстом Привет Мир;

let button = document.getElementById('helloButt');

button.addEventListener('click', function() {
    alert('Привет Мир!');
});

// Задание 2
// 2. Выводим кнопку с текстом Заполнить и незаполненный инпут, при клике
// на кнопку, заполняем инпут текстом test@email.ru

let fillButton = document.getElementById('fillButt');
let emailInput = document.getElementById('emailInp');

fillButton.addEventListener('click', function() {
    emailInput.value = 'test@email.ru';
});

// Задание 3
// 3. Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при
// нажатии на кнопку, выводится алерт с текстом Вы ввели текст инпута
// или Вы ничего не ввели в поле.

let fieldInput = document.getElementById('fieldInp');
let submitButton = document.getElementById('submitButt');

submitButton.addEventListener('click', function() {
    let inputValue = fieldInput.value;

    if (inputValue !== '') {
        alert("Вы ввели '" + inputValue + "'");
    } else {
        alert('Вы ничего не ввели в поле');
    }
});

// Задание 4
// 4. Выводим кнопку с текстом Поменять и два инпута, при клике на кнопку
// инпуты меняются своим введеным текстом

let input1 = document.getElementById('inp1');
let input2 = document.getElementById('inp2');
let changeButton = document.getElementById('changeButt');

changeButton.addEventListener('click', function() {
    let value1 = input1.value;
    let value2 = input2.value;

    input1.value = value2;
    input2.value = value1;
});

// Задание 5
// 5. Выводим две кнопки заблокировать и разблокировать и инпут. Одна из
// них блокирует инпут с помощью атрибута disabled, а другая разблокирует

let inputField2 = document.getElementById('fieldInp2');
let blockButton = document.getElementById('blockButt');
let unblockButton = document.getElementById('unblockButt');

blockButton.addEventListener('click', function() {
    inputField2.disabled = true;
});

unblockButton.addEventListener('click', function() {
    inputField2.disabled = false;
});

// Задание 6
// 6. Вывести любой квадрат и кнопку скрыть квадрат. Когда мы нажимаем
// на скрыть, квадрат исчезает и текст кнопки меняется на показать
// квадрат и так можно кликать сколько угодно раз.

let square = document.getElementById('square');
let hideButton = document.getElementById('hideButt');

hideButton.addEventListener('click', function() {
    if (square.classList.contains('hidden')) {
        square.classList.remove('hidden');
        hideButton.textContent = 'Скрыть квадрат';
    } else {
        square.classList.add('hidden');
        hideButton.textContent = 'Показать квадрат';
    }
});

// Задание 7
// 7. Выводим красный квадрат, при наведении на него он становиться
// зеленым, а когда уводим курсор от него, обратно красным.

let square1 = document.getElementById('square1');

square.addEventListener('mouseenter', function() {
    square.style.backgroundColor = 'green';
});

square.addEventListener('mouseleave', function() {
    square.style.backgroundColor = 'red';
});

// Задание 8
// 8. Вывести 4 красных квадрата, при клике на любой, он становиться
// зеленым, при этом если есть уже зеленый квадрат, то он становиться
// обратно красным и так можно кликать на любой квадрат, он становиться
// зеленым, а старый зеленый квадрат обратно крассным и тд. (Сделать
// задачу так, чтобы можно было добавить ещё хоть 100 квадратов при этом
// скрипт не надо менять).

let container = document.querySelector('.container');
let squares = document.querySelectorAll('.square2');

squares.forEach(function(square) {
    square.addEventListener('click', function() {
        let currentGreen = container.querySelector('.green');
        if (currentGreen) {
            currentGreen.classList.remove('green');
        }
        square.classList.add('green');
    });
});