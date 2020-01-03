

//factory function
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log("draw");
        }
    };
}
const circle = createCircle(2);

circle.draw()

//constractor function
function Circle(radius){
    this.radius = radius; //public , if "this" keyword used
    let location = {x: 0, y:0}; //private , if "let" keyword used
    this.draw = function() {
        console.log("draw "+location.x+" "+location.y+" "+this.radius);  
    };

    //getter setter
    Object.defineProperty(this, 'locationGetSet', {
        get: function() {
            return location;
        },
        set: function(value) {
            if(!value.x || !value.y)
                throw new Error("Invalid location.");
            location = value;
        }
    });
}
const anotherCircle = new Circle(5);

//using getter setter, 
anotherCircle.locationGetSet = {x:2 , y:3};
const lctn = anotherCircle.locationGetSet;

anotherCircle.draw();


//in java script variables are independent. function can't update a varibale value.
let obj = {value: 10};

function increase(object) {
    object.value++;
}

increase(obj);
console.log(obj);

//add new attributes to an object
circle.location = {x: 1};
console.log(circle.location);

for(let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]); //access varibale name with "key" and value with "circle[key]"
}

//get all the keys
console.log(Object.keys(circle));

//check if an key exist
if("radius" in circle)
    console.log("Circle has a radius");