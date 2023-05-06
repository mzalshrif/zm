class play{
    constructor(){
     var heightmain= document.getElementById("play");
       heightmain.style.height=screen.height+"px";
     if(screen.width<500){
        heightmain.style.width=screen.width+"px";
     }
     var heighcontent=document.getElementById("content");
     heighcontent.style.height=screen.height-300+"px";
    }
    
}
onload= new play();
// class button
class audio_fL{
  constructor(){
    this.audio_file = document.getElementById("audio_file");
    this.titel_radio = document.getElementById("titel_radio");
    this.play_p = document.getElementById("play_button");
    this.isplay;
    this.play_p.addEventListener("click", ()=>{
      this.play_pause();
    });
 

    this.radio_name=[];
    this.radio_name[0]="Radio Sky News Arabia";
    this.radio_name[1]="Radio Shama";
    this.radio_name[2]="Radio FM";
    this.radio_name[3]="Radio AFN";
    this.radio_name[4]="Radio NPR";
    this.radio_name[5]="Radio MIX";
    this.radio_name[6]="Radio Nagam";
    this.radio_name[7]="Radio Stars";
    this.radio_name[8]="Radio Color";

    this.radio_sours=[];
    this.radio_sours[0]="http://radio.skynewsarabia.com/stream/radio/skynewsarabia";
    this.radio_sours[1]="https://n0a.radiojar.com/rzcfw4cbsxquv?rj-ttl=5&rj-tok=AAABh_GMhbMARCCYMLF-k4oqUg";
    this.radio_sours[2]="https://alifalifjobs.com/radio/8000/AlifAlifLive.mp3";
    this.radio_sours[3]="https://playerservices.streamtheworld.com/api/livestream-redirect/AFN_HOT.mp3";
    this.radio_sours[4]="http://npr-ice.streamguys1.com/live.mp3";
    this.radio_sours[5]="https://s1.voscast.com:11377/live.mp3";
    this.radio_sours[6]="https://ahmsamir.radioca.st/stream";
    this.radio_sours[7]="https://ice1.securenetsystems.net/DEMOSTN?playSessionID=0D0CFB94-4EFC-42DE-8ACF274101C233B2";
    this.radio_sours[8]="https://stream.zeno.fm/fhhhcrvxhchvv";
    this.server=0;
    this.setresourse();
    document.getElementById("next").addEventListener("click", ()=>{
       if(this.server<this.radio_sours.length-1){
        ++this.server;
        this.isplay=false;
       }else{
        this.server=0;
       }
       localStorage.setItem("save_radio",this.server);
       this.setresourse();
    });
    document.getElementById("back").addEventListener("click", ()=>{
       if(this.server>0){
        --this.server;
        this.isplay=false;
       }else{
        this.server=this.radio_sours.length-1;
       }
       localStorage.setItem("save_radio",this.server);
       this.setresourse();
    });
  }
  setresourse(){
    if(localStorage.getItem("save_radio")!=null){
        this.server=localStorage.getItem("save_radio");
    }
    this.audio_file.src=this.radio_sours[this.server];
    this.titel_radio.innerHTML=this.radio_name[this.server];
    this.play_pause();
  }
 
  play_pause(){
    if(this.isplay == false){
      this.play_p.src="./img/pause.png";
      this.audio_file.play();
      this.isplay = true;
    }else{
      this.play_p.src="./img/play.png";
      this.audio_file.pause();
      this.isplay = false;
    }
  }
  }
onload=new audio_fL();