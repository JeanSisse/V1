import styled, { ThemeProvider } from 'styled-components';
import About from '../../components/About';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Networks from '../../components/Networks';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import './styles.css';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Networks />
      <StyledMainContainer className='fillHeight' id='content'>
        <Hero />
        <About />
      </StyledMainContainer>
    </ThemeProvider>
  )
}