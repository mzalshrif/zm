class color{
    constructor(){
        this.color1=document.getElementById("color1");
        this.color1.addEventListener("click", ()=>{
           this.m_color("color1");
        });

      this.color3 = document.getElementById("color3");
       this.color3.addEventListener("click",()=>{
        this.m_color("color3");
    });
      this.color4 = document.getElementById("color4");
      this.color4.addEventListener("click",()=>{
        this.m_color("color4");
    });
     if(localStorage.getItem("mm")!==null) {
        document.body.style.background= " rgb(48, 48, 113)";
     }  
    }
    m_color(color){
        if(color =="color1"){
            document.body.style.background= " linear-gradient(to right, #f12711, #f5af19)"; 
        }
     
        else if(color == "color3"){
            document.body.style.background= " rgb(48, 48, 113)";
        }
        else if(color == "color4"){
            document.body.style.background= " rgb(147, 92, 145";
        }
        localStorage.setItem("mm",color);
    }
}
onload= new color();