
class Person implements CanSpeak, Activable {

    talk: string = 'hello';
    sayHello: string;
    active: number = 1;
    
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
    add(...numbers){
        
    }
    nono(v:string){
        console.log('nono log');
        
    }

    setActive():boolean {
        return null;
    }

    setInactive():boolean {
        return null;
    }

    verbose:string;
}