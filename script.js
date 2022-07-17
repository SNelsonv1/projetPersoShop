let table1 = document.querySelector(".table1");
let table2 = document.querySelector(".table2");
let table3 = document.querySelector(".table3");

function table_1() {
    table1.style.display = '';
    table2.style.display = 'none';
    table3.style.display = 'none';
}

function table_2() {
    table2.style.display = '';
    table1.style.display = 'none';
    table3.style.display = 'none';
}

function table_3() {
    table3.style.display = '';
    table1.style.display = 'none';
    table2.style.display = 'none';
}

let testElement = document.querySelector('td');

function signal() {
    console.log('Ok')
}

testElement.addEventListener('click', signal);