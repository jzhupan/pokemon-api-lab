// const getPokemon = async () => {
//     const cyndaquilPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/cyndaquil')
//     console.log(cyndaquilPokemon.data.sprites.front_default)
// }
// getPokemon()

let button = document.querySelector("#searchButton")
let textInput = document.querySelector("#inputBar")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")

button.addEventListener('click', async () => {

    //Axios call goes here
    let findPokemon = textInput.value
    //remember to use Await!
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${findPokemon}`
    )
   let pokeImg = response.data.sprites.front_default

   pokemonImage.src = pokeImg
    // console.log(response)
    // console.log(pokeImg)
})
