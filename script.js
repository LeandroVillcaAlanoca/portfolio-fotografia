```javascript
document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', () => {
        if (image.classList.contains('selecionada')) {
            image.classList.remove('selecionada');
            image.style.backgroundColor = '#ddd';
        } else {
            image.classList.add('selecionada');
            image.style.backgroundColor = 'rgb(255, 99, 71)';
        }
    });
});
```