var words = {};
var count = 0;
//comments
function enterInput(){
   if(event.keyCode == 13 && document.getElementById('input').value != "") {
      var input = document.getElementById('input').value;
      if(words[input]){
         //comments
         document.getElementById('input').value = "";
         alert("YOU FAIL");
         document.getElementById('words').innerHTML = JSON.stringify(words);
      } else {
         //comments
         words[input] = true;
         count++;
         document.getElementById('words').innerHTML = count;
         document.getElementById('input').value = "";
      }
   }
}
