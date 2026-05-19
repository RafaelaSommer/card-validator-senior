import { useState } from "react";
import axios from "axios";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex
} from "react-icons/fa";
const [cvv, setCvv] = useState("");
const [expiry, setExpiry] = useState("");

export default function App() {

  const [cardNumber, setCardNumber] = useState("");
  const [result, setResult] = useState(null);

  function formatCardNumber(value) {

    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  function handleChange(e) {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  }

  async function validateCard() {

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

  function renderFlagIcon() {

    if (!result) return null;

    switch (result.flag) {

      case "Visa":
        return <FaCcVisa size={50} />;

      case "MasterCard":
        return <FaCcMastercard size={50} />;

      case "AmericanExpress":
        return <FaCcAmex size={50} />;

      default:
        return "💳";
    }
  }

  return (
    <div className="container">

      <div className="credit-card">

        <div className="card-top">
          <span>Card Validator</span>
          {renderFlagIcon()}
        </div>

        <div className="card-number">
          {cardNumber || "0000 0000 0000 0000"}
        </div>

        <div className="card-footer">
          <span>VALID THRU</span>
          <span>12/30</span>
        </div>

      </div>

      <div className="form-box">

        <h1>💳 Validador Premium</h1>

        <input
  type="text"
  placeholder="CVV"
  maxLength={3}
  value={cvv}
  onChange={(e) => setCvv(e.target.value)}
/>

<input
  type="text"
  placeholder="MM/AA"
  maxLength={5}
  value={expiry}
  onChange={(e) => setExpiry(e.target.value)}
/>
        <button onClick={validateCard}>
          Validar Cartão
        </button>

        {result && (

          <div className="result">

            <p>
              <strong>Bandeira:</strong>
              {" "}
              {result.flag}
            </p>

            <p>
              <strong>Status:</strong>
              {" "}
              {result.isValid
                ? "✅ Cartão válido"
                : "❌ Cartão inválido"}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}