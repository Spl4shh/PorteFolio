var element = document.querySelector('.title');
var words = ['NATANELIC Romain'];

function type(words, index){
      index = index ? index : 0;  //if index !=null index = index, else index = 0
      (function writer(i){
            var string = words[index];
            if(string.length <= i++){
                  element.innerText = string;
                  return;
            }
            element.innerText = string.substring(0,i);
            var rand = Math.floor(Math.random() * (100)) + 140;
            setTimeout(function(){writer(i);},rand);
      })(0)
}


type(words);