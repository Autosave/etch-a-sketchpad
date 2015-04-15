// gridRow is 15 due to the appendedItems array starting with a div in the first row
var setRow = 15;
var setCol = 16;

$(document).ready(function() {

    gridSet(setRow, setCol);
    allowDrawing();

});

$('button[name="Reset"]').click(function() {
    updateGrid();
});

function updateGrid() {
    gridSize = parseInt(prompt('Choose a new grid size between 2 and 128'));
    while (gridSize < 2 || gridSize > 128) {
        gridSize = parseInt(prompt('Choose a new grid size between 2 and 128'));
    }

    setRow = gridSize - 1;
    setCol = gridSize;
    surfaceHeight = (800 / gridSize);
    surfaceWidth = (800 / gridSize);

    $('#container').empty();
    gridSet(setRow, setCol);
    $('.surface').css({'height': surfaceHeight + 'px', 'width': surfaceWidth + 'px'});
    
    allowDrawing();
}

function gridSet(gridRow, gridCol) {
    div = "<div class='surface'></div>";
    appendedItems = [div];
    this.gridRow = gridRow;
    this.gridCol = gridCol;

    for (var i = 0; i < gridRow; i++) {
        appendedItems.push(div);
        
        for (var j = 0; j < gridCol; j++) {
            appendedItems.push(div);
        }
    }

    $('#container').append(appendedItems.join(""));
}

function allowDrawing() {
    $('.surface').hover(function() {
        $(this).addClass('hoverColor');
    });
}