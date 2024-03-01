import { useContext } from "react";
import { FirstContext } from "./context";
export const Component = () => {
  const value = useContext(FirstContext);
  console.log(value, "===", secondvalue);
  return (
    <div>
      <p>hello</p>
    </div>
  );
};
