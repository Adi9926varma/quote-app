import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    try {
      setLoading(true);
      setQuote("");
      const res = await fetch("http://127.0.0.1:8000/quote");
      const data = await res.json();
      setQuote(data.quote);
    } catch (error) {
      setQuote("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔥 Quote Generator</h1>

        <button onClick={getQuote} style={styles.button}>
          {loading ? "Loading..." : "Get Quote"}
        </button>

        <p style={styles.quote}>
          {quote}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial"
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    width: "350px"
  },
  title: {
    marginBottom: "20px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  quote: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333"
  }
};

export default App;
