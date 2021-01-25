const cep = document.querySelector("#cep")
const MostreData = (result)=>{
    for(const campo in result ){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]

        }
    }
}


cep.addEventListener("blur", (e)=>{
    let pesquisa = cep.value.replace("-", "") 
    const options = {
        method: 'GET',
        mod: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, options)
        .then(response=>{response.json()
            .then(data=>MostreData(data))
        })
        .catch(e=>console.log('erro: ' + e, message))


    
})