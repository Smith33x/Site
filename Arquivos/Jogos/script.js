document.querySelectorAll('.game-item a').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
    });
});
