//Escopo global
function myEscope(){
    //Acessando os elementos da classe document.
    const form = document.querySelector('.form');

    //Array para armazenamento de dados.
    const data = [];

    //Acessando os elementos da classe form.
    function recebeEventoForm(evento){

        //Impedindo a página ser atualizada após enviar o formulário.
        evento.preventDefault();
        
        //Pegando os dados dos inputs.
        const nome = form.querySelector('.nome');
        const email = form.querySelector('.email');
        const birthDate = form.querySelector('.birth-date');

        data[0] = nome.value;
        data[1] = email.value;
        data[2] = birthDate.value;

        console.log(data);
    };

    //Adicionando um escutador, para que caso um evento for acionado, um método será feito.
    form.addEventListener('submit', recebeEventoForm);
}
myEscope();