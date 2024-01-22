const node = document.querySelector('tr');
[...Array(23)].forEach(_ => node.parentNode.insertBefore(node.cloneNode(true), node));

var table = $("#table");    

var isMouseDown = false;
var startRowIndex = null;
var startCellIndex = null;
var date = "01/01/02";
var hours_available = [];
var event_id = "123123";


function selectTo(cell) {
    
    var row = cell.parent();    
    var cellIndex = cell.index();
    var rowIndex = row.index();
    
    var rowStart, rowEnd, cellStart, cellEnd;
    
    if (rowIndex < startRowIndex) {
        rowStart = rowIndex;
        rowEnd = startRowIndex;
    } else {
        rowStart = startRowIndex;
        rowEnd = rowIndex;
    }
    
    if (cellIndex < startCellIndex) {
        cellStart = cellIndex;
        cellEnd = startCellIndex;
    } else {
        cellStart = startCellIndex;
        cellEnd = cellIndex;
    }        
    
    for (var i = rowStart; i <= rowEnd; i++) {
        var rowCells = table.find("tr").eq(i).find("td");
        for (var j = cellStart; j <= cellEnd; j++) {
            rowCells.eq(j).addClass("selected");
        }        
    }
}

table.find("td").mousedown(function (e) {
    isMouseDown = true;
    var cell = $(this);

    //table.find(".selected").removeClass("selected"); // deselect everything
    
    if (e.shiftKey) {
        selectTo(cell);                
    } else {
        cell.addClass("selected");
        startCellIndex = cell.index();
        startRowIndex = cell.parent().index();
    }
    
    return false; // prevent text selection
})
.mouseover(function () {
    if (!isMouseDown) return;



    //table.find(".selected").removeClass("selected"); // deselect everything
    selectTo($(this));
})
.bind("selectstart", function () {
    return false;
});

$(document).mouseup(function () {
    isMouseDown = false;
});

function resetHours() {
    table.find(".selected").removeClass("selected"); // deselect everything
    return;
}


function parseAvailability() {
    for (var i = 0; i < 30; i++) {
        var day = '{'
        for (var j = 0; j < 25; j++) {
            if (j == 0) {
                var objName = "0";
                var objValue = date;
                day += '"' + objName + '" : "' + objValue + '", ';
            }
            else {
                var objName = ""+j;
                var available = $("#table").find('tr').eq(j-1).find('td').eq(i);
                available = available.hasClass("selected");
                var objValue = available ? 1 : 0;
                day += '"' + objName + '" : ' + objValue + ', ';
            }
            
        }
        day += '}'
        hours_available[hours_available.length] = day;
    }
    const hours_a = JSON.stringify(hours_available);
    hours_available = hours_a.replace(/\\/g, "");
    console.log(hours_available);
    return hours_available;
}

function senddata() {
    var obj = new Object();
    obj.hours_available = hours_available;
    obj.event_id = event_id;
    var finalData = JSON.stringify(obj);
    console.log(finalData);
    Telegram.WebApp.sendData(finalData);
}