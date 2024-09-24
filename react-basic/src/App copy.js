import { useState } from "react";

function useToogle() {
  const [value, setValue] = useState(true)
  const toggle = () => {
    setValue(!value)
  } 
  return {
    value, 
    toggle
  }
}

function Parent() {

  const [value, toggle] = useToogle()

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <Button onClick = {toggle}>toggle</Button>
    </div>
  );
}

export default Parent;
