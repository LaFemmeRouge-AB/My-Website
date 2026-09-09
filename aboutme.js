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