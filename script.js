function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h : ${data.getMinutes()}min.`

    if(hora >= 0 && hora <12){
        //Bom dia!
        img.src = 'manha.png'
        
        document.body.style.background = '#f4e4c2'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#c6d8e8'
    }else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#476179'
    }
}