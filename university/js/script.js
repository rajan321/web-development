var menuBtn = document.getElementById('menuBtn');
var navBox = document.getElementById('navBox');

menuBtn.addEventListener('click', function() {
    if(navBox.classList.contains('active')) {
        navBox.classList.remove('active');
    } else {
        navBox.classList.add('active');
    }
})