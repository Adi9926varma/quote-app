import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    try {
      setQuote("Loading...");
      const res = await fetch("http://127.0.0.1:8000/quote");
      const data = await res.json();
      setQuote(data.quote);
    } catch (error) {
      setQuote("Error ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🔥 Quote Generator</h1>

      <button onClick={getQuote}>
        Get Quote
      </button>

      <p>{quote}</p>
    </div>
  );
}

export default App;