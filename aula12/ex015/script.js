function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //kidboy
                img.setAttribute('src', 'image/kidboy.png')
            } else if (idade < 21) {
                //boy
                img.setAttribute('src', 'image/boy.png')
            } else if (idade < 50) {
                //man
                img.setAttribute('src', 'image/man.png')
            } else {
                //oldman
                img.setAttribute('src', 'image/oldman.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //kidgirl
                img.setAttribute('src', 'image/kidgirl.png')
            } else if (idade < 21) {
                //girl
                img.setAttribute('src', 'image/girl.png')
            } else if (idade < 50) {
                //woman
                img.setAttribute('src', 'image/woman.png')
            } else {
                //oldwoman
                img.setAttribute('src', 'image/oldwoman.png')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}