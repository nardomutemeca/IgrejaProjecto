
//BtnMenu

const ClickarBtn = document.getElementById('menu-toggle');
const removerDepoisdeClicar = document.querySelectorAll('a');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
};
ClickarBtn.addEventListener('click', toggleMenu);

removerDepoisdeClicar.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    })
})


const citacoes = [
    ' "O Amor é a arma mais poderosa que existe no mundo." ',

      ' "Lembre-se, se você segue Cristo, você será odiado pelas pessoas,\
       pois todo aquele que viver piamente em Cristo Jesus sofrerá perseguições.\
        E se você vem a Cristo, você não virá por alguma igreja ou alguma denominação, ou algum credo.\
        Você virá pelo Sangue, essa é a única avenida de entrada." ',

       ' "Melhor é ter o espírito certo estando\
        numa doutrina errada do que ter o espírito errado numa doutrina certa." ',
    
        ' "A oração é a força mais vital que Deus já colocou nas mãos da humanidade.\
         A força mais eficaz que o homem conhece é a oração.\
         Você acredita nisso? Pois é. É a oração que muda as coisas." ',

         ' "Mantenha-se no projeto. Mantenha-se na estrada.\
          Ficai com as Escrituras. Não saia. É por isso que Jesus vem,\
           esse homem não seria enganado e sairia do lado, mas permaneça bem na Palavra." ',
           
           ' "Deus tem um caminho provido. Se você sempre seguir o caminho fornecido por Deus,\
            você nunca vai errar." ',

            ' "Eles leem e estudam. E isso é bom, mas não é disso que estamos falando.\
             Você sabe mais sobre a Palavra. É bom conhecer a Palavra, mas é melhor conhecer o Autor da Palavra." ',


];
function mostrarCitacoes() {
    const indice = Math.floor(Math.random() * citacoes.length);
    document.getElementById('CitacaoDoDia').textContent = citacoes[indice];
}
mostrarCitacoes();
setInterval(mostrarCitacoes, 10000);

// ScrollReveal_1

const ScrollBottom = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
};

ScrollReveal().reveal('.TextoCenter', {
    ...ScrollBottom,
});

//ScrollReveal_2

/*const ScrollLeft = {
    distance: '50px',
    origin: 'left',
    delay: 1000,
    
};

ScrollReveal().reveal('.section_1', {
    ...ScrollLeft,
});

const ScrollRight = {
    distance: '50px',
    origin: 'right',
    delay: 1500,
    
};

ScrollReveal().reveal('.card_1', {
    ...ScrollRight,
});

*/

