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
    const badge = document.createElement("span");
    badge.classList.add("badge");
    trip.style.position = "relative";
  });
};
