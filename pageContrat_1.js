console.log('pageContrat_1.js');



document.getElementById(`input_Container`).addEventListener('keyup', function(){

    const inputRefBumber = document.getElementById('inputRefNumber');
    console.log("file: pageContrat_1.js ~ line 3 ~ inputRefBumber", inputRefBumber.value);

    const emailInput = document.getElementById('emailInput');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(inputRefBumber.value && emailInput.value) {
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');
        console.log('remplie')
    } else {
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
    }
    return

})

document.getElementById('arrow').addEventListener('click', function(){
    const tBodies = document.getElementsByTagName('tbody');
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


