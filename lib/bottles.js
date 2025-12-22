import {downTo, capitalize} from './helpers';

class CountdownSong{

    constructor(verseTemplate, max = 9999, min = 0){
        this.verseTemplate = verseTemplate;
        this.max = max;
        this.min = min;
    }

    song(){
        return this.verses(this.max,this.min);
    }

    verses(starting, ending){
        return downTo(starting, ending)
        .map(i => this.verse(i))
        .join('\n');
        
    }

    verse(number){
        return this.verseTemplate.lyrics(number);
   }
         
}

class VerseFake{
    static lyrics(number){
        return `This is verse ${number}.\n`;
    }
}

class BottleVerse{

    static lyrics(number){
     return new BottleVerse(BottleNumber.for(number)).lyrics();
    }

    constructor(BottleNumber){
        this.bottleNumber = BottleNumber;
    }
   
    lyrics(){

         return(
            capitalize(`${this.bottleNumber} `) + `of beer on the wall, `+
            `${this.bottleNumber} of beer.\n`+
            `${this.bottleNumber.action()}, `+
            `${this.bottleNumber.successor()} of beer on the wall.\n`
        );
   }
}

class BottleNumber{

    constructor(number){
        this.number = number;
    }

    static for(number){
        
        let bottleNumberClass;
    
        switch (number) {
            case 0:
                bottleNumberClass = BottleNumber0;
                break;    
            case 1:
                bottleNumberClass = BottleNumber1;
                break;
            case 6:
                bottleNumberClass = BottleNumber6;
                break;
            default:
                bottleNumberClass = BottleNumber;    
                break;
        }

        return new bottleNumberClass(number);
   }

    successor(){
       
        return BottleNumber.for(this.number-1);

    }

    action(){
     
        return (`Take ${this.pronoun()} down and pass it around`);

    }

    quantity(){
       
            return this.number.toString();
    }

    pronoun(){
     return "one";
   }

    container(){
      return 'bottles';
    }
    
    toString(){
        return `${this.quantity()} ${this.container()}`;
    }
}

class BottleNumber0 extends BottleNumber{
    quantity(){
        return 'no more';
     }

     successor(){
        return BottleNumber.for(99);
        
    }

    action(){
        return 'Go to the store and buy some more';
        
    }
}

class BottleNumber1 extends BottleNumber{
    pronoun(){
        return "it"
    }
    container(){
        return 'bottle';
    }
}

class BottleNumber6 extends BottleNumber{
    container(){
        return 'six-pack';
    }
    quantity(){
        return '1';
    }
}

export {VerseFake, CountdownSong, BottleVerse, BottleNumber, BottleNumber0, BottleNumber1, BottleNumber6};