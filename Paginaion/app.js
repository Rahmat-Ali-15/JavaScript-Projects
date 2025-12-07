let api = "https://picsum.photos/v2/list?page=1&limit=15";


const fetchImg = async() => {
    try {
        let res = await fetch(api);
        let data = await res.json();
        appendImg(data)
    } catch (error) {
        console.log(error);
    }
}
fetchImg();

const appendImg = (val) => {
    let imgContainer = document.querySelector(".imgs-container");

    val.forEach((el)=> {
        let img = document.createElement("img");
        img.src = el.download_url;
        console.log(el.url)

        imgContainer.append(img)
    })
}


// ⭐ SCROLL LOGIC
const imgContainer = document.querySelector(".imgs-container");
const left = document.querySelector(".bi-chevron-left");
const right = document.querySelector(".bi-chevron-right");

right.addEventListener("click", () => {
    imgContainer.scrollLeft += 160;  // 150px image + 10px gap
});

left.addEventListener("click", () => {
    imgContainer.scrollLeft -= 160;
});
