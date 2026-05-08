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

function construirAtomo(elemento) {
    
    const containerAtomo = document.querySelector('.atom'); 
    if (!containerAtomo) return;

    containerAtomo.innerHTML = ''; 
    const nucleo = document.createElement('div');
    nucleo.className = 'nucleus'; 
    nucleo.style.backgroundColor = elemento.corGrupo;
    nucleo.style.boxShadow = `0 0 20px ${elemento.corGrupo}`;
    containerAtomo.appendChild(nucleo);

    const nAtomo = parseInt(elemento.numeroAtomico);
    
    let numOrbitas = 1;
    if (nAtomo > 2) numOrbitas = 2;
    if (nAtomo > 10) numOrbitas = 3;

    for (let i = 1; i <= numOrbitas; i++) {
        const orbita = document.createElement('div');
        orbita.className = `electron-orbit orbit-${i}`; 
        const eletron = document.createElement('div');
        eletron.className = 'electron';
    
        orbita.appendChild(eletron);
        containerAtomo.appendChild(orbita);
    }
    if (typeof isRunning !== 'undefined') {
        const orbits = containerAtomo.querySelectorAll('.electron-orbit');
        orbits.forEach(o => o.style.animationPlayState = isRunning ? 'running' : 'paused');
    }
}