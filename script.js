console.log("tic tac toe")
let turnsound= new Audio("turn.mp3")
let gameover=new Audio("gameover.wav")

let turn="X"
let isgameover=false;
// function to change turn
const changeturn=()=>{
    return turn==="X"?"0":"X"
}
// function to check value
const checkwin=()=>{
 
    let boxtexts=document.getElementsByClassName("boxtext")
    let win=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.getElementsByClassName("info")[0].innerText=boxtexts[e[0]].innerText + ' '+'won'
            isgameover=true;
           document.getElementsByTagName('img')[0].style.width='150px'
           gameover.play();
         document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector('.line').style.width="20vw"
        }
    })

}

// game logic
let boxes =document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let  boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===""){
            boxtext.innerText=turn;
            turn=changeturn();
            turnsound.play();
            checkwin()
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="turn for "+turn
            }

        }
    })
})

reset.addEventListener('click',()=>{
     boxtext=Array.from(document.querySelectorAll(".boxtext"))
     boxtext.forEach(element=>{
        element.innerText=""
        

     })
     turn="X"
     isgameover=false
     document.getElementsByClassName("info")[0].innerText="turn for "+turn
     document.getElementsByTagName('img')[0].style.width='0px'
     document.querySelector('.line').style.width="0vw"
     

})
