import styled from "styled-components";

// Cấu trúc các sản phẩm trong một hàng
export const WrapperProducts = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`;

// Style cho Navbar ở bên trái
export const WrapperNavbar = styled.div`
    background: #fff;          
    margin-right: 10px;         
    padding: 10px;              
    border-radius: 6px;         
    height: fit-content;        
    margin-top: 20px;          
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

// Style cho Pagination ở dưới và căn giữa
export const WrapperPagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
