const btn = document.getElementById('btn');
const againnew= document.querySelector('#newbtn');
const btnclick=()=>{
const myname=prompt('enter your name');
console.log(myname);
}
btn.addEventListener('click',btnclick);



const againclick=()=>{

    const mynames=prompt('enter your name');
    console.log(mynames);

    }

againnew.addEventListener('click',againclick);





