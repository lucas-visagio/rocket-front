import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "../components/Counter";
import { useHook } from "../hooks/useHooks";

const UserPage = () => {
  const { count, setCount, vini, setVini } = useHook();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("teste");
  }, []);

  return (
    <>
      <Counter title={"Contador 1"} count={count} setCount={setCount} />
      <Counter title={"Contador 2"} count={vini} setCount={setVini} />
      <button onClick={() => navigate("/products")}>
        Ir para pagina de produto
      </button>
    </>
  );
};

export default UserPage;
