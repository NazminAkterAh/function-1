
function myfun(){
    let x=2;
    console.log(x);
};
myfun()

const myObject={
    fname:"Nazmin",
    lname:"Akter",
    age:"15",
   fullname:function(){
        return this.fname+" "+this.age;
    },

    getfullName:function(){
        return this.fname+" "+this.lname;
    }
};
console.log(myfun);
console.log(myObject.fullname());
console.log(myObject.getfullName());

const p= document.createElement("p");
const t= document.createTextNode('Nazmin');


p.appendChild(t);
const d= document.querySelector("#d1")

d.appendChild(p);

const pp= document.querySelector("#p4")
d.insertBefore(p,pp);