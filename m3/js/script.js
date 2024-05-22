
function reqListener() {
  console.log(this.responseText);
  contcountryArr=JSON.parse(this.responseText);
  console.log(countryArr);
  for(let i=0;i<=contcountryArr.length-1;i++){
    console.log(contcountryArr[i].name.common);
    console.log(contcountryArr[i].region);
    console.log(contcountryArr[i].subregion);
    console.log(contcountryArr[i].population);}
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.eu/rest/v2/all");
req.send();