const btnAdd = document.getElementById("add")
    

function displayImg(event) {
    const img = document.getElementById("profileImage");
    const text = document.getElementById("Text");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.classList.remove("hidden");
    text.classList.add("hidden");

  }

  
btnAdd.addEventListener("click",()=>{
const players =
      {
        "name": document.getElementById("name").value,
        "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
        "position": document.getElementById("Position").value,
        "nationality": document.getElementById("nationality").value,
        "flag": "https://cdn.sofifa.net/flags/ar.png",
        "club": document.getElementById("club").value,
        "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
        "rating": document.getElementById("rating").value,
        "pace": document.getElementById("pace").value,
        "shooting": document.getElementById("shooting").value,
        "passing": document.getElementById("passing").value,
        "dribbling": document.getElementById("dribbling").value,
        "defending": document.getElementById("defending").value,
        "physical": document.getElementById("physical").value
      }
     })      