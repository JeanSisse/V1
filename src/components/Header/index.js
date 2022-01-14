import './style.css';
import './media.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 100%;
  height: var(--nav-height);
  padding: 0 50px;

  position: sticky;
  top: 0;
  z-index: 12;

  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  
  transition: var(--transition);

  .header__nav {
    width: 100%;
    font-family: var(--font-mono);
    /* transition: var(--transition); */
  }
  
  .link {
    color: var(--green);
    width: 45px;
    height: 45px;
  
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }
  
  .logo {
    -moz-box-pack: center;
    -moz-box-align: center;
  }
  
  .link svg {
    user-select: none;
    fill: none;
  }
  
  .link svg {
    width: 100%;
    height: 100%;
  }
  
  #logo {
    color: var(--green);
  }
  
  .aside__style {
    min-height: 55vh;
    width: min(75vw, 400px);
    background-color: var(--lightest-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    padding: 65px 20px;
  }
  
  .navi__options ul li:last-of-type {
    margin-top: 25px;
  }
  
  .header__options ul,
  .navi__options ul {
    list-style: none;
    font-size: var(--fz-xs);
    padding: 0;
    margin: 0;
  }
  
  .header__options ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .header__options--li a {
    padding: 10px;
    color: var(--lightest-slate);
  }
  
  .header__options--li a,
  .header__options--resume a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
  
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    transition: var(--transition);
  }
  
  .header__options ul li,
  .navi__options ul li {
    margin: 0px 5px;
    position: relative;
    counter-increment: item 1;
    font-size: var(--fz-xs);
    cursor: pointer;
  }
  
  .header__options ul li:last-of-type {
    margin-right: 0;
  }
  
  .header__options--li a::before {
    color: var(--green);
    content: "0" counter(item) ".";
    margin-right: 5px;
    font-size: var(--fz-xxs);
    text-align: right;
  }
  
  .header__options--li:hover {
    color: var(--green);
  }
  
  .header__options--resume a {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    /* -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    transition: var(--transition); */
  
    margin-left: 15px;
    font-size: var(--fz-xs);
    padding: 1.2rem 1.6rem;
  }
  
  .header__options--resume a:hover,
  .header__options--resume a:focus,
  .header__options--resume a:active {
    background-color: var(--green-tint);
  }
  
  .logo .link:hover svg,
  .logo .link:focus svg,
  .logo .link:active svg {
    fill: var(--green-tint);
  }
  
  .underlined {
    background: linear-gradient(currentColor 0 0) left var(--p, 50%) bottom 0 /
        var(--d, 0) 3px no-repeat,
      linear-gradient(currentColor 0 0) right var(--p, 50%) bottom 0 / var(--d, 0)
        3px no-repeat;
    transition: 0.3s, background-position 0.3s 0.3s;
  }
  
  .underlined:hover {
    --d: 50%;
    --p: 50.1%;
    transition: cubic-bezier(0, 500, 1, 500) 0.3s, background-size 0.3s 0.3s;
  }
  
  .header__hamburgerButton,
  .header__closeMenuDropDown {
    display: none;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    padding: 15px;
    position: relative;
    border: 0px none;
    color: inherit;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    margin-right: -15px;
    z-index: 10;
    background-color: transparent;
    text-transform: none;
  }
  
  .header__hamburgerButton .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }
  
  .header__hamburgerButton .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0px;
    width: var(--hamburger-width);
    transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
    transform: rotate(0deg);
    background-color: var(--green);
    height: 2px;
    border-radius: var(--border-radius);
  }
  
  .header__hamburgerButton .ham-box-inner::before,
  .header__hamburgerButton .ham-box-inner::after {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    background-color: var(--green);
  }
  
  .header__hamburgerButton .ham-box-inner::before {
    width: 120%;
    opacity: 1;
    transition: var(--ham-before);
    top: -10px;
  }
  
  .header__hamburgerButton .ham-box-inner::after {
    transform: rotate(0deg);
    transition: var(--ham-after);
    bottom: -10px;
    width: 80%;
  }
  
  .header__closeMenuDropDown .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }
  
  .header__closeMenuDropDown .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0px;
    width: var(--hamburger-width);
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition: transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    transform: rotate(225deg);
    height: 2px;
  }
  
  .header__closeMenuDropDown .ham-box-inner::before,
  .header__closeMenuDropDown .ham-box-inner::after {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    background-color: var(--green);
  }
  
  .header__closeMenuDropDown .ham-box-inner::before {
    top: 0px;
    opacity: 0;
    transition: var(--ham-before-active);
    width: 100%;
  }
  
  .header__closeMenuDropDown .ham-box-inner::after {
    width: 100%;
    bottom: 0px;
    transition: var(--ham-after-active);
    transform: rotate(-90deg);
  }
`;

const OptionsList = () => {
  return(
    <ul>
      <li className='underlined header__options--li' style={{transitionDelay: '0ms'}}>
        <a href='#sobre'>Sobre</a>
      </li>
      <li className='underlined header__options--li' style={{transitionDelay: '100ms'}}>
        <a href='#habilidades'>Habilidades</a>
      </li>
      <li className='underlined header__options--li' style={{transitionDelay: '200ms'}}>
        <a href="#trabalhos">Trabalhos</a>
      </li>
      <li className='underlined header__options--li' style={{transitionDelay: '300ms'}}>
        <a href='#contatos'>Contato</a>
      </li>
      <li className='header__options--resume' style={{transitionDelay: '400ms'}}>
        <a href='#contato' >Resumo</a>
      </li>
    </ul>
  );
}

export default function Header () {
  const [closeIcon, setCloseIcon] = useState(false);
  const [displayAsideMenu, setDisplayAsideMenu] = useState(false);
  const [enableAsideMenu, setEnableAsideMenu] = useState(window.innerWidth <= 762);

  const body = document.body;
  
  const handleSetCloseIcon = () => {
    body.classList.toggle('blur');
    setCloseIcon(!closeIcon);
    setDisplayAsideMenu(!displayAsideMenu);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      const currentScreenSize = window.innerWidth > 762;
      
      if(currentScreenSize) {
        body.classList.remove('blur');
        setDisplayAsideMenu(false);
        setCloseIcon(false);
        setEnableAsideMenu(false);
      } else {
        setEnableAsideMenu(true);
      }
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHeader className='header display-flex-row justify-content-between'>
      <nav className='header__nav display-flex-row justify-content-between'>
        <div className="logo display-flex-row justify-content-center">
          <Link className='link' to={'/'} tabIndex={-1}>
            <svg id="logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 84 96"
            >
              <title>Logo</title>
              <g id="svgGroup" transform="translate(1.000000, 2.000000)">
                <polygon
                  id="Shape"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                ></polygon>
                <path d="
                  M 26 35.4 L 26 0.5 A 61.281 61.281 0 0 1 28.181 0.281 A 75.39 75.39 0 0 1 30.525 0.125 A 94.906 94.906 0 0 1 33.989 0.012 A 111.165 111.165 0 0 1 35.65 0 A 22.629 22.629 0 0 1 38.634 0.188 A 16.804 16.804 0 0 1 41.45 0.8 Q 44 1.6 45.75 3 Q 47.5 4.4 48.4 6.375 A 10.147 10.147 0 0 1 49.299 10.489 A 11.669 11.669 0 0 1 49.3 10.65 A 12.443 12.443 0 0 1 49.014 13.371 A 9.985 9.985 0 0 1 48.225 15.625 Q 47.15 17.8 45.225 19.3 A 12.537 12.537 0 0 1 42.365 20.957 A 15.741 15.741 0 0 1 40.6 21.575 A 19.82 19.82 0 0 1 37.01 22.241 A 24.832 24.832 0 0 1 34.65 22.35 A 52.011 52.011 0 0 1 32.382 22.303 A 41.465 41.465 0 0 1 30.75 22.2 L 30.75 35.4 L 26 35.4 Z M 12.75 24.35 L 12.75 0.4 L 17.5 0.4 L 17.5 23.85 A 24.6 24.6 0 0 1 17.384 26.302 Q 17.216 27.984 16.8 29.35 Q 16.1 31.65 14.8 33.125 Q 13.5 34.6 11.7 35.3 Q 9.9 36 7.7 36 A 11.721 11.721 0 0 1 3.661 35.309 A 11.202 11.202 0 0 1 3.375 35.2 A 11.414 11.414 0 0 1 1.414 34.209 A 9.092 9.092 0 0 1 0 33.1 L 2.3 29.45 A 8.429 8.429 0 0 0 4.335 31.008 A 9.715 9.715 0 0 0 4.7 31.2 A 6.557 6.557 0 0 0 6.637 31.83 A 5.971 5.971 0 0 0 7.55 31.9 A 5.462 5.462 0 0 0 9.272 31.641 A 4.467 4.467 0 0 0 11.35 30.2 A 4.814 4.814 0 0 0 12.118 28.821 Q 12.635 27.443 12.729 25.324 A 22.055 22.055 0 0 0 12.75 24.35 Z M 30.75 4.2 L 30.75 18.15 A 24.73 24.73 0 0 0 31.396 18.222 Q 31.972 18.278 32.675 18.325 A 31.558 31.558 0 0 0 33.722 18.376 Q 34.256 18.394 34.849 18.399 A 53.454 53.454 0 0 0 35.25 18.4 A 16.525 16.525 0 0 0 37.86 18.207 Q 39.267 17.982 40.397 17.493 A 7.536 7.536 0 0 0 42.175 16.425 A 6.425 6.425 0 0 0 44.575 11.726 A 8.959 8.959 0 0 0 44.6 11.05 A 7.31 7.31 0 0 0 44.231 8.675 A 6.065 6.065 0 0 0 42.275 5.9 Q 40.454 4.412 37.359 4.089 A 17.476 17.476 0 0 0 35.55 4 A 65.563 65.563 0 0 0 33.921 4.02 A 54.969 54.969 0 0 0 33 4.05 A 45.637 45.637 0 0 0 31.559 4.132 A 37.52 37.52 0 0 0 30.75 4.2 Z"
                  fill="currentColor"
                  transform="translate(14.000000, 26.000000)"
                />
              </g>
            </svg>
          </Link>
        </div>

        <div className="header__options">
          <OptionsList />
        </div>

        {enableAsideMenu && 
          <div>
            <button
              className={closeIcon ? 'header__closeMenuDropDown' : 'header__hamburgerButton'}
              aria-label='Menu'
              onClick={handleSetCloseIcon}
            >
              <div className="ham-box">
                <div className="ham-box-inner">
                </div>
              </div>
            </button>
            {
              displayAsideMenu && 
              <aside className='aside__style display-flex-column  justify-content-center'>
                <nav className='navi__options display-flex-column  justify-content-center'>
                  <OptionsList />
                </nav>
              </aside>
            }
          </div>
        }
      </nav>
    </StyledHeader>
  );
}