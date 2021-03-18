function add (a,b)
{
    return a+b;
}

function sub (a,b)
{
    return a-b;
}

function mul (a,b)
{
    return a*b;
}

function divide (a,b)
{
    return a/b;
}

function operate (op,a,b)
{
    let res;
    if (op=='+')
    res = add(a,b);
    else if (op=='-')
    res = sub(a,b);
    else if (op=='*')
    res = mul(a,b);
    else
    res = divide(a,b);
return res;
}

const resu = document.querySelector('#resu');
const numpad = document.querySelector('#CalDisp');
const numb = document.querySelectorAll('#num button');
const oper = document.querySelectorAll('#ope button');
const cle = document.querySelector('#cls');
const eq = document.querySelector('#equal')

let numarr = [];
let oparr = [];
let result = 0;

cle.addEventListener('click',fresh);

numb.forEach((num) => {
   num.addEventListener('click',MakeaNum);
});

oper.forEach((ope) => {
   ope.addEventListener('click', analyse);
});

eq.addEventListener('click',finalize);

function fresh()
{
    numarr = [];
    oparr = [];
    result = 0;
    numpad.value='';
    resu.value ='';
}

function MakeaNum()
{
    numpad.value += this.value;
    let numval=numpad.value;
    console.log(JSON.stringify({numval}));
}


function analyse()
{
    if(numpad.value != '')
    numarr.push(Number(numpad.value));
    console.log(JSON.stringify({numarr}));
    oparr.push(this.value);
    console.log(JSON.stringify({oparr}));
    numpad.value = '';
    if (numarr.length < 2)
    return;
    else
    {
        result = operate(oparr[0],numarr[0],numarr[1]);
        console.log(JSON.stringify({result}));
        numpad.value = '';
        resu.value = result;
        numarr.shift();
        numarr.shift();
        console.log(JSON.stringify({numarr}));
        numarr.push(result);
        console.log(JSON.stringify({numarr}));
        oparr.shift();
        console.log(JSON.stringify({oparr}));
    }
}

function finalize()
{
    result = operate(oparr[0],numarr[0],Number(numpad.value));
    numarr.shift();
    numarr.push(result);
    oparr.shift();
    numpad.value = '';
    resu.value = result;
}

