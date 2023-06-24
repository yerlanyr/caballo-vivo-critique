export default function PeopleList(props) {
  return (
    <div>
      <ul>
        {props.list.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
