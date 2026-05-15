import { useState } from "react";
import axios from "axios";

export default function App() {

  const [cardNumber, setCardNumber] = useState("");
  const [result, setResult] = useState(null);

  async function validateCard() {

    if (!cardNumber) {
      alert("Digite um cartão");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:3000/api/card/validate",
        {
          cardNumber
        }
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert("Erro ao validar cartão");
    }
  }

  return (
    <div className="container">

      <div className="card-box">

        <h1>💳 Card Validator</h1>

        <input
          type="text"
          placeholder="Digite o número do cartão"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <button onClick={validateCard}>
          Validar Cartão
        </button>

        {result && (
          <div className="result">

            <p>
              <strong>Número:</strong>
              {" "}
              {result.cardNumber}
            </p>

            <p>
              <strong>Bandeira:</strong>
              {" "}
              {result.flag}
            </p>

            <p>
              <strong>Status:</strong>
              {" "}
              {result.isValid
                ? "✅ Válido"
                : "❌ Inválido"}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}