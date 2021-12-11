import './style.css';

export default function Header () {
  return (
    <div className='header display-flex-row '>
      <img src="./assets/logo-dark.svg" alt="Logo" />
      <ul className='header__options display-flex-row font-nunito'>
        <li className='header__options--li'>Home</li>
        <li className='header__options--li'>Portfolio</li>
        <li className='header__options--li'>Contato</li>
      </ul>
    </div>
  );
}