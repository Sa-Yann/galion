console.log('personne.js');


// ------- Allow switch css in between locataire and Garant button 
const myButtons = document.querySelectorAll('.inputBtn');
// console.log(myButtons);

myButtons.forEach(button => button.addEventListener('click', function(){
    // console.log(e)

    const activeBtn = button.querySelector('.inputBtnStyle_ON')
    // console.log("file: creerNouveauLot_1.js ~ line 14 ~ myButtons.forEach ~ activeBtn", activeBtn)

    if(!activeBtn) {
        const activeBtnNonClicked = document.querySelector('.inputBtnStyle_ON');
        activeBtnNonClicked.classList.toggle('inputBtnStyle_ON');
        activeBtnNonClicked.classList.toggle('inputBtnStyle_OFF')
        // console.log("file: creerNouveauLot_1.js ~ line 18 ~ myButtons.forEach ~ activeBtnNonClicked", activeBtnNonClicked)

        this.classList.toggle('inputBtnStyle_ON');
        this.classList.toggle('inputBtnStyle_OFF')
        // console.log("file: creerNouveauLot_1.js ~ line 18 ~ myButtons.forEach ~ this", this)
    } else {
        return
    }
}))


// Allow Button Suivant in footer page to be activated when a saved row exists 

const rowSavedClientExist = document.getElementsByClassName('rowSaved');
console.log("file: personneScreen.js ~ line 30 ~ rowSavedClientExist", rowSavedClientExist)


const buttonNonActivated = document.getElementById('buttonNonActivated');

const buttonActivated = document.getElementById('buttonActivated');

if(!rowSavedClientExist) {
    console.log(`la class buttonClicked n'est pas actionnée`);
    buttonNonActivated.classList.remove('displayNone');
    buttonActivated.classList.add('displayNone'); 
    
} else {
    console.log(`la class buttonClicked est actionnée`);
    buttonNonActivated.classList.add('displayNone');
    buttonActivated.classList.remove('displayNone');             
}



