(function() {
    'use strict';
    const fs = document.querySelector('i');
    const mySection = document.querySelector('#mySection');
    const line1 = document.querySelector('#line1');
    const mountain = document.querySelector('#mountain');
    const water = document.querySelector('#water');
    const joy = document.querySelector('#joy');

    // const intervalID = setInterval(checkTime, 1000);

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else{
            document.exitFullscreen();
        }
    })

    window.addEventListener('load', function () {

		const pre = document.getElementById('pre');
		pre.className = 'hidden';

		pre.addEventListener('animationend', function () {
			pre.style.display = "none";
		});
    })

    let counter = 0;
    const line = ['line1', 'water', 'mountain', 'joy'];
    function fadeInLine(counter){
        document.querySelector(`#${line[counter]}`).className = 'appear';
        setTimeout(function(){
            document.querySelector(`#${line[counter]}`).className = 'hidden';
            if(counter < line.length-1){
                counter++;
            } else {
                counter = 0;
            }
            fadeInLine(counter);
        }, 2000);
    }

    fadeInLine(counter);
})()

