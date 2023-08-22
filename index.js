function add(){
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
   let answer=a+b;
   document.getElementById('answer').value=a+b;
}
function sub(){
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
   let answer=a-b;
   document.getElementById('answer').value=a-b;
}
function mul(){
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
   let answer=a*b;
   document.getElementById('answer').value=a*b;
}