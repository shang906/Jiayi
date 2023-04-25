(function(){
    'use strict';

    async function getData(){
        const watched = await fetch('data/movie.json');
        const data = await watched.json();
        const values = Object.values(data);
        console.log(values);
        document.querySelector('#showdata').innerHTML = outputHTML(values);
    }
    
    function outputHTML(data){
        let html = '';
        data.forEach( function(eachEntry){
            html += "<tr>";
            html += `<td>${eachEntry.name}</td><td>${eachEntry.date}</td><td>${eachEntry.reason}</td>`;
            html += '</tr>';
        } );
        return html;
    } 
    
    getData();


})(); // end IIFE