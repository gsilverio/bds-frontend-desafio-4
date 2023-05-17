import { useForm } from "react-hook-form";
import "./styles.css";
import {
  getAuthData,
  getTokenData,
  requestBackendLogin,
  saveAuthData,
} from "../../../util/requests";
import { myHistory } from "../../../util/history";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        myHistory.push("/movies");
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
          <div className="invalid-div invalid-feedback d-block">
            {errors.username?.message}
          </div>
          <div className="inputs-login">
            <input
              {...register("username", {
                required: "Campo Obrigatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email invalido",
                },
              })}
              className="input-login"
              type="email"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="inputs-login">
            <div className="invalid-div invalid-feedback d-block">
              {errors.password?.message}
            </div>
            <input
              {...register("password", {
                required: "Campo Obrigatorio",
              })}
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
