document.getElementById('button').addEventListener('click', loadText);
function loadText(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'sample.txt', true);

xhr.onprogress = function(){
console.log(('READYSTATE: ', xhr.readyState));

}


  xhr.onload = function (){
    if(this.status == 200){
      // console.log(this,this.responseText)
      document.getElementById('text').innerHTML=
      this.responseText;
    } else if(this.status = 404){
      document.getElementById('text').innerHTML = 'not found'
    }
  }

  xhr.onerror = function(){
    console.log('Request Error...');
  }
  // xhr.onreadystatechange = function(){
    // console.log(('READYSTATE: ', xhr.readyState));
  
    if(this.readyState == 4 && this.status == 200){
      // console.log(this.responseText);
  }

  xhr.send();
}