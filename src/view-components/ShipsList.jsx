export default function ShipsView(props) {
  return (
    <div>
      <ul>
        {props.list.map((ship, i) => (
          <li key={i}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
}
