class Animal {
    name:string;
    constructor(name:string) {
        this.name = name;
    }

    move(distance:number):void {
        console.log('Animal ' + this.name + ' runs distance ' + distance);
    }
}

class Dog extends Animal {
    name:string;
    constructor(name:string) {
        super(name);
        this.name = name;
    }

    move(dist:number):void {
        console.log('dog runs -');
        super.move(dist);
    }
}

class Snake extends Animal {
    name:string;
    constructor(name:string) {
        super(name);
        this.name=name;
    }

    move(dist:number):void {
        console.log(' Snake runs - ');
        super.move(dist);
    }
}

let d = new Dog('Manju');
d.move(100);

let s = new Snake('Anil');
s.move(1000);