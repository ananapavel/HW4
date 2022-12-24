document.getElementById("btn").onclick = function() {counterFunction()};

function counterFunction(){
    document.getElementById("btn").innerHTML = +document.getElementById("btn").innerHTML + 1;
}