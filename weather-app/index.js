let textBox = document.getElementById('input');
let button = document.getElementById('button');
let form = document.getElementById('form');
let inputTable = document.getElementById('tableData');
const tbody = document.querySelector('#tbody');
const store = new Map() ;
let streets,map;


form.onsubmit = function formSubmit(form) {
    form.preventDefault();
};

button.onclick = function returnWeather() {
fetch(`http://api.weatherstack.com/current?access_key=a46eafc88e6d04d0bfa42e320a9dc78b&query=${textBox.value}`)
.then(response => {
    return response.json();
})
.then(data => { 
    store.set(name, [data.location.name, data.location.country, data.current.temperature, ((data.current.temperature*1,8)+32)]);
    tbody.innerHTML = ''
     store.forEach((value, key) => {
         const [city, country, temperature, temperatureFareng] = value
         const row = `<tr>
             <td>${city}</td>
             <td>${country}</td>
             <td>${temperature}</td>
             <td>${temperatureFareng}</td>
         </tr>`
         tbody.innerHTML = tbody.innerHTML + row
     })
 })
     fetch(`https://api.locationiq.com/v1/autocomplete.php?key=dc93e1dde89de1&q=${textBox.value}`)
    .then(response => {
        return response.json();
    })
    .then(value => { 
    console.log(value);
    var key = 'pk.5bd587259d9952ed02b01605bdf86a42';
    var streets = L.tileLayer.Unwired({key: key, scheme: "streets"});
       map = L.map('map', {
          center: [value[0].lat, value[0].lon], 
          zoom: 14,
          scrollWheelZoom: false,
          layers: [streets] 
      });
      
      L.control.scale().addTo(map);
      L.control.layers({
          "Streets": streets
      }).addTo(map);
      L.marker([value.lat, value.lon]).addTo(map);
    })
};


