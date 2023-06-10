export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 150) + ' (...)'
  }
  return descricao
}

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((acc, cv) => acc + cv.preco, 0)
}
