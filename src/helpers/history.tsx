import { useNavigate } from "react-router-dom";

export let navigate: any = {};

const RoutingHandler = () => {
  const _navigate = useNavigate();
  navigate = _navigate;
  return <></>;
};

export default RoutingHandler;
