// require('dotenv').config()
// import 'dotenv/config'
// import dotenv from 'dotenv';
// dotenv.config();

//`https://www.googleapis.com/books/v1/volumes?q=cat&
//&apikey=AIzaSyCzK4xsLEdS-bbCshmI_kdo9AFcgnm1-1Y`
//AIzaSyCzK4xsLEdS-bbCshmI_kdo9AFcgnm1-1Y

const search = document.getElementById('search')
const searchBtn = document.getElementById('submit')
const output = document.getElementById('output')



// let key = process.env.APIKEY
let key = 'AIzaSyCzK4xsLEdS-bbCshmI_kdo9AFcgnm1-1Y'

let getBook = () =>{
    let bookName = search.value
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&
    &apikey=${key}`

    if (bookName.length <= 0 ) {
        output.innerHTML = ''
    }else{
        fetch(url).then(res => res.json())
        .then(data => {
            if (data.response = true) {               
                displayData(data)
            }else{
                output.innerHTML = `<h3> nothing to show </h3>`
            }
        }).catch(()=>{
               output.innerHTML = `<h3> something went really wrong </h3>`
        })
    }
}



// function displayData(data) {
//     const book.volumeInfo = {title, authors, publisher, publishedDate, description, language}
//         data.items.forEach((book.volumeInfo) => {
//             output.innerHTML += 
//              `<h3>${book.volumeInfo.title}</h3>`
//         });
//     }


function displayData(data) {
    data.items.forEach((book) => {
        output.innerHTML += 
         `<h3>${book.volumeInfo.title}</h3>
         <p>${book.volumeInfo.authors}</p> 
        <p>${book.volumeInfo.publisher}</p>
        <p>${book.volumeInfo.publishedDate}</p>
        <p>${book.volumeInfo.description}</p>
        <img src="${book.volumeInfo.imageLinks.thumbnail}"></img>
        <a href="${book.volumeInfo.previewLink}" target="_blank"> Read the book </a>`
    });
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    getBook()
})

search.addEventListener('keydown', function (e) {
    if (e.key === 'enter') {
        e.preventDefault()
        getBook()
    }
})



// function displayData(data) {
//                 const cover = book.volumeInfo.imageLinks?.thumbnail || "";
//                         const { title, authors, publisher, publishedDate, description, language, pageCount, previewLink } = book.volumeInfo;
//                         const bookInfo = document.createElement('div');
//                         bookInfo.classList.add('book-info');
//                         bookInfo.innerHTML = `
//                             <div>
//                                 <h2>${title ? title : 'Unknown'}</h2>
//                                 <p><strong>Authors:</strong> ${authors ? authors.join(', ') : 'Unknown'}</p>
//                                 <p><strong>Publisher:</strong> ${publisher ? publisher : 'Unknown'}</p>
//                                 <p><strong>Published Date:</strong> ${publishedDate ? publishedDate : 'Unknown'}</p>
//                                 <p><strong>Language:</strong> ${language ? language : 'No language available'}</p>
//                                 <p><strong>Page Count:</strong> ${pageCount ? pageCount : 'No pageCount available'}</p>
//                                 <p><strong>Description:</strong> ${description ? description.slice(0, 120) : 'No description available'}</p>
//                                 <strong><a href="${previewLink ? previewLink : 'No previewLink available'}" target="_blank">Read Now</a> </strong>
//                             </div>
//                             <img class="book-cover" src="${cover ? cover : 'No image available'}">`

//             }