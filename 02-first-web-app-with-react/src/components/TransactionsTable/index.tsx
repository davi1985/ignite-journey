import { Container } from './styles'

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$5.000</td>
            <td>freelance</td>
            <td>20/05/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$5.000</td>
            <td>casa</td>
            <td>20/05/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
