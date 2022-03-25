console.log('documents.js');

// Allowing display of the hidden list with rotation of the arrow Icon

let rotated = false

document.getElementById('arrow1').addEventListener('click', () => {
    
    const client_Cont_List = document.getElementById('client_Cont_List');
    const client_Cont_1 = document.getElementById('client_Cont_1');
    const arrow1 = document.getElementById('arrow1');

    let deg = rotated ? 0 : 90;    
    // console.log("file: documents.js ~ line 14 ~ document.getElementById ~ rotated", rotated)
    arrow1.style.transform = `rotate(${deg}deg)`;
    if(rotated === false) {
        client_Cont_1.style.marginBottom = "0px";
        client_Cont_List.style.display = "block";
    } else {
        client_Cont_1.style.marginBottom = "14px";
        client_Cont_List.style.display = "none";
    }
    rotated = !rotated
    return
})

//  Closing Delete Pop Up when clicking on 2 areas 
const closingAreas = document.querySelectorAll('.closePopUp')
console.log("file: documents.js ~ line 29 ~ closingAreas", closingAreas)


closingAreas.forEach( area => area.addEventListener('click', () => {
    // console.log("file: documents.js ~ line 33 ~ closingAreas.forEach ~ area", area)
    const PopUp = document.getElementById('PopUp');
    PopUp.style.display = "none";
}))


const allCrosses = document.querySelectorAll('.eraselistItem_Crosses')
// console.log("file: documents.js ~ line 40 ~ allCrosses", allCrosses)

allCrosses.forEach( cross => cross.addEventListener('click', () => {
    
    const PopUp = document.getElementById('PopUp');
    PopUp.style.display = "flex";

    const btnValider = document.getElementById('buttonPopUpActivated')
    btnValider.addEventListener('click', () => {
        const PopUp = document.getElementById('PopUp');
        PopUp.style.display = "none";
        cross.parentElement.style.display = "none";
    })

}))








