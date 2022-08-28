let content = document.querySelector('.content');
let body = document.querySelector('body');

content.onclick = function () {
    content.classList.toggle('active');
    body.classList.toggle('active');
}