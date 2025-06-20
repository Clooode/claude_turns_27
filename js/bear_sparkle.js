function initBearExplosion() {
    const bearEmojis = ['🐻', '🐻','🐻','🐻','🐻','🐼', '✨', '🍓', '🍯',  '🐟'];
    
    for (let i = 0; i < 50; i++) { // increase number of bears if you like
      const bear = document.createElement('div');
      bear.textContent = bearEmojis[Math.floor(Math.random() * bearEmojis.length)];
      bear.style.position = 'fixed';
      bear.style.left = `${Math.random() * 100}%`;
      bear.style.top = `${Math.random() * 100}%`;
      bear.style.fontSize = `${Math.random() * 24 + 24}px`;
      bear.style.opacity = '1';
      bear.style.transition = 'transform 1.5s ease-out, opacity 1.5s';
      bear.style.pointerEvents = 'none';
      bear.style.zIndex = 9999;
      bear.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 360}deg)`;
  
      document.body.appendChild(bear);
  
      requestAnimationFrame(() => {
        bear.style.transform += ' translateY(-150px)';
        bear.style.opacity = '0';
      });
  
      setTimeout(() => bear.remove(), 1600);
    }
  }
  