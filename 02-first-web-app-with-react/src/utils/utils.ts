export const { format: formatAmount } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR')
