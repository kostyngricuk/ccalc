import './Copyright.scss';

export default function Copyright() {
  return (
    <p className="Copyright">
        Kanstantsin Hrytsuk © {new Date().getFullYear()}
    </p>
  );
}