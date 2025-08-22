console.log('This is darg and drop utility')

const imgBox = document.querySelector('.imgBox')
const whiteBoxes = document.getElementsByClassName('whiteBox')

// Enevt listner for draged Element imgbox 
imgBox.addEventListener('dragstart', (e)=>{
    // jab pakra
     console.log('DragStart has been triggered');
     e.target.className += ' hold';
     setTimeout(() => {
     e.target.className = ' hide';
    }, 0);
});


imgBox.addEventListener('dragend', (e)=>{
    // jab chora
     console.log('DragEnd has been triggered');
     e.target.className = 'imgBox';
});


for (whiteBox of whiteBoxes){

    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault()
        console.log('DrageOver has been triggered');
    });

    whiteBox.addEventListener('dragenterr', ()=>{
        console.log('DragEnter has been triggered'); 
    });

    whiteBox.addEventListener('dragleave', ()=>{
        console.log('DragLeave has been triggered');  
    });

    whiteBox.addEventListener('drop', (e)=>{
        console.log('Drop has been triggered');  
        e.target.append(imgBox) 
    });
}