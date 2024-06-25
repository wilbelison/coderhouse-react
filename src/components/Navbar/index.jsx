import logo from "../../assets/images/logo.svg";
import CartWidget from "../CartWidget";

const links = [
  { value: "Ação e Aventura", href: "#acao-aventura" },
  { value: "Luta e Esportes", href: "#luta-esportes" },
  { value: "Plataforma", href: "#plataforma" },
  { value: "Puzzle e Casual", href: "#puzzle-casual" },
  { value: "RPG e Estratégia", href: "#rpg-estrategia" },
  { value: "Mais Gêneros", href: "#mais-generos" },
];

const menu = links.map((item) => (
  <li>
    <a href={item.href} title={item.value}>
      {item.value}
    </a>
  </li>
));

function NavBar() {
  return (
    <nav className="NavBar">
      <a href="/" className="logo" title="Ir para a home da Gameflix Store">
        <img src={logo} alt="Gameflix" /> Store
      </a>
      <ul className="menu">{menu}</ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
