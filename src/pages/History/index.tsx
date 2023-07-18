import { HistoryContainer, HistoryList, Status } from "./Styles";

export function History(){
    return(
    <HistoryContainer>
        <h1>Histórico</h1>
        <HistoryList>
            <table>
                <thead>
                    <tr>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Início</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 dias</td>
                        <td><Status statusColor="yellow">Em andamento</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 dias</td>
                        <td><Status statusColor="green">Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 dias</td>
                        <td> <Status statusColor="red">cancelado</Status> </td>
                    </tr>
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>
    )
  }