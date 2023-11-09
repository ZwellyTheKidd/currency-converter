let api=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


const fromDropDown=document.getElementById("from-currency");
const toDropDown=document.getElementById("to-currency");

currencies.forEach(currency => {

    const option=document.createElement("option");

    option.value=currency;
    option.text=currency;
    fromDropDown.add(option);
    
});

currencies.forEach(currency => {

    const option=document.createElement("option");

    option.value=currency;
    option.text=currency;
    toDropDown.add(option);
    
});

fromDropDown.value="USD";
toDropDown.value="ZAR";

let convertCurrency=()=>{
    const amount=document.querySelector("#amount").value;
    const fromCurrency=fromDropDown.value;
    const toCurrency=toDropDown.value;

    if (amount != 0) {

        fetch(api)
         .then((resp)=> resp.json())
         .then((data)=>{
            let fromExchange=data.conversion_rates[fromCurrency];
            let toExchange=data.conversion_rates[toCurrency];

            const convertedAmount=(amount/ fromExchange)*toExchange;

            


         });
        
    }
    else{
        alert("Please enter an amount");
    }
};

document
 .querySelector("#Convert-btn")
 .addEventListener("click", convertCurrency);
 window.addEventListener("load", convertCurrency);

