let canvas;
let URL1 = 'https://catfact.ninja/fact';
let URL2 = 'https://randomuser.me/api/';
let URL3 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let URL4 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let URL5 = 'https://dog.ceo/api/breeds/image/random';

let isFetched = null;
let isFetchedImg = null;
let linkImg;
let randomNumber;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    button = createButton('Charge again');
    button.position(500, 500);
    button.mousePressed(() => {
        randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        switch (randomNumber) {
            case 0:
                console.log("Hola 0");
                fetch(URL1)
                    .then(response => response.json())
                    .then(data => {
                        isFetched = data.fact
                    });
                break;

            case 1:
                console.log("Hola 1");
                fetch(URL2)
                    .then(response => response.json())
                    .then(data => {
                        isFetched = "Hello, I am " + data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
                    });

                break;

            case 2:
                console.log("Hola 2");
                fetch(URL3)
                    .then(response => response.json())
                    .then(data => {
                        isFetched = data.time.updated
                    });
                break;

            case 3:
                console.log("Hola 3");
                fetch(URL4)
                    .then(response => response.json())
                    .then(data => {
                        isFetched = data.data[0].Nation + " | " + data.data[0].Year + " | " + data.data[0].Population
                    });
                break;
        }
    });

    button2 = createButton('Dog Image!');
    button2.position(800, 500);
    button2.mousePressed(() => {
        fetch(URL5)
            .then(response => response.json())
            .then(data => {
                console.log("Hola 4");
                isFetchedImg = data
                linkImg = loadImage(isFetchedImg.message)
            });
    });
}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    if (isFetched != null) {
        text(isFetched, 100, 100, 300);
    }

    if (isFetchedImg != null) {
        image(linkImg, 800, 100, 200, 200);
    }
}

function mouseClicked() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}