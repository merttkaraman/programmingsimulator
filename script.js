var checkboxes = document.querySelectorAll('input');

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
        updateBugs(this);
    });
}

function updateBugs(changedElement) {
    var checkedCount = document.querySelectorAll('input:checked').length;

    // No bugs, thats impossible!
    if (checkedCount === 0) {
        turnOnRandomBug(changedElement);
        if (Math.random() > 0.85) {
            turnOnRandomBug(changedElement);
        }
    }
}

function turnOnRandomBug(excluding) {
    turnOn = Math.floor(Math.random() * checkboxes.length);

    if (checkboxes[turnOn] === excluding) {
        turnOn = turnOn + 1;
        if (turnOn > (checkboxes.length - 1)) {
            turnOn = 0;
        }
    }

    checkboxes[turnOn].checked = true;
}

setTimeout(function () {
    turnOnRandomBug(null);
}, 400);


// Kapatma butonu işlevi
const kapatmaButonu = document.getElementById("kapatma-butonu");
const container = document.querySelector(".container");
const problemSolved = document.getElementById("problem-solved");

kapatmaButonu.addEventListener("click", () => {
  container.classList.add("kapaniyor"); 

  setTimeout(() => {
    container.style.display = "none";
    problemSolved.style.display = "block";
  }, 1000); 
});

// Kar efekti oluşturma
function karEfektOlustur() {
    const body = document.querySelector("body"); // body elementini seç
    const karSayisi = 50; // İstediğiniz kar tanesi sayısı
  
    for (let i = 0; i < karSayisi; i++) {
      const kar = document.createElement("div");
      kar.classList.add("kar");
      kar.style.left = `${Math.random() * 100}%`; // Rastgele yatay konum
      kar.style.animationDuration = `${Math.random() * 5 + 5}s`; // Rastgele düşme hızı
      body.appendChild(kar); // Kar tanesini body'ye ekle
    }
  }
  
  karEfektOlustur(); // Fonksiyonu çağırarak kar efektini başlat