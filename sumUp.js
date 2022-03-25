console.log('sumUp.js');



document.getElementById('checkbox').addEventListener('click', () => {

   const label = document.getElementById('labelInput');
    console.log("file: sumUp.js ~ line 4 ~ label", label);

    const labelAfterElmtStyle = window.getComputedStyle(label, '::after');
    // console.log("file: sumUp.js ~ line 4 ~ labelElmt", labelAfterElmtStyle);
    const display = labelAfterElmtStyle.getPropertyValue('display')
    console.log("file: sumUp.js ~ line 13 ~ document.getElementById ~ display:", display)

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(display === 'block') {
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');
        // console.log('remplie')
    } else {
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
    }
    return
})



