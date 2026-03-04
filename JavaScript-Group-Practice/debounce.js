const debounce = (fn, delay) => {
    let timer;

    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

let input = document.querySelector(".debounce-search");

const debounceSeach = (e) => {
    console.log(e.target.value)
}

const debouncedFunction  = debounce(debounceSeach, 1000);

input.addEventListener("input", debouncedFunction);



// const search = (query) => {
//     console.log(`Searching for`, query);
// }

// const searchWithDebounce = debounce(search, 1000)

// searchWithDebounce("R")
// searchWithDebounce("RA")
// searchWithDebounce("RAH")
// searchWithDebounce("RAHM")
// searchWithDebounce("RAHMA")
// searchWithDebounce("RAHMAT")