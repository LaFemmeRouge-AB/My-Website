const target = document.getElementById('bloodstream-vinyl');
const audio = document.getElementById('bloodstream-audio');

target.addEventListener('click', () => {
    if (target.classList.contains("is-spinning")) {
        const computedStyle = window.getComputedStyle(target);
        const currentTransform = computedStyle.transform;
        target.classList.remove("is-spinning");
        target.style.transform = currentTransform;
    } else {
        target.style.transform = '';
        target.classList.add("is-spinning");
    }
});

target.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        target.classList.add('Playing');
    } else {
        audio.pause();
        target.classList.remove('Playing');
    }
});

const prescription = document.getElementById('prescription-vinyl');
const prescriptionAudio = document.getElementById('prescription-audio');

prescription.addEventListener('click', () => {
    if (prescription.classList.contains("is-spinning")) {
        const computedStyle = window.getComputedStyle(prescription);
        const currentTransform = computedStyle.transform;
        prescription.classList.remove("is-spinning");
        prescription.style.transform = currentTransform;
    } else {
        prescription.style.transform = '';
        prescription.classList.add("is-spinning");
    }
});

prescription.addEventListener('click', () => {
    if (prescriptionAudio.paused) {
        prescriptionAudio.play();
        prescription.classList.add('Playing');
    } else {
        prescriptionAudio.pause();
        prescription.classList.remove('Playing');
    }
});

const fable = document.getElementById('fable-vinyl');
const fableAudio = document.getElementById('fable-audio');

fable.addEventListener('click', () => {
    if (fable.classList.contains("is-spinning")) {
        const computedStyle = window.getComputedStyle(fable);
        const currentTransform = computedStyle.transform;
        fable.classList.remove("is-spinning");
        fable.style.transform = currentTransform;
    } else {
        fable.style.transform = '';
        fable.classList.add("is-spinning");
    }
});

fable.addEventListener('click', () => {
    if (fableAudio.paused) {
        fableAudio.play();
        fable.classList.add('Playing');
    } else {
        fableAudio.pause();
        fable.classList.remove('Playing');
    }
});

function viewfunction() {
  var x = document.getElementById("beliefs");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}