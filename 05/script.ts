const soletradorAutomatico = (palavra: string): string => {

    let resultado = ''
    for (let i = 0; i < palavra.length; i++) {
        if (i === palavra.length - 1) {

             resultado += `${palavra[i]}`
            break
        }
        resultado += `${palavra[i]}-`
    }

    return resultado
}

console.log(soletradorAutomatico('Desenvolvedor'))

const soletrandoAlternativo = (palavra:string): string =>{
    return palavra.split('').join('-')
}

console.log(soletrandoAlternativo('Desenvolvedor'))