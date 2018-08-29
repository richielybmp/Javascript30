const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const sufixo = this.dataset.sizing || '';
    // a propriedade name é obtida de acordo com a definição do html dos componentes.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufixo);
}

inputs.forEach(input =>{
    input.addEventListener('change', handleUpdate);
})

inputs.forEach(input =>{
    input.addEventListener('mousemove', handleUpdate);
})