
function reqListener() {
  console.log(this.responseText);
  constcountryArr=JSON.parse(this.responseText);
  console.log(countryArr);
  for(let i=0;i<=constcountryArr.length-1;i++);{
    console.log(constcountryArr[i].name.common);
    console.log(constcountryArr[i].region);
    console.log(constcountryArr[i].subregion);
    console.log(constcountryArr[i].population);}
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();