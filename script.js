
let allTotal = 0;

function addToCart(element){
    let cardItems;
    let mainEl = element.closest('.single-item');//radimo nad klasom '.single-item'
    let price = mainEl.querySelector('.price').innerText;
    let cena = +price.substring(1);
    // mozemo da radimo queriSelektor i na skupom  HTMLa, ne mora samo nad document.
    let naziv = mainEl.querySelector('h3').innerText;
     // let input = (elemnt.previousElementSibling).value;
    let input = mainEl.querySelector('input').value;
    //za inpute ide .vaule a za ostale HTML elemente ide .innerText
     let namirnice = +input * cena;
    
     //total = +total;
    allTotal += namirnice;

    
    if (+input > 0) {
        let zbir = `<div class= "cart-single-item">
                        <h3>${naziv}</h3>
                        <p>${price} * ${input}  = $${namirnice}<p>
                        <button onclick="removeFromCard(this)" class="remove-item">Ukloni</button>
                    </div>`;

        cardItems = document.querySelector('.cart-items');
        cardItems.innerHTML += zbir;

        document.querySelector('.total').innerText = `Total: ${allTotal}$ `;

        element.innerText = 'Dodato';
        enable = element.setAttribute('disabled', 'true');

       

    } else {
        alert('Odaberi kolicinu');
    }
}



function removeFromCard(e){

    let mainEl = e.closest('.cart-single-item');

    let price = mainEl.querySelector('p').innerText;
    price = +price.substring(11);

    let name = mainEl.querySelector('h3').innerText;

    let vegetabels = document.querySelectorAll('.single-item');

    mainEl.remove();
    
    allTotal -= price;
    document.querySelector('.total').innerText = `Total: ${allTotal}$`

vegetabels.forEach(function(vege){
    if(vege.querySelector('.si-content h3').innerText == name){
        vege.querySelector('.actions input').value = 0;
        vege.querySelector('.actions button').removeAttribute('disabled');
        vege.querySelector('.actions button').innerText = 'Dodaj';
    }
});

  
}