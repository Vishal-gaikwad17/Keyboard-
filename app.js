let numOfKeys = document.querySelectorAll(".key").length;

for(let i =0; i<numOfKeys;i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function(){
       
        var audio = new Audio("keyaudio.mp3");
        audio.play();

    });
}

document.addEventListener("keypress",function(event){
   
    makesound(event.key);
    ButtonAnimation(event.key);
    
});

function makesound(key){

    switch (key) {
        case "q":
            var drum1 = new Audio("keysound.wav");
            drum1.play();
          
            break;
        case "w":
            var drum2 = new Audio("keysound.wav");
            drum2.play();
           
            break;
        case "e":
            var drum3 = new Audio("keysound.wav");
            drum3.play();
           
            break;

        case "r":
           var drum4 = new Audio("keysound.wav");
           drum4.play();
            break;
                  
        case "t":
            var drum5 = new Audio("keysound.wav");
            drum5.play();
            break;

        case "y":
            var drum6 = new Audio("keysound.wav");
            drum6.play();
            break;  
               
       
        case "u":
            var key7 = new Audio("keysound.wav");
            key7.play();
            break; 
            
            
      case "i":
            var key8 = new Audio("keysound.wav");
            key8.play();
            break;  
    
    case "o":
     var key9 = new Audio("keysound.wav");
     key9.play();
    break; 
    
    case "p":
        var key10 = new Audio("keysound.wav");
        key10.play();
        break;  

        case "a":
            var key11 = new Audio("keysound.wav");
            key11.play();
            break;  
            
        case "s":
        var key12 = new Audio("keysound.wav");
        key12.play();
        break;  
       
        case "d":
        var key13 = new Audio("keysound.wav");
        key13.play();
        break;  
           
        case "f":
         var key14 = new Audio("keysound.wav");
        key14.play();
        break;   

        case "g":
        var key15 = new Audio("keysound.wav");
        key15.play();
        break;  
                
        case "h":
        var key16 = new Audio("keysound.wav");
        key16.play();
        break;  

        case "j":
        var key17 = new Audio("keysound.wav");
        key17.play();
        break; 
        
        case "k":
        var key18 = new Audio("keysound.wav");
        key18.play();
        break; 
        
        case "l":
        var key19 = new Audio("keysound.wav");
        key19.play();
        break;  

        case "z":
        var key20 = new Audio("keysound.wav");
        key20.play();
        break;
        
        case "x":
        var key21 = new Audio("keysound.wav");
        key21.play();
        break; 
        
        case "c":
        var key22 = new Audio("keysound.wav");
        key22.play();
        break;
        
        case "v":
        var key23 = new Audio("keysound.wav");
        key23.play();
        break;  

        case "b":
        var key24 = new Audio("keysound.wav");
        key24.play();
        break;  

        case "n":
        var key25 = new Audio("keysound.wav");
        key25.play();
        break;
        
        case "m":
        var key26 = new Audio("keyaudio.mp3");
        key26.play();
        break;  
    
        default:console.log(buttoninnerHTML);
        
    }

}

function ButtonAnimation(currentkey){

   var activeButton = document.querySelector("." +currentkey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100)

     
}

