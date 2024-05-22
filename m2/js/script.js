function reqListener() {
    console.log(this.responseText);
    const countryArr = JSON.parse(this.responseText)
    console.log(countryArr);
    for (let ind = 0; ind <= countryArr.length - 1; ind++) {
        console.log(countryArr[ind].flag.png);
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
