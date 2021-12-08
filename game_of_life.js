function init(target) {
    var div = document.createElement("div");
    var table = document.createElement("table");

    div = document.body.appendChild(div);
    table = div.appendChild(table);

    for (let x = 0; x <= 99; x++) {
        let tr = document.createElement("tr");
        tr += table.appendChild(tr);

        if (x < 10) {
            var cx = "0" + x;
        } else {
            cx = x;
        }

        for (let y = 0; y <= 99; y++) {
            if (y < 10) {
                var cy = "0" + y;
            } else {
                cy = y;
            }
            let customId = cx + "" + cy;
            let td = document.createElement("td"); // Create td elements
            td += table.appendChild(td);
            table.lastChild.id = "id" + customId;
            table.lastChild.setAttribute('onclick', "toggle(this)");
        }
    }
    setAliveCells(1000);
    // setTimeout(turns, 1000);
}





function setAliveCells(n) {
    for (let x = 0; x < n; x++) {
        let xrdm, yrdm;
        xrdm = Math.floor(Math.random() * 100); // ? Placer sur X
        yrdm = Math.floor(Math.random() * 100); // ? Placer sur Y
        // //console.log(xrdm, yrdm, x);

        var cx;
        if (xrdm < 10) {
            cx = "0" + xrdm;
        } else {
            cx = xrdm;
        }

        if (yrdm < 10) {
            var cy = "0" + yrdm;
        } else {
            cy = yrdm;
        }

        let randomId = document.getElementById("id" + cx + cy);
        // //console.log(randomId);
        randomId.style.backgroundColor = "black";
    }
}

function turns() {
    for (let x = 0; x <= 99; x++) {
        if (x < 10) {
            var cx = "0" + x; // ? CX = Digit for td ID
        } else {
            cx = x;
        }

        for (let y = 0; y <= 99; y++) {
            if (y < 10) {
                var cy = "0" + y; // ? CY = Digit for td ID
            } else {
                cy = y;
            }

            if (document.getElementById(`id${cx}${cy}`).style.backgroundColor == "black") {
                let id = document.getElementById(`id${cx}${cy}`);
                let countAliveNeighborsCells = 0;


                let cx1; // Coordonnées première cellule vérifiée sur X
                if (x == 0) { // ? Si la cellule vérifiée se situe dans la première ligne
                    cx1 = cx; // ? Comme la cellule checked n'existe pas, on check coord existante c'est a dire cx  
                } else {
                    cx1 = x - 1;
                }
                cx1 = String(cx1).padStart(2, '0');

                let cx2; // Coordonnées première cellule vérifiée sur X
                if (x == 99) {
                    cx2 = cx;
                } else {
                    cx2 = x + 1;
                }
                cx2 = String(cx2).padStart(2, '0');

                let cy1; // Coordonnées première cellule vérifiée sur Y
                if (y == 0) {
                    cy1 = cy;
                } else {
                    cy1 = y - 1;
                }
                cy1 = String(cy1).padStart(2, '0');

                let cy2; // Coordonnées première cellule vérifiée sur Y
                if (y == 99) {
                    cy2 = cy;
                } else {
                    cy2 = y + 1;
                }
                cy2 = String(cy2).padStart(2, '0');

                // document.getElementById(`id${cx1}${cy1}`).style.backgroundColor = '#f00'; // ! top left
                // document.getElementById(`id${cx1}${cy2}`).style.backgroundColor = '#00f';// ! top right 
                // document.getElementById(`id${cx1}${cy}`).style.backgroundColor = '#faf'; // ! top 
                // document.getElementById(`id${cx}${cy1}`).style.backgroundColor = '#0F0'; // ! left
                // document.getElementById(`id${cx}${cy2}`).style.backgroundColor = '#ff0'; // ! right
                // document.getElementById(`id${cx2}${cy1}`).style.backgroundColor = '#0ff';// ! bottom left
                // document.getElementById(`id${cx2}${cy}`).style.backgroundColor = '#888'; // ! bottom
                // document.getElementById(`id${cx2}${cy2}`).style.backgroundColor = '#f0f';// ! bottom right

                // //console.log('y :', cy2, "...", cy, y, "...", 'x :', cx1, "...", cx, x);
                // console.log("---" + cx, cy + "---");
                if (document.getElementById(`id${cx1}${cy1}`).style.backgroundColor == "black") { // ! top left
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx1}${cy1}`));
                }

                if (document.getElementById(`id${cx1}${cy2}`).style.backgroundColor == "black") { // ! top right 
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx1}${cy2}`));
                }

                if (document.getElementById(`id${cx1}${cy}`).style.backgroundColor == "black") { // ! top
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx1}${cy}`));
                }

                if (document.getElementById(`id${cx}${cy1}`).style.backgroundColor == "black") { // ! left
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx}${cy1}`));
                }

                if (document.getElementById(`id${cx}${cy2}`).style.backgroundColor == "black") { // ! right
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx}${cy2}`));
                }

                if (document.getElementById(`id${cx2}${cy1}`).style.backgroundColor == "black") { // ! bottom left
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx2}${cy1}`));
                }

                if (document.getElementById(`id${cx2}${cy}`).style.backgroundColor == "black") { // ! bottom
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx2}${cy}`));
                }

                if (document.getElementById(`id${cx2}${cy2}`).style.backgroundColor == "black") { // ! bottom right
                    countAliveNeighborsCells++;
                } else {
                    // console.log("---");
                    backToLife(document.getElementById(`id${cx2}${cy2}`));
                }

                if ((countAliveNeighborsCells < 2 || countAliveNeighborsCells > 3) && document.getElementById(`id${cx}${cy}`).style.backgroundColor == "black") { // ? is Survive
                    document.getElementById(`id${cx}${cy}`).className = "toKill";
                }
            }


            // }
        }
    }
    endTurn();

}

function step() {
    setTimeout(turns, 0);
}

function endTurn() {
    let tabKill = document.getElementsByClassName('toKill');
    for (let x = 0; x < tabKill.length; x++) {
        tabKill[x].style.backgroundColor = "white"; // * Utiliser changement classe instead
    }
    let tabBorn = document.getElementsByClassName('toBorn');
    for (let x = 0; x < tabBorn.length; x++) {
        tabBorn[x].style.backgroundColor = "black";
    }
    setTimeout(step, 10);
}

function backToLife(target) {
    cx = target.id.slice(2, 4); // get cx in white cells
    // console.log(cx);
    cy = target.id.slice(4, 6); // get cy in white cells
    // console.log(cy);

    let cx1; // Coordonnées première cellule vérifiée sur X
    if (cx == '00') { // ? Si la cellule vérifiée se situe dans la première ligne
        cx1 = cx; // ? Comme la cellule checked n'existe pas, on check son mirroir par rapport à la grid limit
    } else {
        cx1 = parseInt(cx) - 1;
    }
    cx1 = String(cx1).padStart(2, "0");

    let cx2; // Coordonnées première cellule vérifiée sur X
    if (cx == '99') {
        cx2 = cx;
    } else {
        cx2 = parseInt(cx) + 1;
    }
    cx2 = String(cx2).padStart(2, '0');

    let cy1; // Coordonnées première cellule vérifiée sur Y
    if (cy == '00') {
        cy1 = cy;
    } else {
        cy1 = parseInt(cy) - 1;
    }
    cy1 = String(cy1).padStart(2, '0');

    let cy2; // Coordonnées première cellule vérifiée sur Y
    if (cy == '99') {
        cy2 = cy;
    } else {
        cy2 = parseInt(cy) + 1;
    }
    cy2 = String(cy2).padStart(2, '0');

    let countAliveNeighborsCells = 0;
    if (document.getElementById(`id${cx1}${cy1}`).style.backgroundColor == "black") { // ! top left
        countAliveNeighborsCells++;
    }
    // console.log(`id${cx1}-----${cy2}`);
    if (document.getElementById(`id${cx1}${cy2}`).style.backgroundColor == "black") { // ! top right 
        countAliveNeighborsCells++;
    }

    if (document.getElementById(`id${cx1}${cy}`).style.backgroundColor == "black") { // ! top
        countAliveNeighborsCells++;
    }

    if (document.getElementById(`id${cx}${cy1}`).style.backgroundColor == "black") { // ! left
        countAliveNeighborsCells++;
    }

    if (document.getElementById(`id${cx}${cy2}`).style.backgroundColor == "black") { // ! right
        countAliveNeighborsCells++;
    }

    if (document.getElementById(`id${cx2}${cy1}`).style.backgroundColor == "black") { // ! bottom left
        countAliveNeighborsCells++;
    }

    if (document.getElementById(`id${cx2}${cy}`).style.backgroundColor == "black") { // ! bottom
        countAliveNeighborsCells++;
    }

    if (document.getElementById(`id${cx2}${cy2}`).style.backgroundColor == "black") { // ! bottom right
        countAliveNeighborsCells++;
    }

    if (countAliveNeighborsCells == 3) {
        target.className = "toBorn";
    }
}

function toggle(target) {
    console.log(target);
    return target;
};

init();