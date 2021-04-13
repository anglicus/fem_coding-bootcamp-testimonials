const nextButton = document.getElementById('button-next');
const prevButton = document.getElementById('button-prev');


nextButton.addEventListener('click', () => {
    const displayPic = document.querySelector('.display-pic');
    const hiddenPic = document.querySelector('.hidden-pic');
    displayPic.classList.remove('display-pic', 'enter-left', 'enter-right');
    displayPic.classList.add('hidden-pic', 'exit-right');
    hiddenPic.classList.remove('hidden-pic', 'exit-left', 'exit-right');
    hiddenPic.classList.add('display-pic', 'enter-right');

    const displayText = document.querySelector('.display-text');
    const hiddenText = document.querySelector('.hidden-text');
    displayText.classList.remove('display-text', 'fade-in');
    displayText.classList.add('hidden-text', 'fade-out');
    hiddenText.classList.remove('hidden-text', 'fade-out');
    hiddenText.classList.add('display-text', 'fade-in');
});

prevButton.addEventListener('click', () => {
    const displayPic = document.querySelector('.display-pic');
    const hiddenPic = document.querySelector('.hidden-pic');
    displayPic.classList.remove('display-pic', 'enter-left', 'enter-right');
    displayPic.classList.add('hidden-pic', 'exit-left');
    hiddenPic.classList.remove('hidden-pic', 'exit-left', 'exit-right');
    hiddenPic.classList.add('display-pic', 'enter-left');

    const displayText = document.querySelector('.display-text');
    const hiddenText = document.querySelector('.hidden-text');
    displayText.classList.remove('display-text', 'fade-in');
    displayText.classList.add('hidden-text', 'fade-out');
    hiddenText.classList.remove('hidden-text', 'fade-out');
    hiddenText.classList.add('display-text', 'fade-in');
});

window.addEventListener('keyup', (e) => {
   if (e.key === 'ArrowLeft') {
       e.preventDefault();
       prevButton.click();
   }
   if (e.key === 'ArrowRight') {
       e.preventDefault();
       nextButton.click();
   }
});