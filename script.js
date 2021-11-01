// ===========================
function hello() {
    alert("Hello World!")
}
// ===========================

function getEventsOfSeason(season) {
    fetch("https://www.biathlonworld.com/api/v1/sportdata/events/season/" + season)
    .then((resp) => resp.json())
    .then(function(data) {
        document.getElementById("eventsOfSeason").innerHTML = ""
        for (const element of data) {
            var node = document.createElement("LI")
            var textnode = document.createTextNode(element.EventId)
            node.appendChild(textnode)
            document.getElementById("eventsOfSeason").appendChild(node)
          }
    })
    .catch(function(error) {
        console.log(error)
    })
}