// class whatsWrongMan {
//     constructor(age, jjam){
//         //fields
//         this.age = age;
//         this.jjam = jjam;
//     }
//         //methods 
//     bossMan(){
//         console.log(`jongUn : ${this.age} : ${this.jjam}`);
//     }
//     get age(){
//         return this._age;
//     }
//     set age(value){
//         this._age = value;
//         if(value<0){
//             throw Error('age can not be negative');
//         }
//     }
// }

// const whatsJJamMan = new whatsWrongMan(-3, '일병 4호봉');

// whatsJJamMan.bossMan();

class army {
    constructor (month, co, weapon){   
        //fields 
        this.month = month
        this.co = co
        this.weapon = weapon
    }
    //methods
    introduce (){
        console.log(`im ${this.month}월 군번 ${this.co}중대 ${this.weapon}입니다.`)
    }
}

class kim extends army {
    introduce(){
        super.introduce();
    }    
}
const imformationOfKim = new kim(1,5,"machineguner")

imformationOfKim.introduce();