document.addEventListener('DOMContentLoaded', () => {
    const themeRadios = document.querySelectorAll('input[name="theme"]');

    themeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            themeRadios.forEach(r => {
                r.parentElement.classList.remove('active');
            });
            
            e.target.parentElement.classList.add('active');
        });
    });
})