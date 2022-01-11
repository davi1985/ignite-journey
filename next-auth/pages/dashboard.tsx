import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { api } from "../services/api";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

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
