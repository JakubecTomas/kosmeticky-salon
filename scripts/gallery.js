const liClicked = document.querySelectorAll('li');

liClicked.forEach(li => {
    li.addEventListener('click', function handleClick(MouseEvent) {
    li.classList.toggle("clicked");
    });
});