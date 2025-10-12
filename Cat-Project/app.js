let cat_api_key =
  "live_m9xQIyX3QcfmYZBS6Lc6VKIGmT1O3hZlApCdYYGnRNs6Q971wpTkD4C8PLGWuGby";
let cat_api_url = `https://api.thecatapi.com/v1/images/search?limit=100`;

const fetchData = async () => {
  const loading = document.createElement("p");
  loading.textContent = "Loading...";
  loading.style.textAlign = "center";
  document.body.append(loading);

  try {
    loading.style.display = "block";
    let res = await fetch(cat_api_url, {
      headers: {
        "x-api-key": cat_api_key,
      },
    });

    let catData = await res.json();
    console.log("🚀 ~ catData:", catData);
    appendCat(catData);
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
};
fetchData();

const appendCat = (value) => {
  let catContent = document.querySelector(".cat-content");

  value.forEach((el) => {
    let catDiv = document.createElement("div");
    catDiv.className = "catContentDiv";
    let catId = document.createElement("p");
    catId.innerText = `ID: ${el.id}`;

    let catImg = document.createElement("img");
    catImg.src = el.url;
    catImg.style.width = "270px";
    catImg.style.height = "270px";
    catImg.style.border = "1px solid black";

    catDiv.append(catId, catImg);
    catContent.append(catDiv);
  });
};
