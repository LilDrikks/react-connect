import React from 'react'


const formStyle = {
    flexWrap: 'wrap',
    display: 'flex',
    width: '200px',
    justifyContent: 'center',
    gap: '10px'
}

const CreateUser = () => {
    let dados = document.getElementsByTagName('form')
    
    setTimeout(() => {
        dados = [...dados[0]]
    }, 1000)

    const handleClick = () => {
        console.log(dados[0].value,dados[1].value ,dados[2].value)
    }

    return (
        <form style={formStyle}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="salary">Salário:</label>
            <input type="text" name="salary" id="salary" />
            <label htmlFor="approved">Aprovação(verdadeira|falsa):</label>
            <input type="text" name="approved" id="approved" />
            <input type="button" value="Enviar dados" onClick={handleClick} />
        </form>
    );
}

export default CreateUser
