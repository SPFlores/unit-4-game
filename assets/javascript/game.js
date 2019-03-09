let player
let enemy
let attack
let win
let loss


// init function to reset
const init = _ => {
  // reset player
  // reset enemy
  // reset all health
  // reset all attack
  // reset all counter attack
  // reset all html elements
}

// allow picking of player--eventlistener
document.addEventListener('click', e => {
  let chosenPlayer = document.querySelector('#chosenPlayer')
  let enemyPlayers = document.querySelector('#enemyPlayers')
  switch (e.target.id) {
    case 'fire':
    chosenPlayer.innerHTML = `
    <h3>${playables[0].name}</h3>
      <br>
        <img src=${playables[0].img} alt="${playables[0].text}"> 
      <br>
      <p>${playables[0].healthpoints}</p>
    `
    break
    case 'air':
      console.log(e.target.id)
    break
    case 'water':
      console.log(e.target.id)
    break
    case 'earth':
      console.log(e.target.id)
    break
    default:
    break
  }
})

// move enemy into enemy div (html)

// make it impossible to click on another enemy (not chosen)

// when attack clicked, attack other player, lower health of enemy
// counter attack by challenger, lower health of player
// attack goes up on player for each round

// if player health <= 0, lose

// if challenger health <= 0, pick another enemy, repeat attack loop

// if player health >0 and no other enemies left, win

// object of enemy stats/etc.
let playables = [
  {
  // < img class= "options" id = "fire" src = "./assets/images/fire.png" alt = "Fire" >
  // <img class="options" id="air" src="./assets/images/air.png" alt="Air">
  //   <img class="options" id="water" src="./assets/images/water.png" alt="Water">
  //     <img class="options" id="earth" src="./assets/images/earth.png" alt="Earth">
        name: 'Fire',
        picture: "./assets/images/fire.png",
        healthpoints: 150,
        attackpower: 10,
        counterattackpower: 20,
      },
  {
          name: 'Air',
      picture: "./assets/images/air.png",
      healthpoints: 150,
      attackpower: 10,
      counterattackpower: 20,
    },
  {
          name: 'Water',
      picture: "./assets/images/water.png",
      healthpoints: 150,
      attackpower: 10,
      counterattackpower: 20,
    },
  {
          name: 'Earth',
      picture: "./assets/images/earth.png",
      healthpoints: 150,
      attackpower: 10,
      counterattackpower: 20,
    },
  ]
  
  // run init
  init()
