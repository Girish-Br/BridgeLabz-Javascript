/************************************ 
* @Purpose : to implement factory pattern
* @File   : factoryPattern.js
* @Author : Girish B R
* @Date   : 10-11-2019
*************************************/
//factory method
function shapeFactory() {
    this.createShape = function (shapeType) {
        var shape;
        //checks shape type
 if (shapeType === 'rectangle') {
            shape = new Rectangle();
        } else if (shapeType === 'square') {
            shape = new Square();
        } else if (shapeType === 'triangle') {
            shape = new Triangle();
        } else if (shapeType === 'circle') {
            shape = new Circle();
        } else {
            shape = new Shape();
        }
        //returns shape when function is called
  return shape;
    }
}
//rectangle function
var Shape = function () {};
var Rectangle = function () {
    this.draw = function () {
        console.log('This is a Rectangle');
    }
};
//square function
 var Square = function () {
    this.draw = function () {
        console.log('This is a Square');
    }
};
//triagnle function
var Triangle = function () {
    this.draw = function () {
        console.log('This is a Triangle');
    }
};
//circle function
var Circle = function () {
    this.draw = function () {
        console.log('This is a Circle');
    }
};
//instantiated shapeFactory
var factory = new shapeFactory();
var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var triangle = factory.createShape('triangle');
var circle = factory.createShape('circle');
rectangle.draw();
square.draw();
triangle.draw();
circle.draw();
