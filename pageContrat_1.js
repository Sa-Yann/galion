console.log('pageContrat_1.js');



document.getElementById(`input_Container`).addEventListener('keyup', function(){

    const inputRefBumber = document.getElementById('inputRefNumber');
    console.log("file: pageContrat_1.js ~ line 3 ~ inputRefBumber", inputRefBumber.value);

    const emailInput = document.getElementById('emailInput');
    console.log("file: pageContrat_1.js ~ line 7 ~ emailInput", emailInput.value);

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(inputRefBumber.value && emailInput.value) {
        
        // console.log("file: pageContrat_1.js ~ line 15 ~ document.getElementById ~ buttonNonActivated", buttonNonActivated)
        buttonNonActivated.classList.add('displayNone');
        
        // console.log("file: pageContrat_1.js ~ line 19 ~ document.getElementById ~ buttonActivated", buttonActivated)
        buttonActivated.classList.remove('displayNone');
    } else {
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
    }

    return

})

document.getElementById('arrow').addEventListener('click', function(){
    const tbody = document.getElementsByTagName('tbody');
    tbody.addClass('rowReverse')
    // console.log("file: pageContrat_1.js ~ line 35 ~ document.getElementById ~ tbody", tbody);
    // new Array(tbody).reverse();
})


