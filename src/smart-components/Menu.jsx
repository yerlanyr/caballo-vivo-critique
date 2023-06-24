import MenuView from "../view-components/MenuView";
import { menuToggle$ } from "../atomics/menuToggle";
import { useSubscription } from "../utils/useSubscription";

const links = [
  { to: "/people", title: "People" },
  { to: "/ships", title: "Ships" },
  { to: "/todo", title: "Todo" },
];

export function Menu() {
  const show = useSubscription(menuToggle$)
  return (
    <MenuView
      links={links}
      toggleMenu={() => menuToggle$.next(!show)}
      show={show}
    />
  );
}
