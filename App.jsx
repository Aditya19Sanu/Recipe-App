// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [meals, setMeals] = useState([]);
//   const [allMeals, setAllMeals] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [ingredient, setIngredient] = useState("");
//   const [timeFilter, setTimeFilter] = useState(""); // quick / normal / long
//   const [dietFilter, setDietFilter] = useState(""); // vegetarian, dessert, etc.
//   const [visibleMeals, setVisibleMeals] = useState(12);

//   // Initial fetch
//   useEffect(() => {
//     fetchAllMeals();
//     fetchCategories();
//   }, []);

//   const fetchAllMeals = async () => {
//     const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
//     const data = await res.json();
//     setAllMeals(data.meals || []);
//     setMeals(data.meals?.slice(0, 12) || []);
//   };

//   const fetchCategories = async () => {
//     const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//     const data = await res.json();
//     setCategories(data.categories || []);
//   };

//   const searchByIngredient = async () => {
//     if (!ingredient) return fetchAllMeals();
//     const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//     const data = await res.json();
//     setAllMeals(data.meals || []);
//     setMeals(data.meals?.slice(0, 12) || []);
//     setVisibleMeals(12);
//   };

//   const filterMeals = (mealsList) => {
//     let filtered = [...mealsList];

//     // Fake cooking time filter (we don't have real cooking time in API, so use imagination!)
//     if (timeFilter === "quick") {
//       filtered = filtered.filter((meal) => meal.strMeal.length < 15);
//     } else if (timeFilter === "long") {
//       filtered = filtered.filter((meal) => meal.strMeal.length > 20);
//     }

//     // Diet filter using categories
//     if (dietFilter) {
//       filtered = filtered.filter((meal) =>
//         meal.strCategory?.toLowerCase().includes(dietFilter.toLowerCase())
//       );
//     }

//     return filtered;
//   };

//   const loadMore = () => {
//     setVisibleMeals(visibleMeals + 12);
//   };

//   return (
//     <>
//       <header style={{ background: "#2e7d32", color: "white", padding: "1rem", textAlign: "center" }}>
//         <h1>🥘 Taylor's Kitchen Helper</h1>
//         <p>Find recipes fast, based on your time, mood, or ingredients</p>
//       </header>

//       <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
//         {/* Ingredient Search */}
//         <div style={{ textAlign: "center", marginBottom: "1rem" }}>
//           <input
//             type="text"
//             value={ingredient}
//             onChange={(e) => setIngredient(e.target.value)}
//             placeholder="Enter ingredient (e.g., chicken, tomato)"
//             style={{
//               padding: "0.5rem",
//               width: "250px",
//               border: "1px solid #ccc",
//               borderRadius: "5px 0 0 5px",
//             }}
//           />
//           <button
//             onClick={searchByIngredient}
//             style={{
//               padding: "0.5rem 1rem",
//               border: "none",
//               background: "#2e7d32",
//               color: "white",
//               borderRadius: "0 5px 5px 0",
//               cursor: "pointer",
//             }}
//           >
//             Search
//           </button>
//         </div>

//         {/* Filters */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "1rem",
//             marginBottom: "2rem",
//             flexWrap: "wrap",
//           }}
//         >
//           {/* Time Filter */}
//           <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
//             <option value="">Any Time</option>
//             <option value="quick">Quick Meals ⏱️</option>
//             <option value="normal">Normal Meals 🍴</option>
//             <option value="long">Long Cooking 🕰️</option>
//           </select>

//           {/* Diet Filter */}
//           <select value={dietFilter} onChange={(e) => setDietFilter(e.target.value)}>
//             <option value="">Any Mood/Diet</option>
//             <option value="vegetarian">Vegetarian 🥦</option>
//             <option value="Dessert">Dessert 🍨</option>
//             <option value="Seafood">Seafood 🐟</option>
//             <option value="Beef">Beef 🥩</option>
//           </select>
//         </div>

//         {/* Meal Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "1rem",
//           }}
//         >
//           {filterMeals(meals).slice(0, visibleMeals).map((meal) => (
//             <a
//               key={meal.idMeal}
//               href={`https://www.themealdb.com/meal/${meal.idMeal}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <div
//                 style={{
//                   background: "white",
//                   borderRadius: "8px",
//                   overflow: "hidden",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
//                   transition: "transform 0.2s ease",
//                 }}
//               >
//                 <img
//                   src={meal.strMealThumb}
//                   alt={meal.strMeal}
//                   style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                 />
//                 <h3 style={{ textAlign: "center", padding: "0.5rem" }}>{meal.strMeal}</h3>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Load More */}
//         {visibleMeals < allMeals.length && (
//           <div style={{ textAlign: "center", marginTop: "2rem" }}>
//             <button
//               onClick={loadMore}
//               style={{
//                 padding: "0.75rem 2rem",
//                 border: "none",
//                 background: "#2e7d32",
//                 color: "white",
//                 cursor: "pointer",
//                 borderRadius: "8px",
//               }}
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [allMeals, setAllMeals] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [dietFilter, setDietFilter] = useState("");
  const [visibleMeals, setVisibleMeals] = useState(12);

  useEffect(() => {
    fetchAllMeals();
  }, []);

  const fetchAllMeals = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await res.json();
    setAllMeals(data.meals || []);
    setMeals(data.meals?.slice(0, 12) || []);
  };

  const searchByIngredient = async () => {
    if (!ingredient) return fetchAllMeals();
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await res.json();
    setAllMeals(data.meals || []);
    setMeals(data.meals?.slice(0, 12) || []);
    setVisibleMeals(12);
  };

  const surpriseMe = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    setAllMeals(data.meals || []);
    setMeals(data.meals || []);
    setVisibleMeals(1);
  };

  const filterMeals = (mealsList) => {
    let filtered = [...mealsList];
    if (timeFilter === "quick") filtered = filtered.filter((meal) => meal.strMeal.length < 15);
    if (timeFilter === "long") filtered = filtered.filter((meal) => meal.strMeal.length > 20);
    if (dietFilter) {
      filtered = filtered.filter((meal) =>
        meal.strCategory?.toLowerCase().includes(dietFilter.toLowerCase())
      );
    }
    return filtered;
  };

  const loadMore = () => setVisibleMeals(visibleMeals + 12);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          background: "#1e1e2f",
          color: "white",
          padding: "1.5rem",
          textAlign: "center",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "2rem" }}>🍳 Taylor's Kitchen Helper</h1>
        <p style={{ marginTop: "0.5rem", fontSize: "1rem", opacity: 0.8 }}>
          Quick, stress-free recipes for busy evenings
        </p>
      </header>

      {/* Search */}
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="🔍 Search by ingredient (chicken, rice...)"
          style={{
            padding: "0.75rem 1rem",
            width: "300px",
            borderRadius: "30px 0 0 30px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={searchByIngredient}
          style={{
            padding: "0.75rem 1.5rem",
            border: "none",
            background: "#ff7043",
            color: "white",
            borderRadius: "0 30px 30px 0",
            cursor: "pointer",
          }}
        >
          Search
        </button>
        <button
          onClick={surpriseMe}
          style={{
            marginLeft: "1rem",
            padding: "0.75rem 1.5rem",
            border: "none",
            background: "#2e7d32",
            color: "white",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          Surprise Me 🍀
        </button>
      </div>

      {/* Filters */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          style={{
            margin: "0 0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Any Time</option>
          <option value="quick">⏱️ Quick Meals</option>
          <option value="long">🕰️ Long Cooking</option>
        </select>

        <select
          value={dietFilter}
          onChange={(e) => setDietFilter(e.target.value)}
          style={{
            margin: "0 0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Any Mood/Diet</option>
          <option value="vegetarian">🥦 Vegetarian</option>
          <option value="Dessert">🍨 Dessert</option>
          <option value="Seafood">🐟 Seafood</option>
          <option value="Beef">🥩 Beef</option>
        </select>
      </div>

      {/* Recipes Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {filterMeals(meals).slice(0, visibleMeals).map((meal) => (
          <a
            key={meal.idMeal}
            href={`https://www.themealdb.com/meal/${meal.idMeal}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
              <h3 style={{ textAlign: "center", padding: "0.75rem" }}>{meal.strMeal}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Load More */}
      {visibleMeals < allMeals.length && (
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <button
            onClick={loadMore}
            style={{
              padding: "0.75rem 2rem",
              border: "none",
              background: "#1e88e5",
              color: "white",
              cursor: "pointer",
              borderRadius: "30px",
              fontSize: "1rem",
            }}
          >
            Load More ⬇️
          </button>
        </div>
      )}
    </div>
  );
}
