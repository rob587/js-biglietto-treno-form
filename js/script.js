

//-----------//

const button = document.getElementById('btn');

//evento del bottone//

button.addEventListener('click', (e) => {
    e.preventDefault()


    const name = document.getElementById('name').value
    const kmrun = document.getElementById('travel').value
    const years = document.getElementById('age').value

    

    const yearMinor= 'minor'
    const yearOlder= 'old'
    const ticket = 0.21
    const km = parseFloat(kmrun)

    //operazione scontistiche del biglietto//

    let price = km * ticket;
    let offer = "Biglietto Standard"

    if(years===yearMinor){
        price= price*0.8
        offer= 'Sconto Minorenni'
    
    }

    else if(years===yearOlder){
        price= price*0.6
        offer= 'Sconto Over 65'
    }



        

    document.getElementById('show-price').innerText=   `€ ${price.toFixed(2)}`;

    
        document.getElementById('show-name').innerText= name
        document.getElementById('show-price').innerText= price
        
        
})