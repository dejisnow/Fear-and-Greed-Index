
window.onload=()=>{
let meter = document.querySelector(".meter__div");

let indexToday = document.querySelector(".index__today");
let indexYesterday = document.querySelector(".index__yesterday");
let indexTnumber = document.querySelector(".indexT__number");

let indexYnumber = document.querySelector(".indexY__number");

let btn = document.querySelector(".btn") ;
let indexNumber = 0;

const url = 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi';
async function caller(url){
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':'INSERT_API_KEY',
        'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    
indexToday.innerHTML = result.fgi.now.valueText
indexYesterday.innerHTML = result.fgi.previousClose.valueText

indexTnumber.innerHTML= result.fgi.now.value;
indexYnumber.innerHTML = result.fgi.previousClose.value;
indexNumber = result.fgi.now.value;

let indexFunction = await indexNumber 
let finalResult = ((indexFunction / 100)/2 ) * 360

// let finalResult = indexFunction(indexNumber)
setTimeout(()=>{
    meter.style.transform = `rotate(${finalResult}deg)`
   
},5000)


     
} catch (error) {
    console.error(error);
}
   
   }
   
   caller(url)
 


} 
   
  
      




￼Enter
