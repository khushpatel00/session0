start = document.querySelector('#start');
startMenu = document.querySelector('#start-menu');

start.addEventListener('click', () => {
    startMenu.classList.toggle('hidden');
});
document.addEventListener('keyup', (e) => {
   if (e.key == 'Meta' || e.key == 'Super' || e.key == 'Control' ) startMenu.classList.toggle('hidden');
});