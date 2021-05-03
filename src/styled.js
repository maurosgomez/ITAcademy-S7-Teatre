import styled, { createGlobalStyle } from 'styled-components';
import imagen from '../src/love.jpg'

export const GlobalStyle = createGlobalStyle`
	body {
    height: 100%;
    background-image: url(${imagen});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
	}
`;

export const Title = styled.h1`
  font-size: 5em;
  padding-top: 1.5rem;
  font-family: 'Dancing Script';
  text-align: center;
  color: #060606;
`;

export const Wrapper = styled.section`
  padding-bottom: 2rem;
  text-align: center;
  font-size: 1.5em;
  font-family: 'Dancing Script';
  font-weight: 600;
  color: #222222;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #FF3232;
  color: #FFFFFF;
  font-size: 1.3em;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  margin: 1.5em;
  cursor: pointer;
`;