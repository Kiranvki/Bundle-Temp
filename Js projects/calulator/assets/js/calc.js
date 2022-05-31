function display(val){
    document.getElementById("disp").value+=val;
}

function solve()
{
let x=document.getElementById("disp").value;
let y=eval(x);
document.getElementById("disp").value=y;
}
function clr()
{
    document.getElementById("disp").value= " ";
}