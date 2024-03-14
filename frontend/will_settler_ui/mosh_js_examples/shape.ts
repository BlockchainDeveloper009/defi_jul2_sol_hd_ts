abstract class Shape {
    constructor(public color:string){

    }
    abstract render():void;
}

class Circle extends Shape {
    render() {
        throw new Error("Method not implemented.");
    }
    constructor(public radius: number, color: string){
        super(color);
    }
}

interface ICalendar {
    name: string;
    addEvent(): void;
    removeEVent(): void;
}

interface CloudCalendar extends ICalendar {

}

// class GoogleCalendar implements ICalendar {
  

//     addEvent(): void {
//         throw new Error("Method not implemented.");
//     }
//     removeEVent(): void {
//         throw new Error("Method not implemented.");
//     }

// }

class KeyValuePair<K, V>{
    constructor(public key:K, public value: V) {

    }

    // function wrapInArray<T>({ value }: { value: T; }){
    //     return [value];
    // }

}

//https://www.typescriptlang.org/docs/handbook/utility-types.html