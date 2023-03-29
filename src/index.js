// run the server using the json-server --watch db.json
// use query selector to get the submit button element
const button = document.querySelector("form")

// listen to the subtmit event call a function
button.addEventListener("submit", (event)=>{
    event.preventDefault()
    //console.log("hello")

    const input = document.querySelector("input#searchByID")

    //console.log(input.value)

    // fetch the data from the server
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")

        title.innerText = data.title
        summary.innerText = data.summary
    })
})
// get the input value of the use
// pass the input value to the server url
// get the elements that display summary and title and stoe them in a variable
// update the contents of the variable using innerText






































// const init = () => {
//   const fetchMovieElement = document.querySelector("form")

//   fetchMovieElement.addEventListener("submit",(event)=>{
//     event.preventDefault();

//     const input = document.querySelector("input#searchByID")

//     console.log(input.value)

//     fetch(`http://localhost:3000/movies/${input.value}`)
//     .then(res => res.json())
//     .then(data => {
//         const title = document.querySelector("section#movieDetails h4")
//         const summary = document.querySelector("section#movieDetails p")

//         title.innerText = data.title
//         summary.innerText = data.summary

//     })

//   })
// }

// document.addEventListener('DOMContentLoaded', init);