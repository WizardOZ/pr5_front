import { FunctionalComponent } from "preact";

const Form: FunctionalComponent = () => {
  return (
    <form action="/profile" method="POST" className="form">
      <div className="form-group">
        <label htmlFor="name">Telefono</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Tu telefono"
          required
          className="input"
        />
      </div>
      <button type="submit" className="button">
        Enviar
      </button>
    </form>
  );
};

export default Form;
