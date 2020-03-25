const path = window.document.location.pathname
const book1 = 'Book 1 : En finir avec le chomage...'
const book2 = 'Book 2 : Satisfaire nos besoins...'
const book1or2 = 'Book 1 or book 2'
const randomBook = () => {
  const randomNum = Math.random()
  if (randomNum > 0.5) {
    console.log('1 =>', randomNum) // !DEBUG
    console.info(book1) // !DEBUG
  } else {
    console.log('0 =>', randomNum) // !DEBUG
    console.info(book2) // !DEBUG
  }
}
switch (true) {
  case path.includes('en-finir-avec-le-chomage-un-choix-de-societe') === true:
    console.info(path) // !DEBUG
    console.info(book1) // !DEBUG
    break
  case path.includes('satisfaire-nos-besoins-un-choix-de-societe') === true:
    console.info(path) // !DEBUG
    console.info(book2) // !DEBUG
    break
  case path.includes('la-croissance-du-pib-menacerait-elle-la-survie-de-humanite') === true:
    console.info(path) // !DEBUG
    console.info(book1) // !DEBUG
    break
  case path.includes('les-ideologies-legitimeraient-elles-lordre-social') === true:
    console.info(path) // !DEBUG
    console.info(book1or2) // !DEBUG
    console.info(randomBook()) // !DEBUG
    break
  case path.includes('les-enjeux-du-rapport-au-temps') === true:
    console.info(path) // !DEBUG
    console.info(book1or2) // !DEBUG
    console.info(randomBook()) // !DEBUG
    break
  case path.includes('librairie') === true:
    console.info(path) // !DEBUG
    console.info('no book') // !DEBUG
    break
  case path.includes('le-travail-et-la-consommation-les-piliers-de-lordre-social') === true:
    console.info(path) // !DEBUG
    console.info(book2) // !DEBUG
    break
  default:
    console.info(book1or2) // !DEBUG
    console.info(randomBook()) // !DEBUG
    break
}
