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