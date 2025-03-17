import { Col, Pagination, Row } from 'antd';
import { WrapperNavbar, WrapperProducts, WrapperPagination } from './style';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';

const TypeProductPage = () => {
    const onChange = () => {};

    return (
        <div style={{ padding: '0 120px', background: '#fefefe' }}>
            <Row gutter={16} style={{ paddingTop: '10px' }}>
                {/* Cột cho NavBar */}
                <Col span={4}>
                    <WrapperNavbar>
                        <NavBarComponent />
                    </WrapperNavbar>
                </Col>

                {/* Cột cho các sản phẩm và Pagination */}
                <Col span={20}>
                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>

                    {/* Căn giữa Pagination */}
                    <WrapperPagination>
                        <Pagination
                            defaultCurrent={2}
                            total={100}
                            onChange={onChange}
                        />
                    </WrapperPagination>
                </Col>
            </Row>
        </div>
    );
};

export default TypeProductPage;
