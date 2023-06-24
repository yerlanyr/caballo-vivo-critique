import { from } from "rxjs";

export default ({ id, title, crossedOut }) =>
  from(
    fetch(`example.com/todo/${id}`, {
      method: "PUT",
      data: FormData({
        id,
        title,
        crossedOut,
      }),
    })
  );
