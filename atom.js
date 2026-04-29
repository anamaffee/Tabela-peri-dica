// Exemplo: Pausar/Retomar animação
const atom = document.querySelector('.atom');
let isRunning = true;

document.body.addEventListener('click', () => {
    if (isRunning) {
        document.querySelectorAll('.electron-orbit').forEach(o => o.style.animationPlayState = 'paused');
    } else {
        document.querySelectorAll('.electron-orbit').forEach(o => o.style.animationPlayState = 'running');
    }
    isRunning = !isRunning;
});
