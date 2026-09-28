import { ArrowRight, Bot, Briefcase, GraduationCap, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 Backlogrs Marketplace
          </span>

          <h1>
            Encontre o software certo
            <span> para sua necessidade.</span>
          </h1>

          <p>
            Descubra o saas, ferramentas inteligentes e soluções
            desenvolvidas para tornar seu trabalho mais simples e eficiente.
          </p>

          <div className="hero-actions">

            <Link to="/marketplace" className="primary-button">
              Explorar Marketplace
              <ArrowRight size={18} />
            </Link>

            <Link to="/register" className="secondary-button">
              Criar conta
            </Link>

          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-orb orb-three" />
        </div>

      </section>

      <section className="categories">

        <div className="section-heading">
          <div>
            <span>CATEGORIAS</span>
            <h2>Explore por categoria</h2>
          </div>
        </div>

        <div className="category-grid">

          <div className="category-card">
            <Bot size={28} />
            <h3>Inteligência Artificial</h3>
            <p>Agentes e automações inteligentes.</p>
          </div>

          <div className="category-card">
            <Briefcase size={28} />
            <h3>Negócios</h3>
            <p>Ferramentas para empresas e profissionais.</p>
          </div>

          <div className="category-card">
            <GraduationCap size={28} />
            <h3>Educação</h3>
            <p>Soluções para estudos e aprendizagem.</p>
          </div>

          <div className="category-card">
            <HeartPulse size={28} />
            <h3>Saúde & Bem-estar</h3>
            <p>Ferramentas para cuidar melhor de você.</p>
          </div>

        </div>

      </section>

      <section className="featured">

        <div className="section-heading">
          <div>
            <span>DESTAQUES</span>
            <h2>Software em destaque</h2>
          </div>

          <Link to="/marketplace">
            Ver todos
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="product-grid">

          <div className="product-card">
            <div className="product-icon">
              🤖
            </div>

            <span>IA & Automação</span>

            <h3>AI Customer Agent</h3>

            <p>
              Agente inteligente para atendimento automático.
            </p>

            <strong>
              US$ 9,90/mês
            </strong>
          </div>

          <div className="product-card">
            <div className="product-icon">
              📅
            </div>

            <span>Produtividade</span>

            <h3>Smart Scheduler</h3>

            <p>
              Automatize seus agendamentos e compromissos.
            </p>

            <strong>
              US$ 4,90/mês
            </strong>
          </div>

          <div className="product-card">
            <div className="product-icon">
              💰
            </div>

            <span>Finanças</span>

            <h3>Finance Manager</h3>

            <p>
              Organize suas finanças de forma simples.
            </p>

            <strong>
              US$ 6,90/mês
            </strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;