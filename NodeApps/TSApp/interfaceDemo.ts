interface Product {
    isPerishable():boolean;
}

interface ISIRule{
    isEdible():boolean;
}

class PerishableProduct implements Product, ISIRule{
    pname:string;
    pid:number;

    constructor(name:string, id:number) {
        this.pname=name;
        this.pid=id;
        console.log('name - ', name, 'id - ', id);
    }

    isPerishable():boolean {
        return true;
    }

    isEdible():boolean {
        return false;
    }

}

let p = new PerishableProduct("Manju apple", 1);

console.log( p.isPerishable());
console.log( p.isEdible());
