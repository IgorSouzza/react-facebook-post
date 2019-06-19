import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 35px 20px;
  display: flex;
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  display: inline-block;
  border-radius: 50%;
`;

export const Name = styled.div`
  h1 {
    color: #4267B2;
    font-size: 20px;
    font-weight: 100;
    padding-left: 15px;
  }

  span {
    color: #C6C6C6;
    font-size: 12px;
    font-weight: 100;
    padding-left: 15px;
  }
`;
