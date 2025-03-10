let p=new Promise(function(resolve,reject)
{
    let xhr=new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);

    xhr.send();

    xhr.onload=function()
    {
        console.log(xhr);
        if(xhr.statusText=="") resolve(xhr.responseText);
        else reject("Somethoing Went Wrong!!!!!!");

    }
});

p.then(function(data)
{
    let details=JSON.parse(data);
}).catch(function(err)
{
    console.log(err);
});
