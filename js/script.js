const search = document.getElementById("search-bar");
const result = document.getElementById("result");

if (search) {
  search.addEventListener("keyup", () => {
    result.innerHTML = "";
    search.style.borderBottomLeftRadius = "50px";
    search.style.borderBottomRightRadius = "50px";
    search.style.borderTopRightRadius = "50px";
    search.style.borderTopLeftRadius = "50px";

    if (search.value != "") {
      search.style.borderBottomLeftRadius = "0";
      search.style.borderBottomRightRadius = "0";
      search.style.borderTopRightRadius = "20px";
      search.style.borderTopLeftRadius = "20px";
      //   console.log("recherche.php/?search=" + search.value);
      fetch("recherche.php/?search=" + search.value)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //   console.log(data);
          data.forEach((element) => {
            let e = document.createElement("p");
            e.innerHTML =
              '<a href= "element.php?id=' +
              element.id +
              '" class="info">' +
              '<i class="fa-solid fa-magnifying-glass"></i>' +
              element.name;
            result.appendChild(e);
          });
        });
    }
  });
}
// console.log(window.location.href);

const link = window.location.href;
const id = link.split("=");
const image = document.getElementById("image");
// console.log(image);
// console.log(image.src);
// console.log(id);
// console.log("recherche.php/?id=" + id[1]);
// if(window.location.href)
fetch("recherche.php/?id=" + id[1])
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((element) => {
      let e = document.createElement("p");
      e.innerHTML = "Nom: " + element.name;
      image.src = "./assets/" + element.name + ".jpg";
      result.appendChild(e);
    });
  });
