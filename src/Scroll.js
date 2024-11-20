import './Nav.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement)



function Scroll() {

    console.log('STEP___1');   
    
    function myFunction() {

      console.log('STEP___4');

        var navbar = document.querySelector("navbar");

        var sticky = navbar.offsetTop;

      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
     
    };

    window.onscroll = function () {
      console.log("scrolling");


    window.addEventListener("DOMContentLoaded", (onscroll) => {
      
      console.log('STEP___2');
        if (window.readyState === "loading") {
            // Загрузка ещё не закончилась
            window.addEventListener("DOMContentLoaded", myFunction);

          } else {
            // `DOMContentLoaded` Уже сработал
            console.log('STEP___3');            
            return (
         
                myFunction())
          }

        })
    };  
     
{/*
        document.addEventListener("DOMContentLoaded", (event) => {
            window.onscroll = myFunction()
            console.log('WERTY')
          })

        */}         

}

export default Scroll;

 


