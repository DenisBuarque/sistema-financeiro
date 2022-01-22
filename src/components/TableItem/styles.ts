import Styled from 'styled-components'

export const TableLine = Styled.tr``;

export const TableColumn = Styled.td`
    padding: 10px 0;
`;

export const Category = Styled.div<{ color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = Styled.div<{ color: string }>`
    color: ${props => props.color };
`;