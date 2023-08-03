// (function(){
//     'use strict';

//     async function getData(){
//         const watched = await fetch('data/movie.json');
//         const data = await watched.json();
//         const values = Object.values(data);
//         console.log(values);
//         document.querySelector('#showdata').innerHTML = outputHTML(values);
//     }
    

//     function outputHTML(values){
//         let html = '';
//         values.forEach( function (eachEntry){
//             html += `<h3>${eachEntry.name}</h3>`;
//             html += `<p>Date Watched: ${eachEntry.date}</p>`;
//             html += `<p>Reason: ${eachEntry.reason}</p>`;
//         })
        
        
//         return html;
//     }
    
//     getData();


// })(); // end IIFE