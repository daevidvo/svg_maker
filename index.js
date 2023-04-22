const iq = require('inquirer') //prompts
const fs = require('fs') //creates the file
const Triangle = require('./lib/triangle.js') //triangle class
const Square = require('./lib/square.js') //square class
const Circle = require('./lib/circle.js') //circle class

iq
.prompt([ //prompts that the user will answer in the terminal. this is promise based.
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to have in your svg? (Please use 3 or less characters)'
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'What color would you like your text to be? (can use words or hexadecimal values)'
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'What color would you like your svg to be? (can use words or hexadecimal values)'
    },
    {
        type: 'checkbox',
        name: 'desired_shape',
        message: 'What shape would you like?',
        choices: ['Triangle', 'Square', 'Circle']
    }
])
.then((data)=>{
    switch (data.desired_shape[0]){
        case 'Triangle':
            const renderedTriangle = new Triangle(data.text, data.text_color, data.shape_color)
            return renderedTriangle
        case 'Square':
            const renderedSquare = new Square(data.text, data.text_color, data.shape_color)
            return renderedSquare
        case 'Circle':
            const renderedCircle = new Circle(data.text, data.text_color, data.shape_color)
            return renderedCircle
    }
})
.then((renderedShape)=>{
    console.log(renderedShape)
})