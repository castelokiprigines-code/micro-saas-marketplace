import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Simulação de cadastro para o MVP
    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <Link to="/" className="auth-logo">
            MicroSaaS
          </Link>

          <h1>Criar sua conta</h1>

          <p>
            Comece a explorar nossas soluções.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="form-group">
            <label htmlFor="name">
              Nome completo
            </label>

            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Senha
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Criar conta
          </button>

        </form>

        <div className="auth-footer">
          Já possui uma conta?{" "}
          <Link to="/login">
            Entrar
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;