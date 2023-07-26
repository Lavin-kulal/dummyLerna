# updapt_input_component_testing

**A reusable input component for your JavaScript/Typescript React applications.**

## Installation

You can install the component using npm :

```bash
npm install updapt_input_component_testing
```

## Usage

To use the updapt_input_component_testing component in your application, import it and include it in your JSX code:

````tsx

import React, { useState } from "react";
import { UpdaptInput } from "updapt_input_component_testing";

const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    ...arg: any
  ) => {
    const [arg1, arg2, arg3] = arg;
    console.log(arg1, arg2, arg3);
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h2>My Form</h2>
      <UpdaptInput
        value={inputValue}
        InputOnChange={(event) => handleInputChange(event, "arg1", 123, false)}
        placeholder="Enter your name"
      />
      <p>Hello, {inputValue}!</p>
    </div>
  );
}```

##More example:
```tsx
import * as React from 'react';
import './style.css';
import { UpdaptInput } from 'updapt_input_component_testing';
export default function App() {
  const [inputVal, setInputVal] = React.useState('');
  const [error, setError] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const handleChange = (e) => {
    setInputVal(e.target.value);
    setError('');
  };

  const validation = () => {
    if (!inputVal) {
      setError('please fill the empty fields');
      setIsError(true);
    } else {
      setError('');
      setIsError(false);
    }
  };

  return (
    <div>
      <UpdaptInput
        placeholder="write a text"
        InputOnChange={(e) => handleChange(e)}
        isError={isError}
        errorMessage={error}
      />
      <p>inputVal- {inputVal}</p>
      <button onClick={() => validation()}>Save</button>
    </div>
  );
}
```

## PROPS

The  ```updapt_input_component_testing``` component accepts the following props:
````

| Prop            | Type     | Description                                                    |
| --------------- | -------- | -------------------------------------------------------------- |
| `placeholder`   | string   | Placeholder text for the input field.                          |
| `value`         | any      | The value of the input field.                                  |
| `InputOnChange` | function | Callback function to be executed when the input value changes. |
| `inputDisabled` | boolean  | Determines whether the input is disabled or not.               |

```


## Contributing
Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.

Before contributing, please read our contributing guidelines.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

MIT &copy; [Anton Kudryavtsev](https://github.com/Lavin-kulal)

Feel free to customize the content according to your project's requirements and specifications.



```
