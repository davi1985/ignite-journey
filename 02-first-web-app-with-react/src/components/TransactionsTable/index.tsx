import { useContext } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

import { formatAmount, formatDate } from '../../utils/utils'

import { Container } from './styles'

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <Container>
      <h3> - Todas Transações</h3>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' && ' - '}
                {/* {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)} */}
                {formatAmount(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
