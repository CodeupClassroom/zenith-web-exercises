"use strict";
// Immediately Invoked Function Expression (IIFE)
(() => {
    let btn = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');
    let btn3 = document.querySelector('#btn3');
    //Add an event listener to btn1
    btn.addEventListener("click", () => {
        console.log('Great job following instructions.');
    });

    const nuke = () => {
        // Remove all buttons on the page
        btn.remove();
        btn2.remove();
        let video = document.createElement("video");
        video.src = "images/bomb.mp4";
        video.autoplay = true;
        document.querySelector('.page-wrapper').appendChild(video);
    };
    //Add an event listener to btn2
    btn2.addEventListener("click", nuke);

    //Add an event listener to btn3
    btn3.addEventListener("click", () => {
        btn2.removeEventListener("click", nuke);
    });
})();