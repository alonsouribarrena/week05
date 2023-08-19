// var person ={
//   name: 'Brad',
//   age: 35,
//   email: function(){
//     return 'brad@gamil.com'
//   },
//   address:{
//     street: '5 main st',
//     city: 'Boston'
//   },
//   children: ['Brianne', 'Nicholas']
// }
// // person = JSON.stringify(person)
// // person = JSON.parse(person)

// var people= [
//   {
//     name: 'Brad',
//     age: 35
//   },
//   {
//     name: 'John',
//     age: 40
//   },
//   {
//     name: 'Sara',
//     age: 35
//   }
// ];

// // console.log(people[1].age);

// var output = '';

// for (let i = 0; i < people.length; i++) {
//   // console.log(people[i].name);
//   output += '<li>'+people[i].name+'</li>'
// };

// document.getElementById('people').innerHTML = output;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      // console.log(response.people);
      var people = response.people

      var output = '';
      for (let i = 0; i < people.length; i++) {
        output += '<li>'+people[i].name+'</li>'
      };
      document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();