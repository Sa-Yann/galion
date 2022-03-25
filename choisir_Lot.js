console.log('index.js')

// ALLOW RERVERS ROW ON CLOUMN 2

document.getElementById('arrowCol1').addEventListener('click', function(){


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


// ALLOW RERVERS ROW ON CLOUMN 2

document.getElementById('arrowCol2').addEventListener('click', function(){

    console.log('testFunction');

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



// document.getElementById('buttonChoose').onclick = function() {
//     this.classList.toggle('buttonClicked');

//     const buttonClickedValid = document.querySelector(`.buttonClicked`)

//     if(!buttonClickedValid) {
//         console.log('la class buttonClicked est actionnée');
//         this.classList.remove('buttonClicked');
//         this.innerText = 'Choisir ce Lot'
//     } else {
//         console.log(`la class buttonClicked n'est pas actionnée`);
//         const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
//         this.innerHTML = `Lot Choisit` + `${imgHtml}`;
//         // element.innerHTML += "additional HTML code"                             
//     }
    
// }

// document.getElementById('line1').onclick = function(x) {
     
//     const rowIndex = x.rowIndex

//     console.log(rowIndex)
        
//     this.classList.toggle('lineClicked');

//     const lineClickedValid = document.querySelector(`.lineClicked`)
//     const children = this.children

//     if(!lineClickedValid) {
//         console.log(`la class buttonClicked n'est pas actionnée`);
//         // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
//         children[6].classList.remove('buttonClicked');
//         const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
//         children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
//     } else {
//         console.log(`la class buttonClicked est actionnée`);
//         // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
//         const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
//         children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`;              
//     }
    
// }

document.getElementById('line1').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}


document.getElementById('line2').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line3').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line4').onclick = function() {
     
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line5').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}


document.getElementById('line6').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line7').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line8').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line9').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

document.getElementById('line10').onclick = function() {
        
    this.classList.toggle('lineClicked');

    const lineClickedValid = document.querySelector(`.lineClicked`)
    const children = this.children

    children[6].classList.remove('buttonClicked');

    const buttonNonActivated = document.getElementById('buttonNonActivated');

    const buttonActivated = document.getElementById('buttonActivated');

    if(!lineClickedValid) {
        console.log(`la class buttonClicked n'est pas actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        // children[6].classList.remove('buttonClicked');
        buttonNonActivated.classList.remove('displayNone');
        buttonActivated.classList.add('displayNone');
        
        children[6].innerHTML = `<button style="background-color: #006464 "class="choose flex_CtrCtr buttonClicked">Choisir ce Lot</button>`;              
    } else {
        console.log(`la class buttonClicked est actionnée`);
        // console.log("file: index.js ~ line 31 ~ document.getElementById ~ children", children)
        const imgHtml = `<div class="checkedbutton"><img src="./assets/icons/check_Grey.png" alt=""></div>`
        children[6].innerHTML = `<button class="choose flex_CtrCtr buttonClicked">Lot Choisit` + `${imgHtml}</button>`; 
        buttonNonActivated.classList.add('displayNone');
        buttonActivated.classList.remove('displayNone');             
    }

    return
    
}

// ALLOW OPENING OF PUP ON ABSOLUTE POSITION

const buttonsToPopUp = document.querySelectorAll('.openPopUp');
// console.log("file: creerNouveauLot_1.js ~ line 127 ~ buttonsToPopUp", buttonsToPopUp)


buttonsToPopUp.forEach(clickArea => clickArea.addEventListener('click', function(e){
    // console.log(e);
    const section_PopUp = document.getElementById('section_PopUp');
    // console.log("file: choisir_Lot.js ~ line 439 ~ buttonsToPopUp.forEach ~ section_PopUp", section_PopUp)
    if(section_PopUp) {
        section_PopUp.classList.remove('displayNone_Pup');
    } else return

}))

const crossClosed = document.getElementById('crossClosed')
// console.log("file: choisir_Lot.js ~ line 447 ~ crossClosed", crossClosed)

crossClosed.addEventListener('click', (e) => {
    // console.log(e);
    const section_PopUp = document.getElementById('section_PopUp');
    if(section_PopUp) {
        section_PopUp.classList.add('displayNone_Pup');
    } else return

})
