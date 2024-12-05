document.getElementById('feedback').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const feedback = document.getElementById('message').value;
    alert('Дякуємо за ваш відгук: ' + feedback);
    document.getElementById('message').value = ''; 
});