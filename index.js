console.log('indexMain.js')


document.getElementById('arrowCol1').addEventListener('click', function(){


    const tBodies = document.getElementsByTagName('tbody');
    // console.log("file: pageContrat_1.js ~ line 35 ~ document.getElementById ~ tbody", tbody);
    // new Array(tbody).reverse();
    const newTbody = document.createElement('tbody');
    const oldTbody = tBodies[0];
    rows = oldTbody.rows,
    i = rows.length - 1;

    while (i >= 0) {
        newTbody.appendChild(rows[i]);
        i -= 1;
    }
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);
})


document.getElementById('arrowCol6').addEventListener('click', function(){

    console.log('testFunction');

    const tBodies = document.getElementsByTagName('tbody');
    // console.log("file: pageContrat_1.js ~ line 35 ~ document.getElementById ~ tbody", tbody);
    // new Array(tbody).reverse();
    const newTbody = document.createElement('tbody');
    const oldTbody = tBodies[0];
    rows = oldTbody.rows,
    i = rows.length - 1;

    while (i >= 0) {
        newTbody.appendChild(rows[i]);
        i -= 1;
    }
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);
})