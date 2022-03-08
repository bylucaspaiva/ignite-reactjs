import { Container } from "./styles";

export function TransactionTable () {
  return (
    <Container>
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
            <td>Desenvolvimento de Website</td>
            <td>R$5.000</td>
            <td>Desenvolvimento</td>
            <td>07/03/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$5.000</td>
            <td>Desenvolvimento</td>
            <td>07/03/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$5.000</td>
            <td>Desenvolvimento</td>
            <td>07/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}