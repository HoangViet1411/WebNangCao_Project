import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const HomePage = () => {
    const arr = ['Asus', 'Acer', 'HP']

    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => (
                        <TypeProduct name={item} key={item} />
                    ))}
                </WrapperTypeProduct>
            </div>

            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px', width: '100%' }}>
                <SliderComponent arrImages={[slider1, slider2]} />
                <div 
                    style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'flex-start', 
                    gap: '10px', 
                    marginTop: '20px',
                    }}
            >
                    {[...Array(8)].map((_, index) => (
                        <CardComponent key={index} style={{ width: 'calc(100% / 6 - 10px)' }} />
                     ))}
                </div>


                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <ButtonComponent 
                    textButton="Xem thêm >" 
                    type="outline"
                    style={{color: '#808080'}} 
                    />
                </div>
                <NavBarComponent/>
            </div>
        </>
    )
}

export default HomePage;