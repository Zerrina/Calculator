function dis(val)
{
    document.getElementById("result").value+=val;
}

function solve()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}

function clr()
{
    document.getElementById("result").value="";
}

function backspace()
{
    let z=document.getElementById("result").value;
    z=z.substr(0,z.length-1);
    document.getElementById("result").value=z;
}