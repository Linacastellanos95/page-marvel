(function(){
    
    const sliders = [...document.querySelectorAll('.character__body')];
    const buttonNext= document.querySelector('#next');
    const buttonBefore= document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentCharacter = document.querySelector('.character__body--show').dataset.id;
        value = Number(currentCharacter);
        value+= add;

        sliders[Number(currentCharacter)-1].classList.remove('character__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('character__body--show');
    }
})();