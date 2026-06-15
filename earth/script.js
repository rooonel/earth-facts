const countries = [
"Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
"Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
"Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
"Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso",
"Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic",
"Chad","Chile","China","Colombia","Comoros","Congo (Brazzaville)",
"Congo (Kinshasa)","Costa Rica","Croatia","Cuba","Cyprus","Czechia",
"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
"Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
"Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras",
"Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
"Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
"Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
"Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
"Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
"Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
"Nauru","Nepal","Netherlands","New Zealand",
"North Korea","North Macedonia","Norway","Oman","Palau","Panama",
"Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar",
"Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
"Saint Vincent and the Grenadines","Samoa","San Marino",
"Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
"Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
"South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
"Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand",
"Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey",
"Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates",
"United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
"Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

function loadCountries(){
const grid = document.getElementById("countriesGrid");

countries.forEach(c => {
const div = document.createElement("div");
div.className = "card";
div.innerText = c;
grid.appendChild(div);
});
}

function show(page){
document.querySelectorAll("section")
.forEach(s => s.classList.remove("active"));

document.getElementById(page)
.classList.add("active");
}

const places = [
"Mount Fuji 🇯🇵",
"Sahara Desert 🌵",
"Amazon Rainforest 🌿",
"Paris 🇫🇷",
"New York 🇺🇸",
"Antarctica ❄️",
"Great Barrier Reef 🐠"
];

function randomPlace(){
document.getElementById("place").innerText =
places[Math.floor(Math.random() * places.length)];
}

window.onload = loadCountries;