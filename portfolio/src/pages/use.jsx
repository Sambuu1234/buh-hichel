import { useRef } from "react";
export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to element</button>
      <div style={{ height: "155rem" }} />
      <div ref={ref}>Some content here</div>
      <div style={{ height: "155rem" }} />
    </div>
  );
}
