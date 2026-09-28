import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "AI Customer Agent",
    category: "IA & Automação",
    description:
      "Agente inteligente para automatizar o atendimento dos seus clientes.",
    longDescription:
      "O AI Customer Agent ajuda empresas a automatizar o atendimento, responder perguntas frequentes e direcionar solicitações de clientes de forma inteligente.",
    price: "US$ 9,90/mês",
    features: [
      "Atendimento automático",
      "Respostas inteligentes",
      "Disponibilidade 24/7",
      "Histórico de conversas",
      "Configuração personalizada",
    ],
  },
  {
    id: "2",
    name: "Smart Scheduler",
    category: "Produtividade",
    description:
      "Automatize seus agendamentos e compromissos.",
    longDescription:
      "O Smart Scheduler centraliza seus agendamentos e ajuda seus clientes a encontrar horários disponíveis.",
    price: "US$ 4,90/mês",
    features: [
      "Agendamento online",
      "Gestão de horários",
      "Notificações",
      "Calendário inteligente",
      "Controle de disponibilidade",
    ],
  },
  {
    id: "3",
    name: "Finance Manager",
    category: "Finanças",
    description:
      "Organize receitas, despesas e sua vida financeira.",
    longDescription:
      "O Finance Manager ajuda você a acompanhar receitas, despesas e organização financeira em um único lugar.",
    price: "US$ 6,90/mês",
    features: [
      "Controle de receitas",
      "Controle de despesas",
      "Categorias financeiras",
      "Resumo mensal",
      "Dashboard financeiro",
    ],
  },
];

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Produto não encontrado</h1>

        <p>
          O Micro SaaS que você procura não existe.
        </p>

        <Link to="/marketplace">
          Voltar para o Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="product-page">

      <Link
        to="/marketplace"
        className="product-back"
      >
        <ArrowLeft size={18} />
        Voltar para Marketplace
      </Link>

      <section className="product-hero">

        <div className="product-main">

          <span className="section-label">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-description">
            {product.longDescription}
          </p>

          <div className="product-benefits">

            <div>
              <Zap size={20} />
              <span>Automação inteligente</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Plataforma segura</span>
            </div>

          </div>

        </div>

        <div className="product-purchase">

          <div className="purchase-label">
            Plano mensal
          </div>

          <div className="product-price">
            {product.price}
          </div>

          <p>
            Cancele quando quiser.
          </p>

          <button className="purchase-button">
            Começar agora
          </button>

          <small>
            Pagamento seguro
          </small>

        </div>

      </section>

      <section className="product-details">

        <div className="product-features">

          <span className="section-label">
            RECURSOS
          </span>

          <h2>
            O que você terá
          </h2>

          <div className="features-list">

            {product.features.map((feature) => (
              <div
                className="feature-item"
                key={feature}
              >
                <Check size={18} />
                <span>{feature}</span>
              </div>
            ))}

          </div>

        </div>

        <div className="product-info">

          <h3>
            Sobre esta solução
          </h3>

          <p>
            {product.description}
          </p>

          <p>
            Desenvolvido para facilitar processos,
            reduzir tarefas manuais e aumentar a
            produtividade.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Product;