interface ISmartphone{
    carica :number;
    numeroChiamate : number;
    }

    class User implements ISmartphone{
        carica :number;
        numeroChiamate: number;
        nome: string;
        cognome: string;
        
        
        
        constructor (nome : string, cognome : string) {
            this.nome= nome;
            this.cognome= cognome;
            this.carica= 0;
            this.numeroChiamate= 0;
        }
       
        
        
        public ricarica(unaRicarica:number): void{
            this.carica+= unaRicarica;
        }
    
        public chiamate (minutiDurata:number):void{
            let costoChiamate :number= minutiDurata*0.20;
            if (costoChiamate > this.carica){
                console.log("il tuo credito è insufficente")
            } else{
                this.carica -=  costoChiamate;
                this.numeroChiamate ++;
            }
        }
        public numero404(): number {
            return this.carica;
        }
        
        public getNumeroChiamate () : number {
            return this.numeroChiamate;
        }
        
        public azzaraChiamate () : void {
            this.numeroChiamate = 0;
        }
    
    }





let firstUser = new User("Pippo", "Franco");
let secondUser = new User("Max", "Power");
let thirdUser = new User("Ash", "Kittr");

firstUser.ricarica (15);
firstUser.chiamate (5);
firstUser.chiamate (3);

secondUser.ricarica (20);

console.log(firstUser);
console.log(secondUser);
console.log(thirdUser);















