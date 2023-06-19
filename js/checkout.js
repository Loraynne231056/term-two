
let data = JSON.parse (localStorage.getItem('orders'));
displayCheckOut = () => {
    
    let item = document.getElementById('orderCheck');
    let totalArea = document.getElementById('outTotal');
    
    let checkTotal = 0;
 
    for (let i = 0; i < data.length; i++){

        let name = data[i].subTitle;
        let bread = data[i].subBread;
        let toppings = data[i].subToppings;
        let sauces = data[i].subSauces;
        let price = data[i].totalCost;

        checkTotal += price;

        item.innerHTML += `
        <div class="card-header">
            <h3>Name: ${name}</h3>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Bread: ${bread}</li>
            <li class="list-group-item">Sauces: ${sauces}</li>
            <li class="list-group-item">Toppings: ${toppings.join(", ")}</li>
            <li class="list-group-item">Price: R${price}.00</li>
            </ul>`
        
        totalArea.innerHTML = "R" + checkTotal + ".00";
    
    }
}

discount = () => {
    
    let discount = document.getElementById('promo').value
    let totalArea = document.getElementById('outTotal');

    for(let i = 0; i < data.length; i++){
        let price = data[i].totalCost;
        
        if(discount ==="free"){
            
            price = price * 75/100;
            totalArea.innerHTML = "R" + price;
            alert("you rock")
            
        } else{
            alert("you suck")
        }
    }
}

reset =() => {
    localStorage.removeItem('orders');
    window.location.href="../index.html";
}

