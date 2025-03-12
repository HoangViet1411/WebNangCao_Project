import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperDiscountPercent, WrapperDiscountText, WrapperPricetext, WrapperReporText } from './style'
import { StarFilled } from '@ant-design/icons'
import Zenbook from '../../assets/images/Zenbook.png'

const CardComponent = () => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}
            cover={(<img alt="Asus Zenbook" src={Zenbook}/>)}
        >
            <StyleNameProduct>Laptop</StyleNameProduct>
            <span>
                <WrapperReporText>4.8 <StarFilled style={{fontsize: '10px', color: 'yellow'}} /></WrapperReporText>
            </span>
            <WrapperPricetext>
                15.000.000đ 
                <WrapperDiscountPercent> -25%</WrapperDiscountPercent>
            </WrapperPricetext>
            <WrapperDiscountText>
                20.000.000đ
            </WrapperDiscountText>

            
        </Card>
    )
}

export default CardComponent