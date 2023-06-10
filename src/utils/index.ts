export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 150) + ' (...)'
  }
  return descricao
}
