document.addEventListener('keydown', (e) => {
    if (e.key == 's' && e.altKey) {
        showControlPanel();
    }
})
function showControlPanel() {
    localStorage.setItem('session0', JSON.stringify({ CP: true }));
}