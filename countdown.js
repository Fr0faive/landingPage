let hariItem = document.querySelector("#hari");
let jamItem = document.querySelector("#jam");
let menitItem = document.querySelector("#menit");
let detikItem = document.querySelector("#detik");


let countDown = () => {
    let futureDate = new Date("1 Sep 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    //console.log(myDate);

    let hari = Math.floor(myDate / 1000 / 60 / 60 / 24);

    let jam = Math.floor(myDate / 1000 / 60 / 60) % 24;

    let menit = Math.floor(myDate / 1000 / 60) % 60;

    let detik = Math.floor(myDate / 1000) % 60;

    hariItem.innerHTML = hari;
    jamItem.innerHTML = jam;
    menitItem.innerHTML = menit;
    detikItem.innerHTML = detik;
}

countDown()

setInterval(countDown, 1000)

