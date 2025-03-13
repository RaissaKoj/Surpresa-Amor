function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Inserindo um SVG de coração dentro da div
    heart.innerHTML = `
        <svg viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    `;

    // Posição aleatória no topo da tela
    heart.style.left = Math.random() * window.innerWidth + "px"; // Largura aleatória
    heart.style.top = "-30px"; // Começa um pouco acima do topo
    heart.style.width = Math.random() * 40 + 20 + "px"; // Tamanhos variados
    heart.style.height = heart.style.width;
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Velocidade diferente
    
    document.body.appendChild(heart);

    // Remover após a animação para não pesar a página
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500)