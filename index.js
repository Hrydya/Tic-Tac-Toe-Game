let turno= true;
let box=document.querySelectorAll('.box');
let winner=document.querySelector(".winner")
let winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let winnercontainer=document.querySelector(".winnercontainer")
let resetbutton = document.querySelector(".resetbutton");
let newbutton=document.querySelector(".newbutton");
let count=0;


const disableallboxes =()=>{
    for(let eachbox of box){
        eachbox.disabled=true;
    }
}

const enableallboxes =()=>{
    for(let eachbox of box){
        eachbox.disabled=false;
        eachbox.innerText="";
    }
}

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val===pos2val && pos2val===pos3val)
            {
                    console.log(`Winner is ${pos1val}` );
                    winner.innerText=`Congratulations ,${pos1val} rules the board!`;
                    disableallboxes();
                    return true;
                   
            }     
        }
      
    }
    //for no winner case
    return false;
}



for(let eachbox of box){
    eachbox.addEventListener("click",() => {
        if(turno){
            console.log("O's turn");
            eachbox.innerText="O";
            turno=false;
        }
        else{
            console.log("X's turn");
            eachbox.innerText="X";
            turno=true;
        }
        count++;
        eachbox.disabled=true;
        //after filling every block we are checking whether winner has been found or not

        if(checkwinner()){
                return ;
        }
        //if no winner we are checking for draw condition only if all the boxes are marked
        else if(count===9){
            console.log(`game draw` );
            winner.innerText=`It's a draw! A balanced battle indeed!`;
        }
    } )
}


//reset or new game
const resetfunc =() =>{
    count=0;
    turno=true;
    enableallboxes();
    winner.innerText="";
}


resetbutton.addEventListener("click",resetfunc);
newbutton.addEventListener("click",resetfunc);

