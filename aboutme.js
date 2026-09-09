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