import { useStateContext } from "@zambezi/caballo-vivo";

export default function People() {
  const state = useStateContext();
  return (
    <div>
      <ul>
        {state.get("people").results.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
