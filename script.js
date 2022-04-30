

function testeI (){
    let cep = document.querySelector('#cepDigitado').value
    

    if(cep == '' || cep.length != 8){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Digite corretamente o CEP',
            
          })
    }else{
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json() )
        .then( response => 
            montarHtml(response)
        )
        .catch(erro => console.log(erro) )
    }
}

function montarHtml(response){
    let tbody = document.querySelector('#tbody')
    let table = document.querySelector('#wraper-table')
    

    let tabela = `
        <tr>
            <td>${response.logradouro}</td>
            <td>${response.bairro}</td>
            <td>${response.localidade}/${response.uf}</td>
            <td>${response.cep}</td>
        </tr>
    `

    
    table.style.visibility = 'visible'
    tbody.insertAdjacentHTML('beforeend', tabela)
}
