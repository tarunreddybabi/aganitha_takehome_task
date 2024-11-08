import React, { useState } from "react";
import axios from "axios";

function RecipeIdeas() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
      );
      if (response.data.meals) {
        setRecipes(response.data.meals);
        setError("");
      } else {
        setRecipes([]);
        setError("No recipes found with those ingredients.");
      }
    } catch (err) {
      setError("Could not fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredients.trim() !== "") {
      fetchRecipes();
    } else {
      setError("Please enter at least one ingredient.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#333" }}>Recipe Ideas</h1>
      <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
          style={{
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            width: "260px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#ff5722",
            color: "#fff",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          Get Recipes
        </button>
      </form>
      {loading && <p style={{ color: "blue" }}>Loading...</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              padding: "15px",
              margin: "10px",
              width: "200px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              background: "linear-gradient(to bottom, #ff7e5f, #feb47b)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              {recipe.strMeal}
            </h3>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: "100%", borderRadius: "5px", marginTop: "10px" }}
            />
            <a
              href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
              target="_blank"
              // rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "15px",
                padding: "8px 12px",
                fontSize: "14px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeIdeas;
