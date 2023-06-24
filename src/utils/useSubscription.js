import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
/**
 * Takes observable and initialValue
 * When Initial value is skipped and observable is behavior subject then it will take current value as default
 * @param {*} obs$ 
 * @param {*} initialValue 
 * @returns 
 */
export function useSubscription(obs$, initialValue) {
  let defaultValue = initialValue
  if(initialValue === undefined && obs$ instanceof BehaviorSubject) {
    defaultValue = obs$.value;
  }
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const subscription = obs$.subscribe((value) => {
      setValue(value);
    });
    return () => subscription.unsubscribe();
  }, []);

  return value;
}
