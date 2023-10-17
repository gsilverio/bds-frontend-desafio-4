import { useForm } from "react-hook-form";
import "./styles.css";
import { resquestBackend } from "../../util/requests";
import { AxiosRequestConfig } from "axios";
import { Reviews } from "../../types/reviews";
import { toast } from "react-toastify";
type Props = {
  movieId: string;
  onInsertReview: (review: Reviews) => void;
};

type FormData = {
  text: string;
  movieId: number;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data: formData,
      withCredentials: true,
    };

    resquestBackend(config)
      .then((response) => {
        setValue("text", "");
        onInsertReview(response.data);
        toast.info("Comentario salvo com sucesso");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <>
      <div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div-invalid invalid-feedback d-block">
            {errors.text?.message}
          </div>
          <input
            id="form-input"
            {...register("text", { required: "Campo Obrigatorio" })}
            placeholder="Deixe sua avaliacao aqui"
            name="text"
          />
          <button id="form-button">
            <h1>SALVAR AVALIAÇAO</h1>
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
