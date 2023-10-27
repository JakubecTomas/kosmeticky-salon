window.addEventListener('scroll', startAnimationAdActive);
 
function startAnimationAdActive() {
 var ActualElement = document.querySelectorAll('.start-animation');

    for(let i = 0; i < ActualElement.length; i++){

        let revealtop = ActualElement[i].getBoundingClientRect().top;

        if(revealtop < window.innerHeight - 100){
            ActualElement[i].classList.add('active');
        }
    }
}

