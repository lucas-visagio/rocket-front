import { CounterProps } from "../types/CounterInterface";

export const Counter = ({ count, setCount, title }: CounterProps) => {
  return (
    <div className="flex flex-col mb-5">
      <label>{title}</label>
      <button
        className="border border-black"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      {count}
      <button
        className="border border-black"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
