import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionComponent } from "preact/src/index.d.ts";
import Form from "../components/Form.tsx";

const styles = ["light-blue", "white", "orange", "light-brown"];

type Data = {
  username: string
}


const ChangeColor: FunctionComponent<Data> = (props) => {
  const [currentStyle, setCurrentStyle] = useState<string>(styles[0])
  const iter = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      iter.current = (iter.current + 1) % styles.length;
      setCurrentStyle(styles[iter.current])
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class={`fullscreen ${currentStyle}`} style={{ transition: 'all 0.5s ease' }}>
      <div class="container">{!props.username ? <Form/> : <h1>Hola, {props.username}</h1>}</div>
    </div>
  );
};

export default ChangeColor;
