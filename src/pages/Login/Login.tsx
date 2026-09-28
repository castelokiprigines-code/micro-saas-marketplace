import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Simulação de autenticação para o MVP
    navigate("/");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <Link to="/" className="auth-logo">
            Backlogrs
          </Link>

          <h1>Bem-vindo de volta</h1>

          <p>
            Entre na sua conta para continuar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">

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
            Entrar
          </button>

        </form>

        <div className="auth-footer">
          Ainda não possui uma conta?{" "}
          <Link to="/register">
            Criar conta
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;