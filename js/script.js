//su 100km sono 21euro - 20% 16.80 per i minorenni//
//su 100km sono 21euro - 40% 12.60 per over 65//








//-----------//

const button = document.getElementById('btn');

button.addEventListener('click', (e) => {
    e.preventDefault()


    const name = document.getElementById('name').value
    const kmrun = document.getElementById('travel').value
    const years = document.getElementById('age').value

    const yearMinor= 'minor'
    const yearOlder= 'old'
    const ticket= 0.21
    const km = parseFloat(kmrun)

    let price = km * 0.21;

    if(years===yearMinor){
    price= price*0.8
    
    }

    else if(years===yearOlder){
    price= price*0.6
    }



          //da aggiustare

    document.getElementById('show-price').innerText=   `Ciao ${name}, prezzo: € ${price.toFixed(2)}`;

})