
const odabir = document.querySelector(".grid-kontenjer2");
const test = document.querySelector(".spremiste");
var title= document.getElementsByTagName("title")[0].innerHTML;

//console.log(title);
window.addEventListener("load",function(){
    if(title=="Kreativna"){
        //ZA kreativnu
        //console.log("Na krativnoj!");

        document.addEventListener("click", function(event){
        
        
            if(event.target.closest(".container")){
                if(confirm("Želite li napustiti stranicu?")){
                    return
                }
                else{
                    alert("Ostajemo na stranici: "+  title);
                    event.preventDefault();
                    
                }
            };
        
        });
        

    }
    //Za sve sotale:
    else{
        /* NAPOMENA :
            stranica multimedije se ponekad duže učitava zbog dohvaćanja videa s 
            youtuba te ako se ne učitaju do kraja funkcija neće raditi 

        */
    

    document.addEventListener("click", function(event){


        if(event.target.closest(".grid-kontenjer2")){
            if(confirm("Želite li napustiti stranicu?")){
                return
            }
            else{
                alert("Ostajemo na stranici: "+  title);
                event.preventDefault();
                
            }
        };

    });
    
    };
});
        
    // 3a) poziv funkcije za prijelaz preko slike i otaranje tamplate canvas
if(title=="Početna"){
    window.addEventListener("load",function(){
        
        

        var krug =document.getElementById("krug");
        var template = this.document.querySelector("#template")

        var postoji = false;

        krug.addEventListener("mouseover", function(){



            var clone = template.content.cloneNode(true);
            if(postoji == false){ // ako canvas postoji da se ne stvara vise
                document.getElementById("main").appendChild(clone)
                postoji = true;
                
                
            }


            var canvas = document.getElementById("myCanvas");
            var cxt=canvas.getContext("2d");

            cxt.clearRect(0,0, canvas.width, canvas.height);//ciscenje kavasa

            //  KRUG
            cxt.font="15px Arial";
            cxt.fillText("Krug:  X_1=62, Y_1=55, ",5, 15);
            cxt.fillText(" R=30 ",5, 32);

        });

        var pravokutnik =document.getElementById("pravokutnik");
        pravokutnik.addEventListener("mouseover", function(){

            var clone = template.content.cloneNode(true);
            if(postoji == false){ // ako canvas postoji da se ne stvara vise
                document.getElementById("main").appendChild(clone)
                postoji = true;
                
                
            }


            var canvas = document.getElementById("myCanvas");
            var cxt=canvas.getContext("2d");

            cxt.clearRect(0,0, canvas.width, canvas.height);//ciscenje kavasa
            //  KRUG
            cxt.font="15px Arial";
            cxt.fillText("Pravokutnik X_1=584, ",5, 15);
            cxt.fillText("Y_1=266, X_2=681, Y_2=291",3, 32);
            

        });

        var mnogokut =document.getElementById("mnogokut");
        mnogokut.addEventListener("mouseover", function(){

            var clone = template.content.cloneNode(true);
            if(postoji == false){ // ako canvas postoji da se ne stvara vise
                document.getElementById("main").appendChild(clone)
                postoji = true;
                
                
            }


            var canvas = document.getElementById("myCanvas");
            var cxt=canvas.getContext("2d");


            cxt.clearRect(0,0, canvas.width, canvas.height);//ciscenje kavasa
            //  KRUG
            cxt.font="15px Arial";
            cxt.fillText("Mnogokut X_1=230, ",5, 15);
            cxt.fillText("Y_1=303, X_2=272, Y_2=330, ",1, 32);
            cxt.fillText("X_3=254, Y_3=381, X_4=202,",1, 47);
            cxt.fillText("Y_4=376, X_5=186, Y_5=331",1, 62);

        });

        var slika = this.document.getElementById("slika");
        slika.addEventListener("mouseover",function(){
        // brisanje elementa ako nije na njemu
            if(postoji){
                var brisi = document.getElementById("myCanvas");
                brisi.remove();
                postoji = false;
            }
            

    });
    });
}

//obrazac:





if(title=="Obrazac za dodavanje novog sadržaja"){
    window.addEventListener("load",function(){
        
        var div_obrazac2 = document.getElementById("div_obrazac2");
        div_obrazac2.style.display= "none"; /*skirvanje obrasca 2*/
        
        window.addEventListener('beforeprint', (event) => {
            div_obrazac2.style.display= "block"; /*kad se pokrene pritanje pokaže se da se oba printaju*/ 
          });
          window.onafterprint = (event) => {
            div_obrazac2.style.display= "none";
          };

        var div_obrazac1 = document.getElementById("div_obrazac1");
        div_obrazac1.style.display= "block";
        /*
        this.document.addEventListener("keydown",(event)=>{
            if (event.ctrlKey && event.key == 'p') {
                div_obrazac.style.display= "block";
            }
            else{
                div_obrazac.style.display= "none";
            }
        });
            */


        // provjera je li prvi ili drugi
        var prvi = true;
        // navodenje elemenata za provjeru
        var ima = this.document.forms["forma"]["Odabir_macaka"].value;
        var veliki = this.document.forms["forma"]["Nešto vaše"].value;
        var Srtan_sto_vidi_macku = this.document.forms["forma"]["Srtan_sto_vidi_macku"].value;
        var padajuci = this.document.forms["forma"]["Padajuci[]"].value;
        var datumi = this.document.forms["forma"]["Datumi"].value;
        
        

        forma.addEventListener("submit", (e)=>{
            var messeges =[]

            
            if(prvi == true){

                e.preventDefault();
                div_obrazac1.style.display= "none";
                div_obrazac2.style.display= "block";
                prvi = false;
                
            }

            if(prvi==false){
                forma.addEventListener("reset", (e)=>{
                    prvi = true;
                    div_obrazac1.style.display= "block";
                            div_obrazac2.style.display= "none";
                });
            }
        });      



});
}



