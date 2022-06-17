// const { default: axios } = require("axios")

let buttonAdd = document.querySelector('button')




function click(i) {

    console.log('you have clicked this button')
    axios.get('https://swapi.dev/api/people/')
        .then((res) => {
            for(let i = 0; i < res.data.results.length; i++) {
                axios.get(`${res.data.results[i].url}`)
                    .then((res) => {
                        console.log(res)
                        let element = document.createElement('h2');
                        element.textContent = res.data.name
                        document.querySelector("body").appendChild(element)
                    })
            }
    })
}



buttonAdd.addEventListener('click', click)