let a;
let ok = 0;
let sp = 0;
let pr = 1;
let vdp = 3;
let ri = 0;
let rj = 0;
let u;
let d;
let l;
let r;
function setup(){
    a = processing2jsNewNDimArray([4, 4]);
    createCanvas(600, 800);
    background(255);
    for(let i = 0;i < 4;i++) for(let j = 0;j < 4;j++) a[i][j]=0;
    while(vdp == 3)vdp=int(random(2, 4));
    ri=int(random(0, 3));
    rj=int(random(0, 3));
    a[ri][rj]=vdp;
    frameRate(120);
}

function draw(){
    background(255);
    if(pr != 1) {
        textAlign(CENTER, CENTER);
        textSize(125);
        text("Ai castigast ", 300, 400);
    }
    else {
        if(l == true) {
            ok=1;
            sp=0;
            while(ok == 1){
                ok=0;
                for(let i = 0;i < 4;i++) for(let j = 1;j < 4;j++) if(a[i][j] != 0) if(a[i][j - 1] == a[i][j]) {
                    a[i][j - 1]+=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
    else if(a[i][j - 1] == 0) {
                    a[i][j - 1]=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
            }
            l=false;
            if(sp == 1) adaugare();
        }
    else if(u == true) {
            ok=1;
            sp=0;
            while(ok == 1){
                ok=0;
                for(let i = 1;i < 4;i++) for(let j = 0;j < 4;j++) if(a[i][j] != 0) if(a[i - 1][j] == a[i][j]) {
                    a[i - 1][j]+=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
    else if(a[i - 1][j] == 0) {
                    a[i - 1][j]=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
            }
            u=false;
            if(sp == 1) adaugare();
        }
    else if(d == true) {
            ok=1;
            sp=0;
            while(ok == 1){
                ok=0;
                for(let i = 0;i < 3;i++) for(let j = 0;j < 4;j++) if(a[i][j] != 0) if(a[i + 1][j] == a[i][j]) {
                    a[i + 1][j]+=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
    else if(a[i + 1][j] == 0) {
                    a[i + 1][j]=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
            }
            d=false;
            if(sp == 1) adaugare();
        }
    else if(r == true) {
            ok=1;
            sp=0;
            while(ok == 1){
                ok=0;
                for(let i = 0;i < 3;i++) for(let j = 0;j < 3;j++) if(a[i][j] != 0) if(a[i][j + 1] == a[i][j]) {
                    a[i][j + 1]+=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
    else if(a[i][j + 1] == 0) {
                    a[i][j + 1]=a[i][j];
                    a[i][j]=0;
                    ok=1;
                    sp=1;
                }
            }
            r=false;
            if(sp == 1) adaugare();
        }
        line(0, 200, 800, 200);
        line(0, 400, 800, 400);
        line(0, 600, 800, 600);
        line(150, 0, 150, 800);
        line(300, 0, 300, 800);
        line(450, 0, 450, 800);
        textSize(60);
        textAlign(CENTER, CENTER);
        fill(0);
        for(let i = 0;i < 4;i++) for(let j = 0;j < 4;j++) if(a[i][j] != 2048) text(a[i][j], 150 * (j + 1) - 75, 200 * (i + 1) - 100);
    else pr=0;
    }
}

function keyPressed(){
    if(keyCode == UP_ARROW) mutare(keyCode, true);
    else if(keyCode == DOWN_ARROW) mutare(keyCode, true);
    else if(keyCode == LEFT_ARROW) mutare(keyCode, true);
    else if(keyCode == RIGHT_ARROW) mutare(keyCode, true);
}

function keyReleased(){
    if(keyCode == UP_ARROW) mutare(keyCode, false);
    else if(keyCode == DOWN_ARROW) mutare(keyCode, false);
    else if(keyCode == LEFT_ARROW) mutare(keyCode, false);
    else if(keyCode == RIGHT_ARROW) mutare(keyCode, false);
}

function mutare(key, b){
    if(keyCode == UP_ARROW) u=b;
    else if(keyCode == DOWN_ARROW) d=b;
    if(keyCode == LEFT_ARROW) l=b;
    else if(keyCode == RIGHT_ARROW) r=b;
}

function adaugare(){
    vdp=3;
    while(vdp == 3)vdp=int(random(2, 4));
    ri=int(random(0, 3));
    rj=int(random(0, 3));
    if(a[ri][rj] == 0) a[ri][rj]=vdp;
    else while(a[ri][rj] != 0){
        ri=int(random(0, 3));
        rj=int(random(0, 3));
    }
}


function processing2jsNewNDimArray(dimensions) {
    if (dimensions.length > 0) {
        let dim = dimensions[0];
        let rest = dimensions.slice(1);
        let newArray = new Array();
        for (var i = 0; i < dim; i++) {
            newArray[i] = processing2jsNewNDimArray(rest);
        }
        return newArray;
     } else {
        return undefined;
     }
 }
