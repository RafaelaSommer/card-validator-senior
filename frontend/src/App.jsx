import { useState } from "react";

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");

  function formatCard(value) {
    const cleaned = value
      .replace(/\D/g, "")
      .slice(0, 16);

    return cleaned.replace(
      /(\d{4})(?=\d)/g,
      "$1 "
    );
  }

  function formatExpiry(value) {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.length <= 2) {
      return cleaned;
    }

    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  }

  function detectFlag(number) {
    const cleaned = number.replace(/\D/g, "");

    if (/^4/.test(cleaned)) {
      return "Visa";
    }

    if (/^(5[1-5]|2[2-7])/.test(cleaned)) {
      return "MasterCard";
    }

    if (/^3[47]/.test(cleaned)) {
      return "American Express";
    }

    if (/^(6011|65|64[4-9])/.test(cleaned)) {
      return "Discover";
    }

    if (
      /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368)/
        .test(cleaned)
    ) {
      return "Elo";
    }

    if (/^(606282|3841)/.test(cleaned)) {
      return "Hipercard";
    }

    if (/^35/.test(cleaned)) {
      return "JCB";
    }

    if (/^(300|301|302|303|304|305|36|38)/.test(cleaned)) {
      return "Diners Club";
    }

    if (/^50/.test(cleaned)) {
      return "Aura";
    }

    return "Desconhecida";
  }

  function getFlagIcon(flag) {
    switch (flag) {
      case "Visa":
        return "💙";

      case "MasterCard":
        return "🟠";

      case "American Express":
        return "🟢";

      case "Discover":
        return "🔷";

      case "Elo":
        return "🟣";

      case "Hipercard":
        return "🔴";

      case "Diners Club":
        return "⚫";

      case "JCB":
        return "🟩";

      case "Aura":
        return "🟡";

      default:
        return "💳";
    }
  }

  const flag = detectFlag(cardNumber);

  const digits = cardNumber.replace(/\D/g, "");

  return (
    <div className="container">

      <div className="credit-card">

        <div className="card-header">
          <span>Card Validator</span>

          <span
            style={{
              fontSize: "32px"
            }}
          >
            {getFlagIcon(flag)}
          </span>
        </div>

        <div className="card-number">
          {cardNumber || "0000 0000 0000 0000"}
        </div>

        <div
          style={{
            marginTop: "25px"
          }}
        >
          <small>TITULAR</small>

          <h3>
            {cardHolder || "NOME DO TITULAR"}
          </h3>
        </div>

        <div className="card-footer">

          <div>
            <small>VALIDADE</small>

            <h3>
              {expiry || "MM/AA"}
            </h3>
          </div>

          <div>
            <small>BANDEIRA</small>

            <h3>
              {flag}
            </h3>
          </div>

        </div>

      </div>

      <div className="form-box">

        <h1>💳 Validador de Bandeiras de Cartão de Crédito</h1>

        <input
          type="text"
          placeholder="Número do cartão"
          maxLength={19}
          value={cardNumber}
          onChange={(e) =>
            setCardNumber(
              formatCard(e.target.value)
            )
          }
        />

        <input
          type="text"
          placeholder="Nome do titular"
          value={cardHolder}
          onChange={(e) =>
            setCardHolder(
              e.target.value.toUpperCase()
            )
          }
        />

        <input
          type="text"
          placeholder="MM/AA"
          maxLength={5}
          value={expiry}
          onChange={(e) =>
            setExpiry(
              formatExpiry(e.target.value)
            )
          }
        />

        <div className="result">

          <h2>Bandeira Detectada</h2>

          <h1>
            {getFlagIcon(flag)} {flag}
          </h1>

          <p
            style={{
              marginTop: "10px"
            }}
          >
            {digits.length}/16 dígitos
          </p>

        </div>

      </div>

    </div>
  );
}