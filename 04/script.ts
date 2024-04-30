const geradorEtiquetasMaquina = (equipamento: {
     produto: string, lote: number, ano: number, qtd: number }): string[] => {

    let resultado: string[] = []

    for (let vezes = 1; vezes <= equipamento.qtd; vezes++) {
        resultado.push(`${equipamento.lote}-${equipamento.ano}-${vezes.toString().padStart(3, "000")}`)
    }



    return resultado

}

const ex = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(geradorEtiquetasMaquina(ex))
