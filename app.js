const moonPath = "M48 86C48 133.496 86 170 86 170C38.5035 170 0 133.496 0 86C0 38.5035 38.5035 0 86 0C86 0 48 38.5035 48 86Z";

const sunPath =  "M170 86.5C170 133.996 133.496 172 86 172C38.5035 172 0 133.496 0 86C0 38.5035 38.5035 0 86 0C133.496 0 170 39.0035 170 86.5Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

// click on the sun animation 

darkMode.addEventListener('click', () => {
    //animate Js
    const timeline = anime.timeline({
      duration : 750,
      easing : "easeOutExpo"
    });
    timeline.add({
       targets:".sun",
       d: [
        {value: toggle ? sunPath : moonPath},     
       ]
    })

.add({
   targets:'#darkMode',
   rotate: toggle ? -320 : 320 
}, "-= 350")
.add ({
    targets: "section",
    backgroundColor: toggle ? 'rgb(225,225,225)' : 'rgb(22,22,22)'
})
document.querySelector('h1').innerHTML= toggle ? 'LIGHT MODE' : 'DARK MODE'
anime.timeline().add({
    targets:'h1',
    color: toggle ? '#000000' : '#FFFFFF'


  
});
//reverse animation
if(!toggle){
   toggle = true;
}else{
   toggle = false; 
}
});
         