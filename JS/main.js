let bookName = document.getElementById('bookname')
let url = document.getElementById('URL')
let arr

if(localStorage.getItem('books') == null){
    arr = []
}
else{
    arr = JSON.parse(localStorage.getItem('books'))
    display()
}

function add(){
    let book = {
        id: bookName.value ,
        link: url.value
    }
    arr.push(book)
    display()
    localStorage.setItem('books',JSON.stringify(arr))
    console.log(arr)
    clear()
}

function display(){
    let cartona = ``
    for(var i = 0;i<arr.length;i++){
        cartona += `<tr>
        <td class="py-sm-3">${i+1}</td>
        <td>${arr[i].id}</td>
        <td>
            <a href="${arr[i].link}" target="_blank" class="btn text-white Green">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit
            </a>
        </td>
        <td>
            <button onclick="remove(${i})" class="btn btn-danger">
                <i class="fa-solid fa-trash-can text-white"></i>
                Delete
            </button>
        </td>
    </tr>`
    }
    document.getElementById('demo').innerHTML = cartona
}

function remove(index){
    arr.splice(index,1)
    display()
    localStorage.setItem('books' , JSON.stringify(arr))
}

function clear(){
    bookName.value = null
    url.value = null
}