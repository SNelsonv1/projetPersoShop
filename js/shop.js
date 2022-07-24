let table1 = document.querySelector('.table1');
let table2 = document.querySelector('.table2');
let table3 = document.querySelector('.table3');

let nourriture = document.querySelector('.nourriture')
function table_1() {
    table1.style.display = '';
    table2.style.display = 'none';
    table3.style.display = 'none';
}
nourriture.addEventListener('click', table_1);

let materiel = document.querySelector('.materiel')
function table_2() {
    table2.style.display = '';
    table1.style.display = 'none';
    table3.style.display = 'none';
}
materiel.addEventListener('click', table_2);

let autre = document.querySelector('.autre')
function table_3() {
    table3.style.display = '';
    table1.style.display = 'none';
    table2.style.display = 'none';
}
autre.addEventListener('click', table_3);


let cellule = document.getElementsByTagName('td');
let panier = document.querySelector('.panier');

<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
for (let i = 0; i < cellule.length; i++) {
    function ajoutPanier() {
        panier.append(cellule[i]);
        console.log('Ok')
    }
    cellule[i].addEventListener('click', ajoutPanier);
}