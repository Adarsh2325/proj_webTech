let likesbtn=document.querySelector('#likes-btn');
let likesDisplay=document.querySelector('#likes-display');
let dislikesbtn=document.querySelector('#dislikes-btn');
let dislikesDisplay=document.querySelector('#dislikes-display');
let totaldis=document.querySelector('#total-dis')

let total=localStorage.getItem('total')?localStorage.getItem('total'):0;
totaldis.textContent=total;


let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):0;
likesDisplay.textContent=likes;


let dislikes=localStorage.getItem('dislikes')?localStorage.getItem('dislikes'):0;
dislikesDisplay.textContent=dislikes;


likesbtn.addEventListener('click',function()
{
    likes++;
    localStorage.setItem('likes',likes)
    likesDisplay.textContent=likes;
    total++;
    localStorage.setItem('total',total)
    totaldis.textContent=localStorage.getItem('total');
});

dislikesbtn.addEventListener('click',function()
{
    dislikes++;
    localStorage.setItem('dislikes',dislikes)
    dislikesDisplay.textContent=dislikes;
    total++;
    localStorage.setItem('total',total)
    totaldis.textContent=localStorage.getItem('total');
});


