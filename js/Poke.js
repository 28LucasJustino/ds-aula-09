const btnPesquisa = document.getElementById("btnPesquisa");
const inputBusca = document.getElementById("inputBusca");

btnPesquisa.addEventListener("click", function(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url + inputBusca.value.trim())
    .then((response) => {
        if(!response.ok){
            alert(`Não foi possível encontrar este pokémon`)
        }
        return response.json();
    })
    .then((data) => {
        console.clear();
        console.log(data);
        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('idPokemon').innerHTML = data['id'];
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
        let weight = data['weight'];
        let pesoFinal = weight/10;
        document.getElementById('peso').innerHTML = pesoFinal;
        let height = data['height'];
        let alturaFinal = height/10;
        document.getElementById('altura').innerHTML = alturaFinal;
    });
});