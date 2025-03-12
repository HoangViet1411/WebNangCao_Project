import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton,
        bordered = true, backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props;

    return (
        <div style={{ 
            display: 'flex', 
            borderRadius: '8px', 
            overflow: 'hidden',
            border: bordered ? '1px solid #d9d9d9' : 'none'
        }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={false} 
                style={{ 
                    backgroundColor: backgroundColorInput, 
                    flex: 1, 
                    borderRadius: '8px 0 0 8px', 
                    padding: '8px 12px'
                }}
            />
            <ButtonComponent
                size={size}
                styleButton={{ 
                    background: backgroundColorButton, 
                    border: 'none',
                    borderRadius: '0 8px 8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 16px'
                }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    );
};

export default ButtonInputSearch;
