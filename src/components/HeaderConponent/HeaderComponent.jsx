import React from 'react';
import { Col, Input } from 'antd';
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
            <ShoppingCartOutlined />
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
