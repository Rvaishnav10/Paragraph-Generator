const input=document.getElementById("numofWords")
const container=document.querySelector(".container")

const generatewords=(n)=>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<n;++i){
        const random=(Math.random()*25).toFixed(0); //gives random numbers anywhere from 0 to 25 and tofixed is used to get roundoff numbers
       text+=letters[random];  //this will add the letters at the specific random number into text variable until i<n. 
    }
    return text;
}
//if we pass n=10 in function call then it will give a word of 10 random letters from above alphabets

let numofwords;
const generatepara=()=>{
    numofwords=Number(input.value)

    const para=document.createElement("p")
    let data="";

    for(let i=0;i<numofwords;i++){ //this loop will run for the number of words entered
        const randomNumber=(Math.random()*25).toFixed(0); //math.random()*25 means it will genearte a wword of max 25 letters
        data+= generatewords(randomNumber);
        data+=" ";
    }
    console.log(data)

    

    para.innerText=data //we have to give here a function that generates words
    
    container.append(para)
    para.setAttribute("class","paras") //so that each time para will take property of paras in html.
}