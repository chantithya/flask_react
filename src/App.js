// Filename - App.js

// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    // Initializing state to store data from the backend
    const [data, setData] = useState({
        name: "",
        age: 0,
        date: "",
        programming: ""
    });

    // Using useEffect to fetch data on component mount
    useEffect(() => {
        fetch("http://127.0.0.1:5000/data")  // Full URL to the backend
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setData({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming
                });
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setData({ name: "Error", age: 0, date: "", programming: "Error fetching data" });
            });
    }, []);  
  
  

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and Flask</h1>
                {/* Displaying data */}
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                <p>Date: {data.date}</p>
                <p>Programming Language: {data.programming}</p>
            </header>
        </div>
    );
}

export default App;
