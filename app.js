// 1-masala
const tex1 = document.getElementById('texx')
const bck1 = document.getElementById('bck');
bck1 && bck1.addEventListener('click', function() {
    tex1.style.color = 'red';
})
// 2-masala
const massege = document.getElementById('massege');
const text = document.getElementById('text');
const btn = document.getElementById('btn')
btn && btn.addEventListener('click', function(){
    navigator.clipboard.writeText(text.value);
    massege.innerHTML = 'Xabar saqlandi';
    setTimeout(() => {
        massege.innerHTML = ''
    }, 1000);
})
// 3-masala
const search3 = document.getElementById('search');
const btn3 = document.getElementById('btn3');
const text3 = document.getElementById('text3') 
btn3 && btn3.addEventListener('click', function() {
    if (search3.value) {
        let textMassege = text3.innerHTML.trim();
        textMassege = textMassege.replaceAll(search3.value, `<span style =  "color: red">${search3.value}</span>`)
        text3.innerHTML = textMassege
    }
})
// 4-masala
const paraf =document.querySelectorAll("#paraf");
const yaw = document.getElementById('yawirish');
const koriw = document.getElementById('korsatish')
yaw && yaw.addEventListener('click', function (){
    paraf.forEach(function(para) {
        para.style.display = 'none'
    })
})
koriw && koriw.addEventListener('click', function(){
    paraf.forEach(function(para) {
        para.style.display = 'block'
    })
})
// 5-masala
const buttons5 = document.querySelectorAll("button");
buttons5.length && buttons5.forEach(button => {
    button && button.addEventListener('click', function (){
        if(this.innerHTML == 'sariq') {
            document.body.style.background = 'yellow'
        }
        if(this.innerHTML == 'qizil') {
            document.body.style.background = 'red'
        }
        if(this.innerHTML == 'yashil') {
            document.body.style.background = 'green'
        }
    })
})
// 6-masala
const text6 = document.querySelectorAll("#text6")
const big = document.getElementById('big')
big && big.addEventListener('click', function(){
    text6.style.fontSize = '30px'
})
// 7-masala
const field = document.querySelector("#field");
const text7 = document.querySelector("#text7")
field && field.addEventListener('input', function (){
 text7.innerHTML = this.value

})
// 8-masala
const passw = document.querySelector("#password");
const berk = document.querySelector("#berk");
berk && berk.addEventListener('click', function (){
if (passw === "password") {
    passw .type = 'text';
    this.textContent = 'yashirish'
} else {
    passw.type = 'password';
    this.textContent = 'Parolni korsatish'
}
})
// 9-masala
const div9 = document.querySelector(".div9");
const top = document.querySelector("#top")
const bottom = document.querySelector("#botoom")
const righ = document.querySelector("#righ")
const left = document.querySelector("#left")
top && top.addEventListener('click', function(){
    div9.style.margintop = '10px'
})
bottom && bottom.addEventListener('click', function(){
    div9.style.marginbottom = '10px'
})
righ && righ.addEventListener('click', function(){
    div9.style.marginrigh = '10px'
})
left && left.addEventListener('click', function(){
    div9.style.marginleft = '10px'
})
// 10-masala
const img = document.querySelector("img");
const random = document.querySelector("#random");
const images = ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/238/200/300", "https://picsum.photos/id/239/200/300"]
random && random.addEventListener('click', function(){
    let random = Math.floor(Math.random() * images.length);
    img.setAttribute('src', images[random])
})
//11-masala
const passw = document.querySelector("#password");
const berk = document.querySelector("#berk");
berk && berk.addEventListener('click', function (){
if (passw === "password") {
    passw .type = 'text';
    this.textContent = 'yashirish'
} else {
    passw.type = 'password';
    this.textContent = 'Parolni korsatish'
}
})
// 12-masala
const info = document.querySelector("#info");
const run = document.querySelector("#run")
run && run.addEventListener('click', function(){
    info.innerHTML = 'Salom,'
})


