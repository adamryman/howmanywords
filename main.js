var words = {};
var count = 0;
function enterInput(){
   if(event.keyCode == 13 && document.getElementById('input').value != "") {
      var a = document.getElementById('input').value;
      if(words[a]){
         document.getElementById('input').value = "";
         alert("YOU FAIL");
         document.getElementById('words').innerHTML = JSON.stringify(words);
      } else {
         words[a] = true;
         count++;
         document.getElementById('words').innerHTML = count;
         document.getElementById('input').value = "";
      }
   }
}
