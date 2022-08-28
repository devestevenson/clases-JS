const url = 'https://restcountries.com/v3.1/all'

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data))
// .then((err) => console.log(err))

const paisApi = async (enlace) => {
    try {
        const response = await fetch(enlace)
        console.log(response)
        const data = await response.json()
    }catch(error){
        console.log(error)
    }
}
paisApi()