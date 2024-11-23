import axios from "axios"; // Importing axios for making HTTP requests
import { useState, useEffect, useCallback } from "react"; // Importing React hooks
import "./Weather.css"; // Importing CSS for styling

// Main Weather component that fetches and displays weather information
const Weather = () => {
  // State to store the city name (default: "Stockholm")
  const [city, setCity] = useState("Stockholm");

  // State to store user input from the search bar
  const [searchInput, setSearchInput] = useState("");

  // State to store the weather data fetched from the API
  const [weatherData, setWeatherData] = useState(null);

  // State to track if the app is loading (e.g., waiting for API response)
  const [loading, setLoading] = useState(false);

  // State to store any error messages if something goes wrong
  const [error, setError] = useState(null);

  // API key is securely stored in an environment variable
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  /**
   * A function to fetch weather data from the OpenWeather API.
   * - useCallback ensures this function is memoized, meaning it only changes
   *   if its dependency (`API_KEY`) changes, preventing unnecessary re-renders.
   */
  const fetchWeatherData = useCallback(
    async (cityName) => {
      // Validate that the API key exists
      if (!API_KEY) {
        setError("API Key is missing or invalid."); // Show an error message
        setLoading(false); // Stop the loading state
        return; // Exit the function
      }

      // Validate that the city name is not empty
      if (cityName.trim() === "") {
        setError("City name cannot be empty."); // Show an error message
        setLoading(false); // Stop the loading state
        return; // Exit the function
      }

      setLoading(true); // Start the loading spinner
      setError(null); // Clear any previous errors
      setWeatherData(null); // Clear previous weather data

      try {
        // Make a GET request to fetch weather data for the specified city
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: cityName.trim(), // City name (trim removes extra spaces)
              units: "metric", // Metric units (Celsius for temperature)
              lang: "en", // Language for weather description
              appid: API_KEY, // API key for authentication
            },
          }
        );

        setWeatherData(response.data); // Save the fetched weather data
      } catch (err) {
        // Handle different types of errors
        if (err.response) {
          // If the API returns a 404 (city not found)
          setError(
            err.response.status === 404
              ? `City "${cityName}" not found. Please try another city.`
              : "Failed to fetch weather data. Please try again later."
          );
        } else {
          // Handle unexpected errors (e.g., network issues)
          setError("An unexpected error occurred. Please try again later.");
        }

        setWeatherData(null); // Clear weather data if there was an error
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    },
    [API_KEY] // useCallback only updates if API_KEY changes
  );

  /**
   * useEffect is used to automatically fetch weather data for the default city ("Stockholm")
   * when the component is first loaded.
   * - It also re-fetches data if the `city` state changes.
   */
  useEffect(() => {
    fetchWeatherData(city);
  }, [city, fetchWeatherData]); // Dependencies: `city` and `fetchWeatherData`

  /**
   * Handles the form submission when the user searches for a new city.
   * - Prevents the default form submission (e.g., page refresh).
   * - Updates the `city` state to the user input to trigger a new API fetch.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (searchInput.trim() === "") {
      setError("Please enter a city."); // Show an error if the input is empty
      return;
    }
    setCity(searchInput); // Update the `city` state with the search input
  };

  /**
   * Handles input changes as the user types in the search bar.
   * - Updates the `searchInput` state to reflect the current input value.
   * - Clears any existing error messages.
   */
  const handleInputChange = (e) => {
    setSearchInput(e.target.value); // Update `searchInput` with user input
    if (error) setError(null); // Clear error messages when input changes
  };

  // Conditional rendering:
  // Show "Loading..." message if the app is fetching data
  if (loading) return <p className="loading">Loading...</p>;

  // Show error message if there's an error
  if (error) return <p className="error">Error: {error}</p>;

  // Render the app UI
  return (
    <div className="weather-app">
      {/* Search form where users can input the city name */}
      <form onSubmit={handleSubmit} className="weather-app__form">
        <input
          type="text" // Input field for city name
          placeholder="Search for a city..." // Placeholder text
          value={searchInput} // Controlled input bound to `searchInput` state
          onChange={handleInputChange} // Update state as the user types
          className="weather-app__input" // Style using CSS
        />
        <button type="submit" className="weather-app__button">
          Search
        </button>
      </form>

      {/* Show weather information if weatherData exists */}
      {weatherData && (
        <div className="weather-app__info">
          {/* Display city name */}
          <h1 className="weather-app__heading">
            Weather in {weatherData.name}
          </h1>

          {/* Display temperature */}
          <h2 className="weather-app__temperature">
            {weatherData.main?.temp ?? "--"}°C
          </h2>

          {/* Display additional weather details */}
          <h3 className="weather-app_humidity">
            Humidity: {weatherData.main.humidity}
          </h3>
          <h4 className="weather-app_feelslike">
            Feels Like: {weatherData.main.feels_like}
          </h4>
          <h5 className="weather-app_pressure">
            Pressure: {weatherData.main.pressure}
          </h5>
          <h6 className="weather-app__wind">
            Wind Speed: {weatherData.wind?.speed ?? "--"} m/s
          </h6>

          {/* Display weather icon */}
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
            alt={weatherData.weather?.[0]?.description || "Weather icon"}
            className="weather-app__icon"
          />

          {/* Display weather description */}
          <p className="weather-app__description">
            {weatherData.weather?.[0]?.description ||
              "No description available"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather; // Export the Weather component for use in other files
