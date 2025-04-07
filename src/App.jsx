import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <section style={{ padding: "4rem 2rem", textAlign: "center", backgroundColor: "#f3f4f6" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2563eb", marginBottom: "1rem" }}>
          Decisões seguras começam com informações confiáveis.
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#4b5563" }}>
          Soluções inteligentes em análise de crédito e relatórios jurídicos para proteger o seu negócio.
        </p>
        <a href="https://wa.me/5521994590797" target="_blank" rel="noopener noreferrer">
          <button style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer"
          }}>
            Fale com um especialista
          </button>
        </a>
      </section>

      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#111827", marginBottom: "2rem" }}>Nossos Serviços</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "300px", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", color: "#2563eb", marginBottom: "0.5rem" }}>Análise de Crédito</h3>
            <p style={{ color: "#374151" }}>Avaliação completa com score, inadimplência e comportamento de risco.</p>
          </div>
          <div style={{ maxWidth: "300px", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", color: "#2563eb", marginBottom: "0.5rem" }}>Consulta CND</h3>
            <p style={{ color: "#374151" }}>Verificação de débitos ativos junto à Receita Federal e órgãos públicos.</p>
          </div>
          <div style={{ maxWidth: "300px", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", color: "#2563eb", marginBottom: "0.5rem" }}>Relatórios Jurídicos</h3>
            <p style={{ color: "#374151" }}>Consultas detalhadas sobre processos cíveis, penais e trabalhistas.</p>
          </div>
        </div>
      </section>

      <section id="contato" style={{ padding: "3rem 2rem", textAlign: "center", backgroundColor: "#f9fafb" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#1f2937" }}>Entre em Contato</h2>
        <p style={{ color: "#4b5563" }}>
          Fale com nosso time e descubra como a BSX pode ajudar seu negócio.
        </p>
        <div style={{ marginTop: "1.5rem", fontSize: "1rem", color: "#111827" }}>
          <p>📞 WhatsApp: (21) 99459-0797</p>
          <p>📧 E-mail: administrativo@grupobsx.com.br</p>
          <p>🌐 Site: <a href="https://grupobsx.com.br" target="_blank" rel="noopener noreferrer">grupobsx.com.br</a></p>
        </div>
      </section>

      <footer style={{ backgroundColor: "#111827", color: "#f9fafb", padding: "2rem", textAlign: "center" }}>
        <p>© {new Date().getFullYear()} Grupo BSX. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
