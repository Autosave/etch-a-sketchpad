// gridRow is 15 due to the appendedItems array starting with a div in the first row
var setRow = 15;
var setCol = 16;
var drawingStyle = "standard";

$(document).ready(function() {

    gridSet(setRow, setCol);
    allowDrawing(drawingStyle);

});

$('button[name="Standard"]').click(function() {
    drawingStyle = "standard";
    updateGrid();
})

$('button[name="Gradual"]').click(function() {
    drawingStyle = "gradual";
    updateGrid();
});

$('button[name="Party"]').click(function() {
    drawingStyle = "party";
    updateGrid();
});

$('button[name="Reset"]').click(function() {
    updateGrid();
});


function gridSet(gridRow, gridCol) {
    div = "<div class='surface'></div>";
    appendedItems = [div];
    
    for (var i = 0; i < gridRow; i++) {
        appendedItems.push(div);
        
        for (var j = 0; j < gridCol; j++) {
            appendedItems.push(div);
        }
    }

    $('#container').append(appendedItems.join(""));
}

function updateGrid() {
    gridSize = parseInt(prompt('Enter a new grid size between 2 and 128'));
    while (gridSize < 2 || gridSize > 128) {
        gridSize = parseInt(prompt('Enter a new grid size between 2 and 128'));
    }

    setRow = gridSize - 1;
    setCol = gridSize;
    surfaceHeight = (800 / gridSize);
    surfaceWidth = (800 / gridSize);

    $('#container').empty();
    gridSet(setRow, setCol);
    $('.surface').css({'height': surfaceHeight + 'px', 'width': surfaceWidth + 'px'});
    
    allowDrawing(drawingStyle);
}

function allowDrawing(style) {
    if (style === "standard") {
        colorChoice = prompt('Enter an rgb color triplet; e.g. 0,0,0');
        $('.surface').mouseenter(function() {
            $(this).css('background-color', 'rgb('+colorChoice+')');
        });
    }
    else if (style === "gradual") {
        colorChoice = prompt('Enter an rgb color triplet; e.g. 0,0,0')
        $('.surface').mouseenter(function() {
            $(this).css('background-color', 'rgb('+colorChoice+')');
            $(this).css('opacity', $(this).css('opacity') - 0.1);
        });
    }
    else if (style === "party") {
        $('.surface').mouseenter(function() {
            colorChoiceRed = randomColor();
            colorChoiceGreen = randomColor();
            colorChoiceBlue = randomColor();
            $(this).css('background-color', 'rgb('+colorChoiceRed+','+colorChoiceGreen+','+colorChoiceBlue+')');
        });
    }
}

function randomColor() {
    return Math.floor(Math.random() * 255 + 1);
}