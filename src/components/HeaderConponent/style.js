import styled from "styled-components";  
import { Row } from "antd"; 

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    display: flex;
    align-items: center;  
    justify-content: space-between; 
`;

 
export const WrapperTextHeader = styled.span `
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    gap: 16px;
    flex-wrap: nowrap;
`

export const WrapperHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px; /* Khoảng cách giữa Cart và Account */
`;

export const WrapperHeaderCart = styled.div`
    color: #fff;
    font-size: 23px;
    cursor: pointer;
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`;

export const WrapperTextHeaderSmall = styled.div`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`;
