var size = 20;
var xMax = 10*size;
var yMax = 15*size;
var pattern_num = 7;
var pattern_catogory = ["I", "J", "L", "O", "S", "T", "Z"];
var pattern_color = ["rgb(0,255,255)", "rgb(0,0,255)", "rgb(255,69,0)", "rgb(255,255,0)", "	rgb(0,128,0)", "rgb(128,0,128)", "rgb(255,0,0)"];
var square = {
    xpos: 60,
    ypos: -40,
    mat:   [    [0, 0, 0, 0],
                [0, 0, 0, 0], 
                [0, 0, 0, 0],
                [0, 0, 0, 0] ], 
    direc: 1, 
    pattern: 0,
    color: 	"rgb(0,255,255)"
};
// original 15*10 --> 16*11 (the outer barrier represent the wall )
// 從(1, 1)開始 到(15, 15)
var map = [ [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1] ];

function pattern(pattern, direc) {   // tetromino pattern I
    if(pattern == "I") {
        switch(direc) {
            case 1:
                square.mat = [  [0, 0, 0, 0],
                                [1, 1, 1, 1],
                                [0, 0, 0, 0],
                                [0, 0, 0, 0] ]; 
                break;
            case 2:
                square.mat = [  [0, 0, 1, 0],
                                [0, 0, 1, 0],
                                [0, 0, 1, 0],
                                [0, 0, 1, 0] ];
                break;
            case 3:
                square.mat = [  [0, 0, 0, 0],
                                [0, 0, 0, 0],
                                [1, 1, 1, 1],
                                [0, 0, 0, 0] ];
                break;
            case 4:
                square.mat = [  [0, 1, 0, 0],
                                [0, 1, 0, 0],
                                [0, 1, 0, 0],
                                [0, 1, 0, 0] ];
                break;
        }
    }
    else if(pattern == "J") {
        switch(direc) {
            case 1:
                square.mat = [   [1, 0, 0],
                                 [1, 1, 1],
                                 [0, 0, 0] ];
                break;
            case 2:
                square.mat = [   [0, 1, 1],
                                 [0, 1, 0],
                                 [0, 1, 0] ];
                break;
            case 3:
                square.mat = [   [0, 0, 0],
                                 [1, 1, 1],
                                 [0, 0, 1] ];
                break;
            case 4:
                square.mat = [   [0, 1, 0],
                                 [0, 1, 0],
                                 [1, 1, 0] ];
                break;
        }
    }
    else if(pattern == "L") {
        switch(direc) {
            case 1:
                square.mat = [   [0, 0, 1],
                                 [1, 1, 1],
                                 [0, 0, 0] ];
                break;
            case 2:
                square.mat = [   [0, 1, 0],
                                 [0, 1, 0],
                                 [0, 1, 1] ];
                break;
            case 3:
                square.mat = [   [0, 0, 0],
                                 [1, 1, 1],
                                 [1, 0, 0] ];
                break;
            case 4:
                square.mat = [   [1, 1, 0],
                                 [0, 1, 0],
                                 [0, 1, 0] ];
                break;
        }
    }
    else if(pattern == "O") {
        switch(direc) {
            case 1:
                square.mat = [  [0, 0, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 0, 0] ]; 
                break;
            case 2:
                square.mat = [  [0, 0, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 0, 0] ]; 
                break;
            case 3:
                square.mat = [  [0, 0, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 0, 0] ]; 
                break;
            case 4:
                square.mat = [  [0, 0, 0, 0],
                                [0, 1, 1, 0],
                                [0, 1, 1, 0],
                                [0, 0, 0, 0] ]; 
                break;
        }
    }
    else if(pattern == "S") {
        switch(direc) {
            case 1:
                square.mat = [   [0, 1, 1],
                                 [1, 1, 0],
                                 [0, 0, 0] ];
                break;
            case 2:
                square.mat = [   [0, 1, 0],
                                 [0, 1, 1],
                                 [0, 0, 1] ];
                break;
            case 3:
                square.mat = [   [0, 0, 0],
                                 [0, 1, 1],
                                 [1, 1, 0] ];
                break;
            case 4:
                square.mat = [   [1, 0, 0],
                                 [1, 1, 0],
                                 [0, 1, 0] ];
                break;
        }
    }
    else if(pattern == "T") {
        switch(direc) {
            case 1:
                square.mat = [   [0, 1, 0],
                                 [1, 1, 1],
                                 [0, 0, 0] ];
                break;
            case 2:
                square.mat = [   [0, 1, 0],
                                 [0, 1, 1],
                                 [0, 1, 0] ];
                break;
            case 3:
                square.mat = [   [0, 0, 0],
                                 [1, 1, 1],
                                 [0, 1, 0] ];
                break;
            case 4:
                square.mat = [   [0, 1, 0],
                                 [1, 1, 0],
                                 [0, 1, 0] ];
                break;
        }
    }
    else if(pattern == "Z") {
        switch(direc) {
            case 1:
                square.mat = [   [1, 1, 0],
                                 [0, 1, 1],
                                 [0, 0, 0] ];
                break;
            case 2:
                square.mat = [   [0, 0, 1],
                                 [0, 1, 1],
                                 [0, 1, 0] ];
                break;
            case 3:
                square.mat = [   [0, 0, 0],
                                 [1, 1, 0],
                                 [0, 1, 1] ];
                break;
            case 4:
                square.mat = [   [0, 1, 0],
                                 [1, 1, 0],
                                 [1, 0, 0] ];
                break;
        }
    }
}
generate_pattern(); // 放在init裡面會造成每次clear時就改變pattern 應該是collision後才generate_pattern
function init() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    for(var i = 0; i <= xMax; i+=20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.closePath();
        ctx.stroke();
    }
    for(var i = 0; i <= yMax; i+=20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.closePath();
        ctx.stroke();
    }
}

function generate_pattern() {
    var d = Date.now();
    d = (d%pattern_num);
    square.pattern = d;
    square.color = pattern_color[d];
    pattern(pattern_catogory[d], square.direc);   // 不用改變方塊方向
}

function collision(x_after, y_after) {
    x_after+=2;
    y_after+=1;
    var has = false;
    for(var i = 0; i < square.mat.length; i++) {
        for(var j = 0; j < square.mat[i].length; j++) {
            if(map[x_after+i][y_after+j] == 1 && map[x_after+i][y_after+j] == square.mat[i][j]) {
                has = true;
                break;
            }
        }
    }
    return has;
}

function clear() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    for(var i = 0; i < square.mat.length; i++) {
        for(var j = 0; j < square.mat[i].length; j++) {
            if(square.mat[i][j] == 1) {
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillRect(square.xpos+j*size, square.ypos+i*size, size, size);
            }
        }
    }
    init(); // restore the grid line
}

function draw() {   // 如何判斷下左右
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    for(var i = 0; i < square.mat.length; i++) {
        for(var j = 0; j < square.mat[i].length; j++) {
            if(square.mat[i][j] == 1) {
                ctx.fillStyle = square.color;
                ctx.fillRect(square.xpos+j*size, square.ypos+i*size, size, size);
            }
        }
    }
}

document.addEventListener("keydown",CONTROL);
function CONTROL(event){
    if(event.keyCode == 32) {   // start
    }
    else if(event.keyCode == 37){    // left
        key_left();
    }else if(event.keyCode == 38){  // up
        rotate();
    }else if(event.keyCode == 39){  // right
        key_right();
    }else if(event.keyCode == 40){  // down
        key_down();
    }
}

function rotate() {
    clear();
    if(square.direc+1 == 5)
        square.direc = 1;
    else
        square.direc = square.direc+1;
    pattern(pattern_catogory[square.pattern], square.direc);
    draw();
}

function key_down() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // collision內以array的標示方法為主 所以這邊要把square的x y相反
    if(!collision((square.ypos/size), (square.xpos/size))) {
        clear();
        square.ypos = square.ypos+20;
        draw();
    }
    else {
        for(var i = 0; i < square.mat.length; i++) {
            for(var j = 0; j < square.mat[i].length; j++) {
                if(square.mat[i][j] == 1) {
                    map[(square.ypos/size)+1+i][(square.xpos/size)+j+1] = 1;
                }
            }
        }
        square = {
            xpos: 60,
            ypos: -40,
            mat:   [    [0, 0, 0, 0],
                        [0, 0, 0, 0], 
                        [0, 0, 0, 0],
                        [0, 0, 0, 0] ], 
            direc: 1, 
            pattern: 0
        };
        generate_pattern();
    }

}

function key_left() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    if(!collision((square.ypos/size), (square.xpos/size)-1)) {
        clear();
        square.xpos = square.xpos-20;
        draw();

    }
}

function key_right() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    if(!collision((square.ypos/size), (square.xpos/size + 1))) {
        clear();
        square.xpos = square.xpos+20;
        draw();
    }
}

function drop() {
    setInterval('key_down()', 900);
}
window.onload = drop();