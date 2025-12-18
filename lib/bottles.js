// import { capitalize, downTo } from './helpers';

// class Bottles{
//   song(){
//     return this.verses(99,0);
//   }

//   verses(upper, lower){
//     return downTo(upper, lower)
//     .map(i => this.verse(i))
//     .join('\n');
//   }

//   verse(number){
//     switch (number) {
//       case 0:
//         return(
//           'No more bottles of beer on the wall, ' +
//           'no more bottles of beer.\n' +
//           'Go to the store and buy some more,' +
//           '99 bottles of beer on the wall.\n'
//         );
//       case 1:
//         return (
//           '1 bottle of beer on the wall, ' +
//           '1 bottle of beer.\n' +
//           'Take it down and pass it around, ' +
//           'no more bottles of beer on the wall.\n'
//         );
//       case 2:
//         return (
//           '2 bottles of beer on the wall, ' + 
//           '2 bottles of beer.\n' +
//           'Take one down and pass it around,' +
//           '1 bottle of beer on the wall.\n'
//         );
//       default:
//         return (
//           `${number} bottles of beer on the wall, ` +
//           `${number} bottles of beer.\n` +
//           'Take one down and pass it around, ' +
//           `${number-1} bottles of beer on the wall.\n `
//         );
//     }
//   }
// }

// export {Bottles};
import {downTo, capitalize} from './helpers';

class Bottles{

    song(){
        return this.verses(99,0);
    }

    verses(starting, ending){
        return downTo(starting, ending)
        .map(i => this.verse(i))
        .join('\n');
        
    }

    verse(number){

        const bottleNumber = BottleNumber.for(number);
        return(
            capitalize(`${bottleNumber} `) + `of beer on the wall, `+
            `${bottleNumber} of beer.\n`+
            `${bottleNumber.action()}, `+
            `${bottleNumber.successor()} of beer on the wall.\n`
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

export {Bottles};