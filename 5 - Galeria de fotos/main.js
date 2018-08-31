const panels =  document.querySelectorAll('.panel');

function toggleOpen(){   
    panels.forEach(p => p!= this ? p.classList.remove('open') : -1);
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));