import { useStateContext } from "@zambezi/caballo-vivo";
import MenuView from "../view-components/MenuView";
import { menuToggle$ } from "../sync-state/intents/menuToggle$";

const links = [
  { to: "/people", title: "People" },
  { to: "/ships", title: "Ships" },
  { to: "/todo", title: "Todo" },
];

export function Menu() {
  const state = useStateContext();
  return (
    <MenuView
      links={links}
      toggleMenu={menuToggle$.next.bind(menuToggle$)}
      show={state.get("menuToggle", true)}
    />
  );
}
