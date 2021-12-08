let addGb = document.querySelector('#add-gb');
let minusGb = document.querySelector('#minus-gb');

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

addGb.addEventListener('click', function(){
 gb++;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = gb+cc+sugar;
    
})
minusGb.addEventListener('click', function(){
    if (gb > 0){
        gb -= 1;
    }
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = gb+cc+sugar;
})

let addCc = document.querySelector('#add-cc');
let minusCc = document.querySelector('#minus-cc');

addCc.addEventListener('click', function(){
    cc += 1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = gb+sugar+cc;
})
minusCc.addEventListener('click', function(){
    if (cc > 0){
        cc -= 1;
    }
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = sugar+gb+cc;
})

let addSugar= document.querySelector('#add-sugar');
let minusSugar = document.querySelector('#minus-sugar');

addSugar.addEventListener('click', function(){
    sugar += 1;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = sugar+gb+cc;
})
minusSugar.addEventListener('click', function(){
    if (sugar > 0){
        sugar -= 1;
    }
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = sugar+gb+cc;
})