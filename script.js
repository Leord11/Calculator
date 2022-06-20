let num1;
let num2;
let operator;
let theSwitch = true;
let equalSwitch = true;

const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');
const btn_4 = document.querySelector('.btn-4');
const btn_5 = document.querySelector('.btn-5');
const btn_6 = document.querySelector('.btn-6');
const btn_7 = document.querySelector('.btn-7');
const btn_8 = document.querySelector('.btn-8');
const btn_9 = document.querySelector('.btn-9');
const btn_0 = document.querySelector(".btn-0");
const btn_add = document.querySelector('.btn-add');
const btn_minus = document.querySelector('.btn-minus');
const btn_multiply = document.querySelector('.btn-multiply');
const btn_divide = document.querySelector('.btn-divide');
const btn_dot = document.querySelector('.btn-dot');
const btn_equals = document.querySelector('.btn-equals');



const textbox = document.querySelector('.textbox');


btn_0.addEventListener("click", () => textbox.textContent += "0");

btn_1.addEventListener("click", () => textbox.textContent += "1");

btn_2.addEventListener("click", () => textbox.textContent += "2");

btn_3.addEventListener("click", () => textbox.textContent += "3");

btn_4.addEventListener("click", () => textbox.textContent += "4");

btn_5.addEventListener("click", () => textbox.textContent += "5");

btn_6.addEventListener("click", () => textbox.textContent += "6");

btn_7.addEventListener("click", () => textbox.textContent += "7");

btn_8.addEventListener("click", () => textbox.textContent += "8");

btn_9.addEventListener("click", () => textbox.textContent += "9");

btn_dot.addEventListener("click", () => textbox.textContent += ".");

btn_add.addEventListener("click", () => { 

    if(theSwitch == true) {
        num1 = parseFloat(textbox.textContent); 
        textbox.textContent = ""; 
        operator = 'add';  
        theSwitch = false;
        equalSwitch = true;
    }
    });

btn_minus.addEventListener("click", () => { 
    
    if(theSwitch == true) {
        num1 = parseFloat(textbox.textContent); 
        textbox.textContent = ""; 
        operator = 'minus';
        theSwitch = false;
        equalSwitch = true;
    }
    });

btn_multiply.addEventListener("click", () => { 
    
    if(theSwitch == true) {
        num1 = parseFloat(textbox.textContent); 
        textbox.textContent = ""; 
        operator = 'multiply';
        theSwitch = false;
        equalSwitch = true;
    }
    });

btn_divide.addEventListener("click", () => { 
    
    if(theSwitch == true) {
        num1 = parseFloat(textbox.textContent); 
        textbox.textContent = ""; 
        operator = 'divide';
        theSwitch = false;
        equalSwitch = true;
    }
    });

btn_equals.addEventListener("click", () => { 
    
    
    if(equalSwitch == true) {
       
        num2 = parseFloat(textbox.textContent);  

        if(operator == 'add') {
            textbox.textContent = num1 + num2;
            theSwitch = true;
        }
        if(operator == 'minus') {
            textbox.textContent = num1 - num2;
            theSwitch = true;
        }
        if(operator == 'multiply') {
            textbox.textContent = num1 * num2;
            theSwitch = true;
        }
        if(operator == 'divide') {
            textbox.textContent = num1 / num2;
            theSwitch = true;
        }
        equalSwitch = false;
    }

  });