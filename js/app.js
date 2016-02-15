(function() {
    //------------------------------------
    //-My very cool createTable function!- 
    //------------------------------------
    'use strict';
    //------------------------------------
    function addButton() {
        var button = document.createElement('button');
        var container = document.getElementById('app');
        container.appendChild(button);
        button.textContent = 'Create Table!';
    }
    addButton();
    //------------------------------------
    document.getElementsByTagName('button')[0].onclick = function createTable() {
        var container = document.getElementById('app');
        var table = document.createElement('table');
        var currentPosition = 150;
        container.appendChild(table);
        table.style.marginLeft = currentPosition + 'px';
        for (var i = 0; i < 10; i++) {
            var tr = document.createElement('tr');
            table.appendChild(tr);
            for (var y = 0; y < 10; y++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = '...';
                td.style.border = '1px solid black';
            }
            document.getElementsByTagName('table')[0].style.border = '1px solid black';
        }
        var button = document.createElement('button');
        container.appendChild(button);
        button.textContent = 'Move Left';
        button = document.createElement('button');
        container.appendChild(button);
        button.textContent = 'Move Right';
        //----------------------------
        document.getElementsByTagName('button')[1].onclick = function moveLeft() {
            document.getElementsByTagName('table')[0].style.marginLeft = currentPosition - 100 + 'px';
            currentPosition = currentPosition - 100;
        };
        document.getElementsByTagName('button')[2].onclick = function moveRight() {
            document.getElementsByTagName('table')[0].style.marginLeft = currentPosition + 100 + 'px';
            currentPosition = currentPosition + 100;
        };
    };
    //------------------------------------
})();