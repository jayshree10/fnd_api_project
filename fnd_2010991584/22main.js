
let basket=[{
    id:"",
    item:1
}];
 
    fetch('https://fakestoreapi.com/products').then((data)=>{
        // console.log(data);
        return data.json();
    
    }).then((completedata)=>{
        console.log(completedata[2].title);
        let data1="";
        completedata.map((values)=>{
            data1+=`   <div class="item">
            <img width="220" src="${values.image}" alt="" class="images">
            <div class="details">
                <h3 class="title">${values.title}</h3>
                <p class="description">${values.description}</p>
                <div class="price-quantity">
                <p>Rs ${values.price}</p>
                    <div class="buttons">
                        <i onclick="decrement(${values.id})" class="bi bi-dash-lg"></i>
                        <div id=${values.id} class="quantity">0</div>
                        <i onclick="increment(${values.id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div></div>`
        });
        document.getElementById("shop").innerHTML=data1;
    }).catch((err)=>{
        console.log(err);
    })

    let increment=(id)=>{
        // let selectedItem=id;
        let search=basket.find((x)=>x.id===id);
        if(search===undefined){
            basket.push({
                id: id,
                item:1,
            });
        }
        else{
            search.item+=1;
        }
       localStorage.setItem("data",JSON.stringify(basket));
        // console.log(basket);
        update(id);

    }
    let decrement=(id)=>{
        // let selectedItem=id;
        let search=basket.find((x)=>x.id===id);
        if(search.item===0) return;
            // basket.push({
            //     id: id,
            //     item:1,
            // });
        
        else{
            search.item-=1;
        }
        localStorage.setItem("data",JSON.stringify(basket));

        // console.log(basket);
        update(id);

    }
    let update=(id)=>{
        let search=basket.find((x)=>x.id===id);
        // console.log(search.item);
        document.getElementById(id).innerHTML=search.item;
        calculation();
    }
    let calculation=()=>{
        let cartIcon=document.getElementById("cartamount");
        // console.log("calculation");
        // cartIcon.innerHTML=100;
        //one of x is previous and other one is next
        cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
        // console.log();
    }
    //now for loacal storage