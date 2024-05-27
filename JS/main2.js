let productname = document.getElementById("productname")
let productprice = document.getElementById("productprice")
let productcategory = document.getElementById("productcategory")
let productdesc = document.getElementById("productdescription")
let productimage = document.getElementById("productimage")
let productsearch = document.getElementById("searchname")
let arr;

if(localStorage.getItem('products') == null){
    arr = []
}
else{
    arr = JSON.parse(localStorage.getItem('products'))
    display()
}

function addproduct(){
    let product = {
        code: productname.value ,
        price: productprice.value ,
        category: productcategory.value ,
        desc: productdesc.value ,
        image: 'Images/bookmark.png'
    }
    arr.push(product)
    console.log(arr)
    clear()
    display()
    localStorage.setItem('products',JSON.stringify(arr))
}
function clear(){
    productcategory.value = null
    productprice.value = null
    productname.value = null
    productdesc.value = null
    productimage.value = null
}
function display(){
    var box = ``;
    for(var i = 0;i<arr.length;i++){
        box += `<div class="col-md-3">
        <div class="product">
            <img src="Images/huh.jpg" class="w-100" alt="product name">
            <h2 class="h4 mt-3">${arr[i].code}</h2>
            <p class="text-secondary mb-2">${arr[i].desc}</p>
            <h3 class="h5"><span class="fw-bolder">Price: </span>${arr[i].price}</h3>
            <h3 class="h5"><span class="fw-bolder">Category :</span>${arr[i].category}</h3>
            <button onclick="remove(${i})" class="btn btn-outline-danger btn-sm w-100 my-sm-2">Delete</button>
            <button onclick="update()" class="btn btn-outline-warning btn-sm w-100 my-sm-2">Update</button>
        </div>
    </div>`;
    }
    document.getElementById('amogos').innerHTML = box;
}
function remove(index){
    arr.splice(index,1)
    localStorage.setItem('products',JSON.stringify(arr))
    display()
    console.log(arr)
}
function searchbyname(){
    let search = productsearch.value
    var cartona = ``;
    for(var i = 0;i<arr.length;i++){
        if(arr[i].code.toLowerCase().includes(search.toLowerCase())){
            cartona += `<div class="col-md-3">
        <div class="product">
            <img src="Images/huh.jpg" class="w-100" alt="product name">
            <h2 class="h4 mt-3">${arr[i].code}</h2>
            <p class="text-secondary mb-2">${arr[i].desc}</p>
            <h3 class="h5"><span class="fw-bolder">Price: </span>${arr[i].price}</h3>
            <h3 class="h5"><span class="fw-bolder">Category :</span>${arr[i].category}</h3>
            <button onclick="remove(${i})" class="btn btn-outline-danger btn-sm w-100 my-sm-2">Delete</button>
            <button onclick="update()" class="btn btn-outline-warning btn-sm w-100 my-sm-2">Update</button>
        </div>
    </div>`;
        }
    }
    document.getElementById('amogos').innerHTML = cartona;
}