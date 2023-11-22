function createCircleByFactoryMethod(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}

const circle = createCircle(1);


function anotherCircleByConstructorMethod(rdius ){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const anotherCircle = new anotherCircle(1);

// Functions are objects