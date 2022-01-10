import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Dashboard</h1>

      <p>
        <strong>E-mail: </strong>
        {user?.email}
      </p>
      <p>
        <strong>Cargo: </strong>
        {user?.roles[0]}
      </p>
    </>
  );
};

export default Dashboard;
