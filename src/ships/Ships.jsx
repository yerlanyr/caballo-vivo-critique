import { useStateContext } from "@zambezi/caballo-vivo";

export default function Ships() {
  const state = useStateContext();
  return (
    <div>
      <ul>
        {state.get("ships").results.map((ship, i) => (
          <li key={i}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
}
