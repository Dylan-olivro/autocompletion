const search = document.getElementById("search-bar");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const hr = document.getElementById("t");

if (search) {
  search.addEventListener("keyup", () => {
    result.innerHTML = "";
    result2.innerHTML = "";
    search.style.borderBottomLeftRadius = "50px";
    search.style.borderBottomRightRadius = "50px";
    search.style.borderTopRightRadius = "50px";
    search.style.borderTopLeftRadius = "50px";
    hr.style.border = "none";

    if (search.value != "") {
      search.style.borderBottomLeftRadius = "0";
      search.style.borderBottomRightRadius = "0";
      search.style.borderTopRightRadius = "20px";
      search.style.borderTopLeftRadius = "20px";
      hr.style.border = "1px solid gray";
      hr.style.width = "500px";
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

      fetch("recherche.php/?search2=" + search.value)
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
            result2.appendChild(e);
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
