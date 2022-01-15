import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 100%;
  height: var(--nav-height);
  padding: 0 50px;

  ${({ theme }) => theme.mixs.flexCenter}

  position: sticky;
  top: 0;
  z-index: 12;

  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 762px) {
    padding: 0 25px;
  }

  .header__nav {
    width: 100%;
    font-family: var(--font-mono);
    ${({ theme }) => theme.mixs.flexBetween}
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
    ${({ theme }) => theme.mixs.flexCenter}
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

  .header__options {
    @media (max-width: 762px) {
      display: none;
    }
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

    @media (max-width: 762px) {
      padding: 1.5rem 3rem;
    }
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
    justify-content: center;
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

    @media (max-width: 762px) {
      display: flex;
    }
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

export default StyledHeader;
