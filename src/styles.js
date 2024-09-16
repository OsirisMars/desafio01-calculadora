import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh; /* Corrigido aqui */
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 80%;
    
`;

export const Row = styled.div`
    display: flex;
    flex-directions: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-directions: row;
    justify-content: space-between;
    align-items: center;
`