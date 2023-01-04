function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Agora são ${hour} horas.`
if (hour >= 0 && hour < 12) {
    img.src = 'image/morning-pq.png'
    document.body.style.background = '#6178a4'
} else if (hour >= 12 && hour < 18) {
    img.src = 'image/afternoon-pq.png'
    document.body.style.background = '#fd9c19'
} else {
    img.src = 'image/night-pq.png'
    document.body.style.background = '#003b3b'
}
}