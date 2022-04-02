let data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

let body = document.querySelector('body') 
let maindiv = document.createElement('div') 
let names = document.createElement('div') 
let ticker = document.createElement('div') 
let value = document.createElement('div') 
let change = document.createElement('div') 
let form = document.createElement('form') 
let plus = document.createElement('button')
let nameinput = document.createElement('input')
let tickerinput = document.createElement('input')
let valueinput = document.createElement('input')
let changeinput = document.createElement('input')

body.append(maindiv) 
body.append(form) 
form.append(plus) 
form.append(nameinput)
form.append(tickerinput)
form.append(valueinput)
form.append(changeinput)
maindiv.append(names) 
maindiv.append(ticker) 
maindiv.append(value) 
maindiv.append(change) 

plus.innerText = "ADD AREA"
nameinput.placeholder = "NAME"
tickerinput.placeholder = "TICKER"
valueinput.placeholder = "VALUE"
changeinput.placeholder = "CHANGE"

maindiv.classList.add('container') 
names.classList.add('name') 
ticker.classList.add('ticker') 
value.classList.add('value') 
change.classList.add('change') 

let namespan = document.createElement("p");
let tickerspan = document.createElement("p");
let valuespan = document.createElement("p");
let changespan = document.createElement("p");

names.prepend(namespan)
namespan.innerText = 'Names'

ticker.prepend(tickerspan)
tickerspan.innerText = 'Ticker'

value.prepend(valuespan)
valuespan.innerText = 'Value'

change.prepend(changespan)
changespan.innerText = 'Change'

function compare(){
    let table  = document.querySelectorAll('.container div:last-child span');
    table.forEach((item)=>{
 let num = parseInt(item.innerText)
   
   if(num > 0){
       item.style.color = "green"
   }
   else if (num < 0){
           item.style.color = "red"
 
   }
})
}

document.querySelector('button').addEventListener('click', function(e) {
  e.preventDefault();
    
    let parsechangeinput = changeinput.value
    let parse = parseInt(parsechangeinput)
    let parsevalueinput = valueinput.value
    let parsev = parseInt(parsevalueinput)

     data.push( { "name":nameinput.value , "ticker":tickerinput.value , "value":parsev, "change": parse });  
    
     document.querySelector('.name').insertAdjacentHTML('beforeend','<span>' + nameinput.value + '</span>');
    document.querySelector('.ticker').insertAdjacentHTML('beforeend','<span>' + tickerinput.value + '</span>');
    document.querySelector('.value').insertAdjacentHTML('beforeend','<span>' + parsev + '</span>');
 document.querySelector('.change').insertAdjacentHTML('beforeend','<span>' + parse + '%' +  '</span>');

     compare()
})

data.forEach((item) =>{
let namein = document.createElement("span");
let tickerin = document.createElement("span");
let valuein = document.createElement("span");
let changein = document.createElement("span");

  namein.innerText = item.name;
  names.appendChild(namein);

  tickerin.innerText = item.ticker;
  ticker.appendChild(tickerin);
  
  valuein.innerText = item.value;
  parseInt(valuein.innerText)
  value.appendChild(valuein);

  changein.innerText = item.change;
  change.appendChild(changein);
})

compare()