import React from 'react';
import { Col, Input, Badge } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperHeaderCart, WrapperHeaderRight, WrapperSearch, WrapperTextHeaderSmall} from './style';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

const { Search } = Input;

const HeaderComponent = () => {
  const onSearch = (value) => {
    console.log("Search:", value);
  };

  return (
    <WrapperHeader>
      <Col span={6}>
        <WrapperTextHeader>LAPTOP</WrapperTextHeader>
      </Col>
      <Col span={12}>
          <ButtonInputSearch
          size = "large"
          textButton = "Tìm kiếm"
          placeholder ="Search"
          onSearch={onSearch}  
          enterButton
          />
      </Col>
      <Col span={6}>
        <WrapperHeaderRight>
        <WrapperHeaderCart>
          <div>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: "23px", color: "#fff" }} />
            </Badge>
            <WrapperTextHeader style={{ fontSize: "13px" }}>Giỏ Hàng</WrapperTextHeader> 
          </div>
        </WrapperHeaderCart>


          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize: '20px'}} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
              <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
        </WrapperHeaderRight>
      </Col>
    </WrapperHeader>
  );
};

export default HeaderComponent;
