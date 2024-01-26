import { useEffect } from "react";
const Test = () => {
  useEffect(() => {
    document.title = "hihi";
  });
  return (
    <div>
      <button></button>
    </div>
  );
};
export default Test;
