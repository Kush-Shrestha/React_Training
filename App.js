import React from "react";
import ReactDOM from "react-dom/client";

export const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: "#333",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
                Logo
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>About</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Services</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
            </div>
        </nav>
    );
};

export const Footer=()=>{
   return ( <h1>Footer</h1>);
}

export const Homepage=()=>{
    return (
    <Navbar />
    <Footer />
    );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Homepage />);

