let Circle = function(radius){
    this.radius;
    this.getradius = function(){
        return radius;

    }
    this.getArea = function(){
        return Math.PI * radius * radius;

    }
}
let circle = new Circle(2);
let radius = circle.getradius();

let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);