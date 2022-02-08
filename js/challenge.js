let nIntervId,x,old;
let pauseButton = document.getElementById("pause");
let counter = document.getElementById("counter");
let heart = document.getElementById("heart");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let submit = document.getElementById("submit");
let UL = document.getElementById("UL");
let list = document.getElementById("list");

pauseButton.addEventListener('click', () =>{
    if(pauseButton.textContent === "pause"){
        Pause();
    }else{
        Play();
    }
});
plus.addEventListener('click', () =>{
    x = counter.textContent;
    x++;
    counter.textContent = x;
});
minus.addEventListener('click', () =>{
    x = counter.textContent;
    x--;
    counter.textContent = x;
});
heart.addEventListener('click', () =>{
    // 3 has been liked 1 time
    let likesTally = 1;
    let children = UL.childNodes;
    let array = [ ...children];
    if(!children == null){
        for(let element of array){
            if(element.textContent.startsWith(x)){
                old = true;
                if(old){
                    element.textContent = `${x} has been liked ${likesTally++} time`;
                }
            }else{
                let l = document.createElement("LI");
                likesTally = 1;
                l.textContent = `${x} has been liked ${likesTally} time`;
                UL.appendChild(l);
            }
        }   

    }else{
        let l = document.createElement("LI");
        likesTally = 1;
        l.textContent = `${x} has been liked ${likesTally} time`;
        
        console.log(UL);
        UL.appendChild(l);
    }
    
});
submit.addEventListener('submit', () =>{
    let comment = document.createElement("h1");
    h1.textContent = submit.value;
    list.appendChild(h1);
});
function Play() {
  // check if already an interval has been set up
  if (!nIntervId) {
    nIntervId = setInterval(() =>{
        x = counter.textContent;
        x++;
        counter.textContent = x;
    }, 1000);
  }
  pauseButton.textContent = "pause";
  heart.removeAttribute("disabled",);
  plus.removeAttribute("disabled");
  minus.removeAttribute("disabled");
  submit.removeAttribute("disabled");
}
function Pause() {
  clearInterval(nIntervId);
  pauseButton.textContent = "resume";
  // release our intervalID from the variable
  nIntervId = null; 
  heart.setAttribute("disabled", true);
  plus.setAttribute("disabled", true);
  minus.setAttribute("disabled", true);
  submit.setAttribute("disabled", true);

}
Play();