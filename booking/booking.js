const citiesWithDoctors = {
  "Banglore": ["Dr. Smith", "Dr. Johnson"],
  "Mysore": ["Dr. Brown", "Dr. Lee"],
  "Udupi": ["Dr. Davis", "Dr. Martinez"],
  "Delhi": ["Dr. Wilson", "Dr. Anderson"],
  "manglore": ["Dr. Wilson", "Dr. Anderson"],
  "Mumbai": ["Dr. Wilson", "Dr. Anderson"],
  "Kundapura": ["Dr. Wilson", "Dr. Anderson"],
  "lucknow": ["Dr. Wilson", "Dr. Anderson"],
  "banaras": ["Dr. Wilson", "Dr. Anderson"],
  "ayodhya": ["Dr. Wilson", "Dr. Anderson"],
  "hydrabad": ["Dr. Wilson", "Dr. Anderson"],
  "moodabidre": ["Dr. Wilson", "Dr. Anderson"],
  "chennai": ["Dr. Wilson", "Dr. Anderson"],


  
};

const doctorLinks = {
  "Dentist": "/results/dentist.html",
  "Gynecologist": "/results/gyno.html",
  "Obstetrician": "/results/gyno.html",
  "Diettian": "/results/diet.html",
  "Nutrition": "/results/diet.html",
  "Physiotherapist": "/results/phys.html",
  "General surgeon": "/results/surge.html",
  "Orthopedist": "/results/ortho.html",

 
};

const citySearchInput = document.getElementById('citySearch');
const doctorSearchInput = document.getElementById('doctorSearch');
const citySearchResults = document.getElementById('citySearchResults');
const doctorSearchResults = document.getElementById('doctorSearchResults');
const submitBtn = document.getElementById('submitBtn');

citySearchInput.addEventListener('input', function() {
  const searchValue = this.value.trim().toLowerCase();
  const filteredCities = Object.keys(citiesWithDoctors).filter(city => city.toLowerCase().includes(searchValue));
  displayOptions(filteredCities, citySearchResults, citySearchInput);
});

citySearchInput.addEventListener('change', function() {
  const selectedCity = this.value;
  const doctorsInCity = citiesWithDoctors[selectedCity] || [];
  populateDoctorSearch(doctorsInCity);
});

doctorSearchInput.addEventListener('input', function() {
  const searchValue = this.value.trim().toLowerCase();
  const filteredDoctors = Object.keys(doctorLinks).filter(doctor => doctor.toLowerCase().includes(searchValue));
  displayOptions(filteredDoctors, doctorSearchResults, doctorSearchInput);
});

function populateDoctorSearch(doctors) {
  const html = doctors.map(doctor => `<li>${doctor}</li>`).join('');
  doctorSearchResults.innerHTML = html;
}

function displayOptions(options, container, inputField) {
  if (options.length === 0) {
    container.innerHTML = '<li>Result not found</li>';
    container.style.display = 'block'; 
    return;
  }
  const html = options.map(option => `<li>${option}</li>`).join('');
  container.innerHTML = html;
  container.style.display = 'block'; 
}


citySearchResults.addEventListener('click', function(event) {
  const selectedCity = event.target.textContent;
  citySearchInput.value = selectedCity;
  const doctorsInCity = citiesWithDoctors[selectedCity] || [];
  populateDoctorSearch(doctorsInCity);
  citySearchResults.style.display = 'none'; 
});

// Add event listener to doctor search results
doctorSearchResults.addEventListener('click', function(event) {
  doctorSearchInput.value = event.target.textContent;
  doctorSearchResults.style.display = 'none'; 
});



document.addEventListener('click', function(event) {
  const cityResults = document.getElementById('citySearchResults');
  const doctorResults = document.getElementById('doctorSearchResults');
  if (!event.target.closest('#citySearchResults') && event.target !== citySearchInput) {
    cityResults.style.display = 'none';
  }
  if (!event.target.closest('#doctorSearchResults') && event.target !== doctorSearchInput) {
    doctorResults.style.display = 'none';
  }
});


submitBtn.addEventListener('click', function() {
  const selectedCity = citySearchInput.value;
  const selectedDoctor = doctorSearchInput.value;
  console.log("Selected City:", selectedCity);
  console.log("Selected Doctor:", selectedDoctor);

  if (doctorLinks[selectedDoctor]) {
    window.location.href = doctorLinks[selectedDoctor]; 
  } else {
    alert("No webpage linked to the selected doctor.");
   
  }
});
