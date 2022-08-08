let square = document.querySelector('.square')
console.log(square);
square.addEventListener('click', () => {
    // alert('dsgdsfg')

    
    if(square.style.background == 'green'){

        square.style = `
        background: yellow;
        border-radius: 50%;
        `
        // square.style.background = 'yellow';
        // square.style.border-radius = '150px';
    }else{
        square.style = `
        background: green;
        border-radius: non;
        `
        
    }
})