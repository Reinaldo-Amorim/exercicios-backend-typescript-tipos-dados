const tabuadas = (numeral: number[]): string => {

    let resultado: string = ''

    for (const numero of numeral){ 
        for (let i = 0; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i} \n`
            if (i === 10) {
                resultado += '----------------------------- \n'
            }
        }

    }

    return resultado

}

console.log(tabuadas([1,3,5,7,9]))