// generátor random kódu do poukazu
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
        return result;
    }
    
    const randomCodeFive = "WP" + makeid(5);
    localStorage.setItem("kodPoukazu",randomCodeFive);


// write vygenerovaný random kód
let randomCodeLocalStorage = localStorage.getItem("kodPoukazu")
