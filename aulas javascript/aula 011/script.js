function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagemmanha.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagemtarde.png'
    }else {   
        //Boa noite!
        img.src = 'imagemnoite.jpeg'
    }
}