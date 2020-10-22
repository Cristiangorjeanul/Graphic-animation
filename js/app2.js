document.addEventListener('DOMContentLoaded', function () {

    var ball1 = document.querySelector('.ball1');
    var ball2 = document.querySelector('.ball2');
    var counter = 1;
    
    ball1.addEventListener('click', function () {
        document.querySelector('h3 span').innerText = counter;
        document.querySelector('h3 span').style.color = "#ff0000"
        document.querySelector('h3 span').style.backgroundColor = "#00ff7f"
        counter++;
    });

    ball2.addEventListener('click', function () {
        document.querySelector('h3 span').innerText = counter;
        document.querySelector('h3 span').style.color = "#ff0000"
        document.querySelector('h3 span').style.backgroundColor = "#00ff7f"
        counter++;
    });

}); 