// doplnění aktuálního roku do copyright
const year = document.querySelector('#actual-year');
year.innerHTML = new Date().getFullYear();




// mobile nav - zákaz scrolování při otevřeném menu
const showDialog = () => {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
        document.getElementById('show').id = 'close';
        document.getElementById( "close" ).setAttribute( "onClick", "javascript: closeDialog();" );
};
      
const closeDialog = () => {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.getElementById('close').id = 'show';
        document.getElementById( "show" ).setAttribute( "onClick", "javascript: showDialog();" );
}
window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});





