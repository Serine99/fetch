fetch('https://corona-api.com/countries/am').then(function (response){
   
return response.json();
}).then(function (response) {
 const target = document.getElementById('target');
 target.innerText = response.data.today.confirmed;
})