var audio = document.getElementById("audio");
audio.volume = 0.1;
function up(){
    if (audio.volume<=0.9999){
        audio.volume=audio.volume+0.1
        console.log(audio.volume)
    }else{console.log("No se puede subir mas")}
    if(audio.volume>0 && audio.muted==false){
        document.getElementById("mute").style.color = "black"
    }
}
function down(){
    if (audio.volume>=0.01){
        audio.volume=audio.volume-0.1
        console.log(audio.volume)
    }else{console.log("No se puede bajar mas")}
    if(audio.volume<=0.01){
        document.getElementById("mute").style.color = "red"
    }
}

pausas=0
function pauseAndPlay(){
    if (pausas==0){
        audio.play()
        pausas++

    }else{
    audio.pause()
    pausas--
}
  
}
function mute(){
    if (audio.muted==false){
        document.getElementById("mute").style.color = "red"
        audio.muted=true
        console.log("Video desmuteado")

    }else{
        audio.muted=false
        console.log("Video muteado")
        document.getElementById("mute").style.color = "black"  } 
}
