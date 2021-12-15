import './styles.css';

export default function CardMessage({ children }) {
  return (
    <div className="card-message font-nunito">
      {children}
    </div>
  );
}