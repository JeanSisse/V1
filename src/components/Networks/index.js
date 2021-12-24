import './styles.css';
// import { Link } from 'react-router-dom';

export default function Networks() {
  return(
    <div className='networks'>
      <ul className='networks__list'>
        <li>
          <a href="mailto:jean.pierre.sisse@gmail.com" aria-label='E-mail' rel="noreferrer">
            
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 63 63"
              aria-labelledby="E-mail"
              role="img"
            >
              <title>Enviar E-mail</title>
              <path data-name="layer2"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="4" d="M62 16H23.6L16 48h38.4L62 16z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
              <path data-name="layer2"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="4" d="M23.6 16l14.9 22L62 16M16 48l19.2-14.8M54.4 48L42.9 33.8"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
              <path data-name="layer1"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="4" d="M2 24h11.9M2 32h10M2 40h8"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a target={'_blank'} href='https://github.com/JeanSisse' aria-label='GitHub' rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/bchiang7' aria-label='Instagram' target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round" className='feather feather-instagram'
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/jeanpierresisse' aria-label="Linkedin" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </li>
        <li>
        <a href="https://codepen.io/bchiang7" aria-label="Codepen" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-codepen"
          >
            <title>CodePen</title>
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <line x1="12" y1="22" x2="12" y2="15.5"></line>
            <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
            <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
            <line x1="12" y1="2" x2="12" y2="8.5"></line>
          </svg>
        </a>
        </li>
      </ul>
    </div>
  );
}