const video = document.getElementById("bgVideo");
const music = document.getElementById("bgMusic");

const start = document.getElementById("startScreen");
const play = document.getElementById("playBtn");



play.onclick = ()=>{


    // video
    video.classList.add("active");

    video.play();



    // music
    music.volume = 0.8;

    music.play();



    // ilangin tombol masbro

    start.style.opacity="0";


    setTimeout(()=>{

        start.remove();

    },700);



};


const lyrics = [

`She said, How do we expect`,

`To be anything`,

`When we don't try`,

`To be anything?`,

`And why the hell
do you`,

`Always ignore me when`,

`I'm calling`,

`Are you busy
doing`,

`Better things?`,

`In August now`,

`It's calling out`,

`In August...`,

`I want this`,

`I want this`,

`In August now`,

`It's calling out`,

`In August...`,

`I want this`,

`I want this`,

`...`

];

const text = document.getElementById("lyrics");
const button = document.getElementById("nextBtn");

let index = 0;


function show(){


    text.classList.remove("fade");


    void text.offsetWidth; // restart animation


    text.classList.add("fade");


    setTimeout(()=>{


        text.innerHTML = lyrics[index];


        text.classList.remove("fade");


    },200);


}


show();


button.onclick = ()=>{

    index++;


    if(index >= lyrics.length){

        document.querySelector(".window").style.display="none";

        return;

    }


    show();

};