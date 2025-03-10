let item_1={id:101,img:"https://tse4.mm.bing.net/th?id=OIP.w3Y2s2jSeuJHO4a1X8Y7_wHaEq&pid=Api&P=0&h=180",name:"Iphone",price:70000,qty:0};

let item_2={id:102,img:"https://tse4.mm.bing.net/th?id=OIP.d_37IJDKLPKPUiaivYkUiQHaHk&pid=Api&P=0&h=180",name:"Samsung",price:60000,qty:0};

let item_3={id:103,img:"https://tse2.mm.bing.net/th?id=OIP.fZGEVdjBhlNaqbRNR5-0dQHaJI&pid=Api&P=0&h=180",name:"Realme" ,price:30000,qty:0};

let products=[item_1,item_2,item_3];

function displayProducts(items,id)
{
    let eachitem='';
    for(let i of items)
    {
        eachitem+=`<div class="col-4">
                         <div class="card">
                    <div class="card-header"><img src=${i.img} alt="" class="img-fluid" id="yoyo"></div>
                    <div class="card-body">
                        <h3 class="text-center">${i.name}</h3>
                        <h3 class="text-center">$${i.price}</h3>
                        <h3 class="text-center"><i class="bi bi-dash-square-fill" id="minus-btn" onclick="decQty(${i.id})"></i>${i.qty}<i class="bi bi-plus-square-fill" id="plus-btn" onclick="incQty(${i.id})"></i></h3>
                    </div>
                </div>
            </div>`
    }
    document.getElementById('display-pro').innerHTML=eachitem;
}
displayProducts(products)

/////////////////////////////////////////////////
function incQty(id)
{
    let itm=products.map((item)=>
    {
        if(item.id==id)
        {
            let obj={...item,qty:++item.qty};
            return obj;
        }     
        else return item;
    })
displayProducts(products);
}
//////////////////////////////////////////////////
function decQty(id)
{
    let itm=products.map((item)=>
    {
        if(item.id==id)
        {
           if(item.qty>0)
           {
            let obj={...item,qty:--item.qty};
            return obj;
           }
           else
           {
            let obj={...item,qty:0};
            return obj;
           }
        }
        else return item;

    })
    displayProducts(products);
}
