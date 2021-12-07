function test() {
    var apd;
    var div = document.createElement('div');
    var table = document.createElement('table');

    div = document.body.appendChild(div);
    table = div.appendChild(table);

    for (let x = 0; x <= 100; x++) {
        let tr = document.createElement('tr');
        tr += table.appendChild(tr);

        if (x < 10) {
            var cx = "0" + x;
        } else { cx = x; }

        for (let y = 0; y <= 100; y++) {
            if (y < 10) {
                var cy = "0" + y;
            } else { cy = y; }
            var customId = (cx + "" + cy);
            let td = document.createElement('td');
            td += table.appendChild(td);
            table.lastChild.id = "id" + customId;
        }
    }
}

function getRdmNumber() {
    let xrdm, yrdm;
    xrdm = Math.floor((Math.random() * 99));
    yrdm = Math.floor((Math.random() * 99));
    console.log(xrdm, yrdm);

    let randomId = document.getElementById("id" + xrdm + yrdm);
    console.log(randomId);
    randomId.style.backgroundColor = "black";



    return xrdm, yrdm, randomId;
}
test();
getRdmNumber();