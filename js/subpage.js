displaySub = () => {

 let thisSub = document.getElementById('subShow');

 for ( let i = 0; i < subData.length; i ++){

    let name = subData[i].subTitle;
        let bread = subData[i].subBread;
        let toppings = subData[i].subToppings;
        let sauces = subData[i].subSauces;
        let price = subData[i].totalCost;

        thisSub.innerHTML +=`
        <div class="col-3">
        <div class="card-deck">
            <div class="card">
                    <div class="card-body">
                        <p class="card-title">${name}</p>
                        <p class="card-text"> Bread: ${bread}</p>
                        <p class="card-text"> Toppings: ${toppings.join(', ')}</p>
                        <p class="card-text"> Sauces: ${sauces}</p>
                        <p class="card-text"> Cost: R${price}.00</p>
                    </div>
            </div>
        </div>
    </div>`
    
        
 }
}

subOrder = [];

addSub =() =>{

    let subCost = 0;

    let subName = document.getElementById("subName").value;
    let sauces =document.getElementById("sauces").value;

    if(sauces === "Mustard"){
        subCost = subCost + 5;
    } else if(sauces === "Honey"){
        subCost = subCost + 7;
    } else if(sauces === "Tomato Sauce"){
        subCost = subCost + 4;
    }


    let bread = document.getElementsByName("gridRadios");
    let breadValue;

    for(let i = 0; i < bread.length; i++){
        if(bread[i].checked){
            breadValue = bread[i].value;
            subCost = subCost + +bread[i].dataset.cost
        }
    }

    let toppings = document.getElementsByName("topCheck");
    let toppingValues = [];

    for(let i = 0; i < toppings.length; i++){
        if(toppings[i].checked){
            toppingValues.push(toppings[i].value);
            subCost = subCost + +toppings[i].dataset.cost
        }
    }
    
    subOrder.push({
        subTitle: subName,
        subSauces: sauces,
        subBread: breadValue,
        subToppings: toppingValues,
        totalCost: subCost
    })
    
    document.getElementById("realSubCost").innerHTML = "R 0.00"
    document.getElementById("subForm").reset()
}

realSubCost = () => {

    realSubPrice = 0;

    let sauces =document.getElementById("sauces").value;

    if(sauces === "Mustard"){
        realSubPrice = realSubPrice +5;
    } else if(sauces === "Honey"){
        realSubPrice = realSubPrice +6;
    } else if(sauces === "Tomato Sauce"){
        realSubPrice = realSubPrice +4;
    }

    let bread = document.getElementsByName("gridRadios");
    for(let i = 0; i < bread.length; i++){
        if(bread[i].checked){
            realSubPrice = realSubPrice + +bread[i].dataset.cost
        }
    }

    let toppings = document.getElementsByName("topCheck");
    for(let i = 0; i < toppings.length; i++){
        if(toppings[i].checked){
            realSubPrice = realSubPrice + +toppings[i].dataset.cost
        }
    }

    document.getElementById("realSubCost").innerHTML = "R" + realSubPrice + ".00"

}

orderDisplay = () => {
    let allOrders = document.getElementById("orders");
    let total = document.getElementById("orderTotal");
    let completeTotal = 0;

    allOrders.innerHTML ="";

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subTitle;
        let bread = subOrder[i].subBread;
        let toppings = subOrder[i].subToppings;
        let sauces = subOrder[i].subSauces;
        let price = subOrder[i].totalCost;

        completeTotal += price;

        allOrders.innerHTML += `
        <div class="col-3">
            <div class="card-deck">
                <div class="card">
                        <div class="card-body">
                            <p class="card-title">${name}</p>
                            <p class="card-text"> Bread: ${bread}</p>
                            <p class="card-text"> Toppings: ${toppings.join(', ')}</p>
                            <p class="card-text"> Sauces: ${sauces}</p>
                            <p class="card-text"> Cost: R${price}.00</p>
                            <a href="../pages/checkout.html" class="btn btn-primary" onclick="checkOut()">Go To Checkout</a>
                        </div>
                </div>
            </div>
        </div>`
        
        total.innerHTML ="R" + completeTotal + ".00"
    }
}

checkOut = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('orders', data);
    window.location.href ='../pages/checkout.html';

}