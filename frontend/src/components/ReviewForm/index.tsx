import "./styles.css";

const ReviewForm = () => {
  return (
    <>
      <div>
        <form className="form-container" action="">
          <input type="text" placeholder="Deixe sua avaliacao aqui" />
          <button>
            <h1>SALVAR AVALIAÇAO</h1>
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
