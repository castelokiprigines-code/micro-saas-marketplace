import {
  Search,
  Bot,
  CalendarDays,
  Wallet,
  Plane,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "AI Customer Agent",
    category: "IA & Automação",
    description: "Agente inteligente para atendimento automático de clientes.",
    price: "US$ 9,90/mês",
    icon: Bot,
  },
  {
    id: 2,
    name: "Smart Scheduler",
    category: "Produtividade",
    description: "Automatize seus agendamentos e compromissos.",
    price: "US$ 4,90/mês",
    icon: CalendarDays,
  },
  {
    id: 3,
    name: "Finance Manager",
    category: "Finanças",
    description: "Organize receitas, despesas e sua vida financeira.",
    price: "US$ 6,90/mês",
    icon: Wallet,
  },
  {
    id: 4,
    name: "Travel Planner AI",
    category: "Viagens",
    description: "Planeje viagens, roteiros e atividades com IA.",
    price: "US$ 7,90/mês",
    icon: Plane,
  },
  {
    id: 5,
    name: "Recruiter AI",
    category: "Negócios",
    description: "Automatize processos de recrutamento e seleção.",
    price: "US$ 12,90/mês",
    icon: Users,
  },
  {
    id: 6,
    name: "WhatsApp Assistant",
    category: "Comunicação",
    description: "Assistente inteligente para atendimento via WhatsApp.",
    price: "US$ 8,90/mês",
    icon: MessageCircle,
  },
];

function Marketplace() {
  return (
    <div className="marketplace">

      <div className="marketplace-header">
        <div>
          <span className="section-label">MARKETPLACE</span>

          <h1>Encontre seu próximo Software </h1>

          <p>
            Explore ferramentas inteligentes para automatizar,
            organizar e melhorar seus processos.
          </p>
        </div>
      </div>

      <div className="marketplace-toolbar">

        <div className="marketplace-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Buscar Micro SaaS..."
          />
        </div>

        <div className="marketplace-categories">
          <button className="category-filter active">
            Todos
          </button>

          <button className="category-filter">
            IA & Automação
          </button>

          <button className="category-filter">
            Negócios
          </button>

          <button className="category-filter">
            Finanças
          </button>

          <button className="category-filter">
            Produtividade
          </button>
        </div>

      </div>

      <div className="marketplace-results">

        <div className="results-header">
          <span>
            {products.length} soluções disponíveis
          </span>
        </div>

        <div className="marketplace-grid">

          {products.map((product) => {

            const Icon = product.icon;

            return (
              <div
                className="marketplace-card"
                key={product.id}
              >

                <div className="marketplace-card-top">

                  <div className="marketplace-icon">
                    <Icon size={25} />
                  </div>

                  <span className="product-category">
                    {product.category}
                  </span>

                </div>

                <h2>{product.name}</h2>

                <p>
                  {product.description}
                </p>

                <div className="marketplace-card-footer">

                  <strong>
                    {product.price}
                  </strong>

                  <Link
                    to={`/product/${product.id}`}
                    className="product-link"
                  >
                    Ver detalhes
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Marketplace;