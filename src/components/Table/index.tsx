import * as Styled from './styled'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}

export const Table = ({ list }: Props) => {
    return (
        <Styled.Table>
            <thead>
                <tr>
                    <Styled.HeadTable>Data</Styled.HeadTable>
                    <Styled.HeadTable>Categoria</Styled.HeadTable>
                    <Styled.HeadTable>Titulo</Styled.HeadTable>
                    <Styled.HeadTable>Valor</Styled.HeadTable>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                   <TableItem key={index} item={item}/> 
                ))}
            </tbody>
            
        </Styled.Table>
    )
}