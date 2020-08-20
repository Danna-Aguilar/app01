const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const categories =
{
    dogs:
{
    dogs: document.getElementById('dogs-link'),
    content:document.getElementyById('dogs')
},
cats: document.getElementById('cats'),
mices: document.getElementById('mices')
}
let dogList = 
[
    {
        name: "chihuahua",
        region:"mexico",
        description:"A tiny noise dog"
    },
    {
        name: "german shepherd",
        region:"germany",
        description:"Big dog for recue work in gelid wather"
    },
    {
        name: "huskey",
        region:"siberia",
        description:"Big dog for farm work"
    },
    {
        name: "beagle",
        region:"england",
        description:"A medium hunting dog"
    },
    
];
let castlist = [
    "Siames",
    "Abisinio",
    "Ragdoll",
    "Siberiano",
    "Mau egipcio",
    "Maine coon"
];
categories.dogs.button.onclick = ()=>{
    if (categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        return;
    }

dogList.forEach(dog =>{
    categories.dogs.content.innerHTML += `<li>
    <span>${dog.name}</span>
    <div>region: ${dog.description}</div>
    </li> `;//ES6 Emascript6
    
}); 
}
