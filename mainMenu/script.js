const audios = [
  new Audio("../ressources/ShortRemix.mp3"),
  new Audio("../ressources/LongRemix.mp3")
];

const searchBar = document.querySelector(".searchBar");
const spaceNews = [
  "La NASA sends the first manned mission to Mars",
  "A new potentially habitable planet discovered in a nearby star system",
  "A private company launches a satellite to map the surface of the Moon",
  "Astronauts conduct a spacewalk to repair a damaged space telescope",
  "Water discovered on a Jupiter moon",
  "Commercial space tourism begins",
  "A joint NASA and ESA mission to explore an asteroid",
  "A space laboratory in orbit around Earth enables unprecedented scientific experiments",
  "A rover discovers evidence of past life on Mars",
  "Astronauts undertake a long-duration mission aboard the International Space Station",
  "Scientists plan a mission to study the atmosphere of Venus",
  "A new space telescope captures the first images of an exoplanet",
  "A successful mission to collect samples from the comet Halley and return them to Earth",
  "Satellites in orbit around Earth monitor changes in the climate",
  "A permanent lunar base is under construction to prepare for future missions to Mars",
  "Deep space exploration missions search for new planets in the far reaches of the solar system",
  "Suborbital spaceflights allow the general public to experience space travel",
  "An international space laboratory is under construction to facilitate collaboration between countries",
  "China sends a manned mission to the far side of the Moon",
  "Astronauts undertake a mission to colonize a distant planet",
  "A new type of space propulsion revolutionizes interstellar travel",
  "A telescope in space captures an image of a supernova explosion in a distant galaxy",
  "A new form of life discovered in the depths of space",
  "An asteroid headed for Earth is detected in time to avoid a disaster",
  "Experiments in space biology reveal the effects of weightlessness on the human body",
  "A mission to explore the origins of the universe and the first stars",
  "Autonomous drones allow for exploration of previously inaccessible regions of space",
  "Lunar-orbiting space stations facilitate travel to Mars",
  "A mission to return samples from Mars to Earth for analysis",
  "Astronauts establish a scientific research base on an asteroid near Earth",
  "A rover discovers ancient extraterrestrial ruins on a distant planet",
  "A joint mission between NASA, ESA, and Roscosmos to study black holes",
  "Images of a wormhole captured by telescopes in space",
  "A mission to repair a damaged space telescope",
  "A journey to a potentially habitable exoplanet is planned for the coming decades",
  "Colonies in space are under construction to accommodate a growing human population",
  "A project to terraform Mars to allow for human life on the red planet",
  "Experiments in space biology reveal the effects of weightlessness on plants",
  "A project to colonize the Kuiper belt to expand human presence in the solar system",
  "A mission to return samples from a moon of Saturn for study",
  "An international consortium begins a mission to study the rings of Saturn",
  "New types of exoplanets discovered in distant star systems",
  "A mission to study the asteroid belt and uncover the mysteries of the formation of the solar system",
  "Evidence of a civilization beyond Earth detected by telescope",
  "Experiments in fundamental physics conducted in space test new theories",
  "A new space program to explore the far reaches of interstellar space",
  "A spacecraft breaks the speed of light",
  "A new propulsion method reduces the time needed for space travel to other planets",
  "Reusable rockets make space travel more accessible and affordable",
  "A space laboratory studies the effects of weightlessness on building materials",
  "A new galaxy with a surprising shape discovered by telescope",
  "Space missions map the resources of asteroids for potential use",
  "A mission to return samples from a Jupiter moon for study",
  "A project to colonize Titan, the largest moon of Saturn, to explore its methane oceans",
  "Astronauts undertake a long-duration mission on the far side of the Moon",
  "A space laboratory in orbit around Mars to studythe potential for terraforming the planet",
  "A rover discovers extraterrestrial ruins on a moon of Saturn",
  "A telescope in space captures the first images of a supernova explosion",
  "Satellites in orbit around Jupiter allow for closer study of the gas giant's moons",
  "A joint mission between NASA and China to explore the far reaches of the solar system",
  "Experiments in space biology conducted in orbit lead to the development of new medical treatments",
  "A project to colonize the asteroid belt for resource extraction"
];

function playBtn(choice) {
  const audio = audios[choice];
  const playButton = document.querySelector(".play");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function search(spaceNews) {
  const searchBar = document.querySelector(".searchBar");
  if (searchBar.value === "space") {
    const random = spaceNews[Math.floor(Math.random() * spaceNews.length)];
    alert("An original result was found! It's: '" + random + "'");
    document.getElementById("angle").innerText = String(random);
  }
  else {
    alert("No result found. Please try again.");
    document.getElementById("angle").innerText = "No result found. Please try again.";
  }
  searchBar.value = "";
}

function verification() {
  document.querySelector(".verification").style.visibility = "visible";
}
function addCard() {
  if (document.querySelector(".secretInput").value === "C0mPl3x!P@ssw0rd") {
    alert("Correct password ! Redirecting...")
    window.location.href = "../create/createform.html";
  } else {
    alert("Wrong password !");
    document.querySelector(".verification").style.visibility = "hidden";
    document.querySelector(".Add").style.display = "none";
  }
}

function getValue() {
  const card = document.querySelector(".myCard");
  const cardata = JSON.parse(localStorage.getItem('createResult'));
  card.innerHTML = "<h2>" + cardata.name + "</h2><h4>" + cardata.description + "</h4>";
}

function mainCard(card) {
  if (card === "LunarBase") {
    document.querySelector(".cardsMenu").innerHTML = '<div class="card mainCard"><h2>Lunar Base visit</h2><br></br><iframe src="https://skybox.blockadelabs.com/e/7c06664510ff62638280b19e102a6023" width=700 height=700 style="border:0;" allow="fullscreen"></iframe></div>';
  } else if (card === "Sitiography") {
    document.querySelector(".cardsMenu").innerHTML = '<div class="card mainCard"><h1>Sitiography</h1><h3><a href="https://www.cnn.com">• CNN channel:</a> Cable News Network official channel</h3><h3><a href="https://www.abc.net.au/btn">• BTN channel:</a> Behind The News official channel</h3><h4><a href="https://www.bbc.com">• BBC channel:</a> British Broadcasting Corporation official channel</h4><h3><a href="https://audio-lingua.ac-versailles.fr/spip.php?rubrique2">• Audio-lingua:</a> Audio-lingua official website</h3></div>';
  }
}