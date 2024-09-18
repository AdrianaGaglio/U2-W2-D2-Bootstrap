const tripsCounter = document.getElementById("tripsCounter");
tripsCounter.addEventListener("click", (event) => {
  const numOnSale = document.querySelectorAll("#collapseSaldi .row .card").length;
  const numWelcomeSummer = document.querySelectorAll("#collapseWelcomeSummer .row .card").length;
  const numDailyOffer = document.querySelectorAll("#collapseOfferta .card").length;
  const numLastMinute = document.querySelectorAll("#collapseLastMinute img").length;
  const numOfTripsAvailable = numOnSale + numWelcomeSummer + numDailyOffer + numLastMinute;
  alert("Numero viaggi disponibili: " + numOfTripsAvailable);
});

const hotBadge = () => {
  const summerTrips = document.querySelectorAll("#collapseWelcomeSummer .row .card");
  summerTrips.forEach((trip) => {
    trip.classList.add("position-relative");
    const badge = document.createElement("span");
    badge.innerText = "HOT";
    badge.classList.add("badge");
    badge.classList.add("position-absolute");
    badge.classList.add("text-bg-danger");
    badge.classList.add("top-0");
    badge.style.translate = "-30% 50%";
    badge.classList.add("end-0");
    trip.appendChild(badge);
    console.log(trip);
  });
};

window.addEventListener("load", hotBadge());

const removeCardsBtn = document.getElementById("removeCards");

const removeCards = () => {
  const cards = Array.from(document.getElementsByClassName("card"));
  cards.forEach((card) => card.classList.toggle("d-none"));
};

removeCardsBtn.addEventListener("click", removeCards);
