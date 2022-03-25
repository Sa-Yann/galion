console.log('creerNouveauLot_1');


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


const myInputsImgs = document.querySelectorAll('.inputImg');
// console.log("file: creerNouveauLot_1.js ~ line 33 ~ myInputsImg = document.querySelectorAll('inputIng');", myInputsImgs)

myInputsImgs.forEach(image => image.addEventListener('click', function(e) {
    // console.log(e);


    const imageChekced = document.querySelector('.activatedBtn')
    if(!imageChekced) {
        // this.classList.toggle('activatedBtn')
        if(this.classList.contains('appartement_NotChecked')){
            this.classList.toggle('appartement_NotChecked');
            this.classList.toggle('appartement_Checked');
            this.classList.toggle('activatedBtn')
            // console.log("file: creerNouveauLot_1.js ~ line 51 ~ myInputsImgs.forEach ~ this", this)
        } else if (this.classList.contains('maison_NotChecked')) {
            this.classList.toggle('maison_NotChecked');
            this.classList.toggle('maison_Checked'); 
            this.classList.toggle('activatedBtn')
            // console.log("file: creerNouveauLot_1.js ~ line 54 ~ myInputsImgs.forEach ~ this", this)
        }
            
    } else if (imageChekced && this.classList.contains('appartement_NotChecked')){
            this.classList.toggle('appartement_Checked');
            this.classList.toggle('appartement_Not_Checked');
            this.classList.toggle('activatedBtn');
            const maison_Checked = document.querySelector('.maison_Checked');
            maison_Checked.classList.toggle('maison_Checked');
            maison_Checked.classList.toggle('maison_NotChecked');
            maison_Checked.classList.toggle('activatedBtn');

    } else if (imageChekced && this.classList.contains('maison_NotChecked')) {
            this.classList.toggle('maison_Checked');
            this.classList.toggle('maison_NotChecked');
            this.classList.toggle('activatedBtn');
            const appart_Checked = document.querySelector('.appartement_Checked');
            // console.log("file: creerNouveauLot_1.js ~ line 75 ~ myInputsImgs.forEach ~ appart_Checked", appart_Checked)
            appart_Checked.classList.remove('appartement_Checked');
            appart_Checked.classList.add('appartement_NotChecked');
            appart_Checked.classList.remove('activatedBtn');
    } 
    
}))

// Allow activation of the create button

document.getElementById('formContainer').addEventListener('keyup', function(e) {
    // console.log(e);

    // const numero_Lot = document.getElementById('numero_Lot');
    // console.log("file: creerNouveauLot_1.js ~ line 75 ~ numero_Lot", numero_Lot.value);

    const nom = document.getElementById('nom');
    // console.log("file: creerNouveauLot_1.js ~ line 75 ~ nom", nom.value);

    const adresse = document.getElementById('adresse');
    // console.log("file: creerNouveauLot_1.js ~ line 86 ~ adresse", adresse.value);

    const postalCode = document.getElementById('postalCode');
    // console.log("file: creerNouveauLot_1.js ~ line 86 ~ PostalCode", postalCode.value);

    const town = document.getElementById('town');
    // console.log("file: creerNouveauLot_1.js ~ line 86 ~ town", town.value);

    const loyer = document.getElementById('loyer');
    // console.log("file: creerNouveauLot_1.js ~ line 89 ~ loyer", loyer.value);

    const superficie = document.getElementById('superficie');
    // console.log("file: creerNouveauLot_1.js ~ line 92 ~ superficie", superficie.value);
    
    const nbr_Pieces = document.getElementById('nbr_Pieces');
    // console.log("file: creerNouveauLot_1.js ~ line 95 ~ superficie", nbr_Pieces.value);

    const inputBtn_Yes = document.getElementById('inputBtn_Yes');
    // console.log("file: creerNouveauLot_1.js ~ line 75 ~ inputBtn_Yes", inputBtn_Yes.value);

    const inputBtn_No = document.getElementById('inputBtn_No');
    // console.log("file: creerNouveauLot_1.js ~ line 75 ~ inputBtn_No", inputBtn_No.value);
// 
    const type_Appart = document.getElementById('type_Appart');
    // console.log("file: creerNouveauLot_1.js ~ line 75 ~ type_Appart", type_Appart.value);

    const type_Maison = document.getElementById('type_Maison');
    // console.log("file: creerNouveauLot_1.js ~ line 75 ~ type_Maison", type_Maison.value);

    const buttonNonActivated = document.getElementById('buttonNonActivated_Pup');
    const buttonActivated = document.getElementById('buttonActivated_Pup');

    if(nom.value && adresse.value && postalCode && town && loyer.value && superficie.value  && nbr_Pieces.value ) {
        console.log('le formulaire est suffisament remplie');
        
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');
    } else {
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
    }
})

// Allow Error missage to display: none after clicking on the cross

const errorCross = document.getElementsByClassName('Cross_errorCont')
// console.log("file: creerNouveauLot_1.js ~ line 126 ~ errorCross", errorCross)
errorCross[0].addEventListener('click', ()=> {
    const containerError = document.getElementById('containerError');
    const title_Pup = document.getElementById('title_Pup');

    if(containerError){
        containerError.classList.toggle('errorCont_DisplayNone')
        title_Pup.classList.add('title_Pup_NoError')
    } else return
});

// Allow Check of posta Code content type rule error or not

const createButton_Actve = document.getElementById('buttonActivated_Pup');

createButton_Actve.addEventListener('click', () => {
    const section_PopUp = document.getElementById('section_PopUp');
    const containerError = document.getElementById('containerError');
    const title_Pup = document.getElementById('title_Pup');
    const field_CP = document.getElementById('field_CP')

    const regex = new RegExp(/[^0-9]/, 'g');
    const valCP = document.getElementById('postalCode').value;
    console.log("file: creerNouveauLot_1.js ~ line 125 ~ val", valCP)

    if (!valCP.match(regex)) {
        // alert("Must be a valid number");
        section_PopUp.classList.remove('displayNone_Pup');
        containerError.classList.remove('errorCont_DisplayNone')
        title_Pup.classList.remove('title_Pup_NoError')
        field_CP.classList.add('field_CP_redBorder0n')
    }
})













