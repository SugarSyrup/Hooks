import { useState } from "react";

const useInput = (
    defaultValue: string,
    validator: (value: string) => boolean
  ) => {
    const [value, setValue] = useState<string | null>(defaultValue);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value }
      } = event;
      if (validator(value)) {
        setValue(value);
      }
    };
    return { value, onChange };
  };

  export default useInput;