const coordinates = document.getElementsByClassName("coordinate");
for (let i = 0; i < coordinates.length; i++) {
    coordinates[i].onclick = log;
}


function log(evt) {
    let id = evt.target.id;
    let coordinate = document.getElementById(id)

    console.log(id);
    coordinate.classList.add("hit")
}