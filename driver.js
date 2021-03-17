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

let opclick = 0;
let op1,op2,tempop;
let temp1 = 0;
let temp2 = 0;

cle.addEventListener('click',fresh);

numb.forEach((num) => {
   num.addEventListener('click',MakeaNum);
});

oper.forEach((ope) => {
   ope.addEventListener('click', analyse);
});

function fresh()
{
    temp1=0;
    temp2=0;
    opclick=0;
    op1='';
    op2='';
    tempop='';
    numpad.value='';
    resu.value ='';
}

function MakeaNum()
{
    numpad.value += this.value;
}


function analyse()
{
    opclick++;
 if (opclick % 2)
   {
     temp1 = Number(numpad.value);
     numpad.value = '';

     op1 = this.value;
     //result= operate (,,)
   }
else
{
temp2 = Number(numpad.value);
op2 = this.value;
result = operate (op1,temp1,temp2);
resu.value = result;
numpad.value = '';
}
}

