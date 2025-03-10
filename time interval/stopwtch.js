let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let msecTag=document.getElementById('m-sec');
let startBtn=document.getElementById('start-btn');
let stopBtn=document.getElementById('stop-btn');
let resetBtn=document.getElementById('reset-btn');

let sec=0;
let min=0;
let mSec=0;

let flag=true;


function timer()
{
   mSec=mSec+10;
   if(mSec===1000)
   {
        sec=sec+1;
        mSec=0;
        if(sec===60)
        {
            min=min+1;
            sec=0;
        }
   }
   minTag.textContent=concatZero(min);
   secTag.textContent=concatZero(sec);
   msecTag.textContent=concatZero(mSec);
}

let interval=null;
startBtn.addEventListener('click',function()
{
    if(flag)
    {
        interval=setInterval(timer,10);
        flag=false;
    }
})

stopBtn.addEventListener('click',function()
{
    if(!flag)
    {
        clearInterval(interval);
        flag=true;
    }
})


resetBtn.addEventListener('click',function()
{
    clearInterval(interval);
    flag=true;
    min=0;
    sec=0;
    mSec=0;
    minTag.textContent="00";
   secTag.textContent="00";
   msecTag.textContent="00";
})

//concat zero to time

function concatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;
}