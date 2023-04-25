import { useForm } from "react-hook-form";
import "./styles.css";
import {
  getAuthData,
  requestBackendLogin,
  saveAuthData,
} from "../../../util/requests";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log("TOKEN: " + token);
        console.log("SUCESSO", response);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <>
      <div className="base-card login-card">
        <div className="menu-login">
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-login">
            <input
              {...register("username")}
              className="input-login"
              type="email"
              placeholder="Email"
              name="username"
            />
            <input
              {...register("password")}
              className="input-login"
              type="password"
              placeholder="Senha"
              name="password"
            />
          </div>
          <div className="button-login">
            <button className="button-content">
              <h1>FAZER LOGIN</h1>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
