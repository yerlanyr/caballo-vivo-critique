import { cook } from "@zambezi/caballo-vivo";
import { map, merge } from "rxjs";
import { addTodo$ } from '../intents/addTodo$';
import { toggleTodo$ } from '../intents/toggleTodo$';

export default merge(
  addTodo$.pipe(map((state) => state)),
  toggleTodo$.pipe(
    cook((state, index) =>
      state.update("todo", (todos) =>
        todos.map((todoItem, idx) => {
          if (idx === index) {
            return { ...todoItem, crossedOut: !todoItem.crossedOut };
          }

          return todoItem;
        })
      )
    )
  )
)

