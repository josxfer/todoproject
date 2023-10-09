import { Container } from "../ui";

function Footer() {
  return (
    <nav className="bg-purple-900 fixed bottom-0 inset-x-0">
      <Container className="flex justify-between py-3">
        <h1 className="flex font-light text-slate-300">Proyecto final para Dev.F</h1>
        <ul className="flex items-center justify-center md:gap-x-1 font-light text-slate-300">
          <li>Presentado por Jose Fernando Espinosa</li>
          <li className="flex gap-x-1 items-center justify-center font-light text-slate-300"> - 2023</li>
        </ul>
      </Container>
    </nav>
  );
}

export default Footer;
