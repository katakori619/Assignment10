let bookName = document.getElementById('bookname')
let url = document.getElementById('URL')
let contentId = document.getElementById('content')
let arr
let urlvalid , booknamevalid
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
    if(urlvalid && booknamevalid){
        arr.push(book)
        display()
        localStorage.setItem('books',JSON.stringify(arr))
        console.log(arr)
        clear()
    }
    else{
        contentId.classList.remove('d-none')
    }
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
    bookName.classList.remove('is-valid')
    bookName.classList.remove('is-invalid')
    url.classList.remove('is-valid')
    url.classList.remove('is-valid')
}

function validname(element){
    var valid = /^[A-Z][a-z0-9 ?]{2,14}$/
    if(valid.test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        booknamevalid = true
    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        booknamevalid = false
    }
}

function validurl(element){
    var valid = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    if(valid.test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        urlvalid = true
    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        urlvalid = false
    }
}

function Close(){
    contentId.classList.add('d-none')
}