//API KEY: AIzaSyDatbpbeUKF683tL8ULlPrPvXIoO_8Kp_A


const searchBtn = document.getElementById('search_btn')
const outputGif = document.getElementById('output_gif')
const searchTerm = document.getElementById('input_term')

let seachValue = 'depor'
let myKey = 'AIzaSyDatbpbeUKF683tL8ULlPrPvXIoO_8Kp_A'


function getGif(){
  var myRequest = new XMLHttpRequest;
  myRequest.open('GET', `https://tenor.googleapis.com/v2/search?q=${seachValue}&key=${myKey}&client_key=my_test_app&limit=8`)
  myRequest.responseType = 'json'
  myRequest.send();
  myRequest.onreadystatechange = function(){
    if(myRequest.readyState === 4){ 
      let myGifs = myRequest.response.results
      outputGif.innerHTML=' '
      for (let i = 0; i < myGifs.length; i++) {
        let gif = myGifs[i].media_formats.gif.url;
        outputGif.innerHTML+=(
          `
          <img class="gif" id="gif" src=${gif}></img>
          `
        )
      }
    }
    }
}

getGif()

searchTerm.addEventListener('change', (e)=>{
  e.preventDefault()
  seachValue = e.target.value;
})

searchBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  getGif()
})
