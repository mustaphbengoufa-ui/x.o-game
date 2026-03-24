let x="X"
let numwinofX=0
let numwinofO=0
let winer=5
let tabel=[1,2,3,4,5,6,7,8,9]
let count=0
document.getElementById('X').style.textShadow="0 0px 40px  rgb(189, 223, 255)"
 
let animt=[]
  


function click1(id){
       count++;
    if(x=="X"&& document.getElementById(id).textContent==""){
     
        console.log(count+" "+winer)
        document.getElementById('X').style.textShadow="none"
        document.getElementById('O').style.textShadow=" 0 0px 20px  rgb(255, 189, 189)"
        let el=document.getElementById(id)
        el.innerHTML=x
        el.style.textShadow="0 0px 20px  rgb(189, 223, 255)"
        el.style.color="rgb(43, 162, 232)"
        x="O"
        tabel[id-1]=el.textContent
       
        wincondition(tabel,count)
 }else   if(x=="O"&& document.getElementById(id).textContent==""){
   
           console.log(count+" "+winer)
        document.getElementById('O').style.textShadow="none"
        document.getElementById('X').style.textShadow="0 0px 20px  rgb(255, 189, 189)"
        let el=document.getElementById(id)
        el.innerHTML=x
        el.style.textShadow=" 0 0px 20px  rgb(255, 189, 189)"
        el.style.color="rgb(206, 30, 30)"
        x="X"
        tabel[id-1]=el.textContent
   
        wincondition(tabel,count)
 }
}


function wincondition(tabel,count){

    for(let i=0;i<3;i++){
        if(tabel[i]===tabel[i+3] && tabel[i+3]===tabel[i+6]){
       winer=tabel[i]
            animt=[i+1,i+4,i+7]
    }}
    for(let i=0;i<6;i+=3){
        if(tabel[i]===tabel[i+1] && tabel[i+1]===tabel[i+2]){
       winer=tabel[i]
       animt=[i+1,i+2,i+3]
    }}
       if(tabel[0]===tabel[4] && tabel[4]===tabel[8]){
      winer=tabel[0]
       animt=[1,5,9]
    }
       if(tabel[2]===tabel[4] && tabel[4]===tabel[6]){
       winer=tabel[2]
          animt=[3,5,7];
    }

  if(winer!=5){ 
let result=document.getElementById("result")
     document.getElementById("winer").innerHTML="the winer is "+winer
   
   //x win 
     if(winer=="X"){
        numwinofX++
        result.style.backgroundColor="rgb(43, 162, 232)"
        document.getElementById('button').style.backgroundColor="rgb(206, 30, 30)"
        document.getElementById('numofwinX').textContent=numwinofX
    setTimeout(()=>{
        document.getElementById(animt[0]).style.backgroundColor="red"
    setTimeout(()=>{
        document.getElementById(animt[1]).style.backgroundColor="red"
    setTimeout(()=>{
        document.getElementById(animt[2]).style.backgroundColor="red"
    setTimeout(()=>{
          result.style.display="flex"
          document.getElementById("back-of-result").style.display="block"
    },300)    
    },200)}
    ,200)}
    ,200)
    console.log(animt)
    }
    
    //o win
    else if(winer=="O"){
        numwinofO++
          result.style.backgroundColor="rgb(206, 30, 30)"
          document.getElementById('button').style.backgroundColor="rgb(43, 162, 232)"
          document.getElementById('numofwinO').textContent=numwinofO
        setTimeout(()=>{
        document.getElementById(animt[0]).style.backgroundColor="red"
    setTimeout(()=>{
        document.getElementById(animt[1]).style.backgroundColor="red"
    setTimeout(()=>{
        document.getElementById(animt[2]).style.backgroundColor="red"
    setTimeout(()=>{
          result.style.display="flex"
          document.getElementById("back-of-result").style.display="block"
    },300)    
    },200)}
    ,200)}
    ,200) 
console.log(animt)
}
    }
   //draw
   console.log(count+" "+winer)
    if(count==9 && winer==5){
        console.log(count)
        document.getElementById("result").style.display="flex"
         document.getElementById("winer").innerHTML="draw"
          document.getElementById("back-of-result").style.display="block"
    }
  
}
function repeatgame(){
    for(let i=1;i<10;i++){
        document.getElementById(i).textContent=""
        document.getElementById(i).style.backgroundColor="black"
        tabel[i-1]=i
      
    }   
 document.getElementById("back-of-result").style.display="none"
      count=0
      winer=5
       document.getElementById("result").style.display="none"
       document.getElementById("winer").innerHTML=" "
       document.querySelectorAll("td").forEach(ge => {
       });
}
//-------------------------------------------------------------------------

// let x = "X";
// let numwinofX = 0;
// let numwinofO = 0;
// let winer = null;
// let tabel = [1,2,3,4,5,6,7,8,9];
// let count = 0;
// let animt = [];

// const winPatterns = [
//   [0,1,2],[3,4,5],[6,7,8],
//   [0,3,6],[1,4,7],[2,5,8],
//   [0,4,8],[2,4,6]
// ];

// document.getElementById('X').style.textShadow = "0 0 40px rgb(189,223,255)";

// function click1(id){
//   if (document.getElementById(id).textContent !== "" || winer==null) return;

//   count++;
//   const el = document.getElementById(id);

//   el.textContent = x;
//   el.style.textShadow = x === "X"
//     ? "0 0 20px rgb(189,223,255)"
//     : "0 0 20px rgb(255,189,189)";
//   el.style.color = x === "X"
//     ? "rgb(43,162,232)"
//     : "rgb(206,30,30)";

//   tabel[id-1] = x;

//   document.getElementById(x).style.textShadow = "none";
//   document.getElementById(x === "X" ? "O" : "X").style.textShadow =
//     x === "X"
//       ? "0 0 20px rgb(255,189,189)"
//       : "0 0 20px rgb(189,223,255)";

//   wincondition();

//   x = x === "X" ? "O" : "X";
// }

// function wincondition(){
//   for (let p of winPatterns) {
//     const [a,b,c] = p;
//     if (
//       tabel[a] === tabel[b] &&
//       tabel[b] === tabel[c] &&
//       (tabel[a] === "X" || tabel[a] === "O")
//     ) {
//       winer = tabel[a];
//       animt = [a+1, b+1, c+1];
//       showWin();
//       return;
//     }
//   }

//   if (count === 9) {
//     document.getElementById("winer").innerHTML = "draw";
//     document.getElementById("result").style.display = "flex";
//     document.getElementById("back-of-result").style.display = "block";
//   }
// }

// function showWin(){
//   const result = document.getElementById("result");

//   document.getElementById("winer").innerHTML = "the winer is " + winer;

//   if (winer === "X") {
//     numwinofX++;
//     result.style.backgroundColor = "rgb(43,162,232)";
//     document.getElementById("numofwinX").textContent = numwinofX; 
//       document.getElementById("button").style.backgroundColor="rgb(206, 30, 30)"
//   } else {
//     numwinofO++;
//     result.style.backgroundColor = "rgb(206,30,30)";
//     document.getElementById("numofwinO").textContent = numwinofO;
//         document.getElementById("button").style.backgroundColor="rgb(43,162,232)"
//   }

//   animt.forEach((id, i) => {
//     setTimeout(() => {
//       document.getElementById(id).style.backgroundColor = "red";
//     }, i * 200);
//   });

//   setTimeout(() => {
//     result.style.display = "flex";
//     document.getElementById("back-of-result").style.display = "block";
//   }, animt.length * 200 + 200);
// }

// function repeatgame(){
//   for (let i = 1; i <= 9; i++) {
//     const el = document.getElementById(i);
//     el.textContent = "";
//     el.style.backgroundColor = "beige";
//     tabel[i-1] = i;
//   }

//   winer = null;
//   count = 0;
//   x = "X";
//   animt = [];

//   document.getElementById("result").style.display = "none";
//   document.getElementById("back-of-result").style.display = "none";
//   document.getElementById("winer").innerHTML = "";

//   document.getElementById('X').style.textShadow = "0 0 40px rgb(189,223,255)";
//   document.getElementById('O').style.textShadow = "none";
// }
