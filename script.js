// Seleccionamos el botón
const magicBtn = document.getElementById('magicBtn');

magicBtn.addEventListener('click', () => {
    // Lanzamos una alerta épica
    alert("¡HAS DESPERTADO TU GRIMORIO! 📖✨");
    
    // Cambiamos el color de la tarjeta mágica temporalmente
    const card = document.querySelector('.magic-card');
    card.style.borderColor = '#ff4500'; // Color fuego/antimagia
    card.style.boxShadow = '0 0 40px #ff4500';
    
    console.log("Magia activada con éxito.");
});
