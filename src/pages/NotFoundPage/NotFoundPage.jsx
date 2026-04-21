import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.code}>404</h1>
            <h2 style={styles.title}>Page Not Found</h2>
            <p style={styles.message}>
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link to="/" style={styles.button}>
                Go Back Home
            </Link>
        </div>
    );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  code: {
    fontSize: "120px",
    margin: "0",
    color: "#ff4d4f",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
  },
  message: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#1890ff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default NotFoundPage;