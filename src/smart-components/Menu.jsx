import { useAtom } from "jotai";
import { menuToggle$ } from "../atomics/menuToggle";
import MenuView from "../view-components/MenuView";

const links = [
  { to: "/people", title: "People" },
  { to: "/ships", title: "Ships" },
  { to: "/todo", title: "Todo" },
  { to: '/people-and-ships', title: 'People and ships'}
];

export function Menu() {
  const [show, setShow] = useAtom(menuToggle$)
  return (
    <MenuView
      links={links}
      toggleMenu={() => setShow(!show)}
      show={show}
    />
  );
}
