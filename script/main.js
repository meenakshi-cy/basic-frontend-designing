/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/
//   document.querySelector("html").addEventListener("click",function(){alert("Ouch! Stop poking me!");})
// document.querySelector("html").addEventListener("mouseover",()=>{alert("This is mouse over effect");})
/*let myVariable=document.querySelector("h1");
myVariable.textContent="Hello World!"*/
let myHeading=document.querySelector("h1");
let myButton=document.querySelector("button");
let myImage=document.querySelector("img");

myImage.addEventListener("click",()=>{
    let mySrc=myImage.getAttribute("src");
    if (mySrc==="https://mdn.github.io/beginner-html-site/images/firefox-icon.png"){
        myImage.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png")
    }
    else{
        myImage.setAttribute("src","https://mdn.github.io/beginner-html-site/images/firefox-icon.png")
    }
})

function setUserName(){
    let uName=prompt("Enter yor name: ");
    if(!uName){
        setUserName();
    }
    else{
        localStorage.setItem("name", uName);
        myHeading.textContent="Mozilla is cool, " + uName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName=localStorage.getItem("name");
    myHeading.textContent="Mozilla is cool, " + storedName;
}

myButton.addEventListener("click",()=>{
    setUserName();
})
localStorage.clear();