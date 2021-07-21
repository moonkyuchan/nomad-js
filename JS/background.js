const images = ["01.jpeg", "02.jpeg", "03.jpeg"];

const showImage = images[Math.floor(Math.random() * images.length)];

const makeImg = document.createElement("img"); //element 생성

makeImg.src = `IMG/${showImage}`;

document.body.appendChild(makeImg); // body에 연결시켜주자
