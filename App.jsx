import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "2rem", color: "#2563eb" }}>Grupo BSX</h1>
      <p style={{ marginBottom: "2rem", color: "#4b5563" }}>
        Decisões seguras começam com informações confiáveis.
      </p>
      <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    if (typeof gtag !== "undefined") {
      gtag('event', 'conversion', {
        send_to: 'AW-345473416/mcXKCKOF2rYaEIiD3qQB'
      });
      console.log('✅ Conversão enviada!');
    } else {
      console.warn('⚠️ gtag não está definido.');
    }
    setTimeout(() => {
      window.open("https://wa.me/5521994590797", "_blank");
    }, 600);
  }}
>
  <button
    style={{
      marginTop: "2rem",
      padding: "1rem 2rem",
      fontSize: "1rem",
      backgroundColor: "#22c55e",
      color: "#fff",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer"
    }}
  >
    Fale com um especialista
  </button>
</a>
    </div>
  );
}
