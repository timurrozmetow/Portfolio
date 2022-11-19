const Prosent = 12;
let Potratil = 0,
    Bank = 600,
    dynya=42,
    grusha=39,
    n=1;

let sum =grusha+dynya;

while(Potratil<=Bank){
    Potratil=+(dynya%Prosent)*dynya;
    if(Potratil+=grusha<Bank){
        Potratil=+(grusha%Prosent)*grusha;
    }
    console.log(n++,'Amount', Potratil, "Ostatok v banke", Bank-=Potratil);

}