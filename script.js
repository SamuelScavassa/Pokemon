var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let name = document.getElementById("name")

    urlForm = urlForm + this.name.value

    urlForm = urlForm.toLocaleLowerCase()

    let resposta = document.getElementById('content')
    let imagem = document.getElementById('imgPokemon')

    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiscula(data.name) + '<br>'
            html = html + 'Type: ' + maiscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            if(err == "SyntaxError: Unexpected token 'N'"+', "Not Found" is not valid JSON'){
                html = 'Pokémon não encontrado ;-;'
            } else{
                html = err
            }
            resposta.innerHTML = html

        })
});


function maiscula(val){
    return val[0].toUpperCase() + val.substr(1)
}



