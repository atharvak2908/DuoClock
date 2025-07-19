let hr = document.querySelector('.hrs');
let mn = document.querySelector('.min');
let sc = document.querySelector('.sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h > 12)
    {
        h = h-12;
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    let hour = document.querySelector('.hour').innerHTML = h;
    let minutes = document.querySelector('.minutes').innerHTML = m;
    let seconds = document.querySelector('.seconds').innerHTML = s;
    document.querySelector('.meridiem').innerHTML = h >= 12 ? 'PM' : 'AM';
}, 1000)

