import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperDiscountPercent, WrapperDiscountText, WrapperPricetext, WrapperReporText, WrapperCardStyle } from './style'
import { StarFilled } from '@ant-design/icons'
import Zenbook from '../../assets/images/Zenbook.png'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
        >
            <img alt="Asus Zenbook" src={Zenbook} style={{ width: '100%', height: 'auto' }} />
            <StyleNameProduct>Asus Zenbook</StyleNameProduct>
            <span style={{ marginLeft: '4px' }}>
                <WrapperReporText style={{ marginRight: '4px' }}>
                    4.8 <StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </WrapperReporText>
            </span>
            <WrapperPricetext>
                15.000.000đ
                <WrapperDiscountPercent> -25%</WrapperDiscountPercent>
            </WrapperPricetext>
            <WrapperDiscountText>
                20.000.000đ
            </WrapperDiscountText>
        </WrapperCardStyle>
    )
}

export default CardComponent
