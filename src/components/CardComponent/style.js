import styled from "styled-components";
import { Card } from 'antd';

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`;

export const WrapperCardStyle = styled(Card)`
    width: 200px;

    & img {
        height: 200px;
        width: 200px;
    }

    position: relative;
`;



export const WrapperReporText = styled.div`
    font-size: 12px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`;
export const WrapperPricetext = styled.div`
    font-size: 12px;
    color: rgb(255, 66, 78);
    font-weight: 500;
    margin: 8px 0;
`;
export const WrapperDiscountText = styled.div`
    font-size: 12px;
    color: lightgrey;
    text-decoration: line-through;
    white-space: nowrap;
`;
export const WrapperDiscountPercent = styled.span`
    font-size: 12px;
    color: rgb(255, 66, 78);
    wwite-space: nowrap;
`;