import React from 'react';
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style'; 

const NavbarComponent = () => {

  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option, index) => (
          <WrapperTextValue key={index}>{option}</WrapperTextValue>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent('text', ['TV', 'Tu Lanh', 'May Giat'])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
