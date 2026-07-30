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

`In August...`

];

const popup = document.querySelector(".window");
const text = document.getElementById("lyrics");
const button = document.getElementById("nextBtn");

let index = 0;

show();

button.onclick = () => {

    popup.classList.add("hide");

    setTimeout(()=>{

        index++;

        if(index >= lyrics.length){

            popup.classList.add("hide");

            setTimeout(()=>{
                popup.style.display="none";
            },300);

            return;

        }

        show();

        popup.classList.remove("hide");

    },250);

}

function show(){

    text.innerHTML = lyrics[index];

}