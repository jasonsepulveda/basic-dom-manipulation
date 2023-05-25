// querySelector is only the firt one
// querySelectorAll are all elements

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const paragraph = document.querySelector('.paragraph');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);
console.log(p);
console.log(paragraph);
console.log(pid);
console.log(input);

console.log("**************")

console.log({
    h1,
    p,
    paragraph,
    pid,
    input,
});
// change tag in HTML and include JS code
h1.innerHTML = " H1 changed with DOM Management "
// change tag in HTML but it does not include JS code
h1.innerText = " H1 changed <br> with DOM Management"
// obtain an attribute as a class or a new one that you created
console.log(h1.getAttribute("class"));
// change attributes as a class or a new one
h1.setAttribute("class", "bodies");

// there is an specif method for clasess as a classList
h1.classList.add("heads") // add new class
h1.classList.remove("heads") // remove class
h1.classList.toggle("heads") // add and remove dynamic
h1.classList.contains("heads") // boolean if contain the class in argument

// add a default value in input tag
input.value = 123456

// create a new element from zero
document.createElement("img")
console.log(document.createElement("img"))
document.createElement("span")
console.log(document.createElement("span"))

// example - create a new element, it should be put inside a exist element

const img = document.createElement("img");
img.setAttribute("src", "https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif");
console.log(img)
// delete the content in the paragraph
pid.innerHTML = " ";
// add the image in the paragraph
pid.append(img)