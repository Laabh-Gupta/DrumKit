
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
       var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
    document.addEventListener('keypress', function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key){
        switch(key){
            case 'w':
                playAudio('tom-1');
                break;
            case 'a':
                playAudio('tom-2');
                break;
            case 's':
                playAudio('tom-3');
                break;
            case 'd':
                playAudio('tom-4');
                break;
            case 'j':
                playAudio('crash')
                break;
            case 'k':
                playAudio('kick-bass');
                break;
            case 'l':
                playAudio('snare');
                break;
            default:
                console.log(buttonInnerHTML);  
        }
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector('.'+currentKey);

    activeButton.classList.add('pressed');

    setTimeout(function(){activeButton.classList.remove('pressed')},100);
}

function playAudio(name){
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();
}