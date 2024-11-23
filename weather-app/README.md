How Does Each Piece of Code Work?
Let’s look at each part and how it fits into the app.

1. The States (useState)
   States are like the waiter’s notepad where they keep track of everything:

city: What city’s weather you want to see.
searchInput: What you’re typing in the search bar.
weatherData: The weather details fetched from the kitchen (API).
loading: Whether the waiter is currently fetching data.
error: If there’s a problem, this holds the error message.

Analogy: Imagine you’re running a weather service:

city is the name of the city you're tracking.
searchInput is like someone whispering their request to you but not confirming it yet.
weatherData is the final weather report you bring to the customer.
loading is the waiter saying, “Hold on, let me check.”
error is the waiter saying, “Sorry, something went wrong.”

2. Fetching Weather Data (fetchWeatherData)
   This is the kitchen. It prepares the weather report when you ask for it. The waiter (your app) communicates with the kitchen (API) to get this data.

Key Points:
It checks if the API key or city name is valid.
It shows a "Loading..." message while fetching.
If successful, it saves the weather data to weatherData.
If something goes wrong, it saves an error to error.

Analogy: The waiter:
Checks if the kitchen is open (API_KEY exists).
Writes down the customer’s request (cityName).
Goes to the kitchen (API).
If the kitchen delivers food (weather data), it brings it to the customer.
If the kitchen says, “Sorry, no such dish” (404 error), it apologizes to the customer.

3.  Automatically Fetch Weather for Default City (useEffect)
    When the app loads, it fetches the weather for the default city (Stockholm). This happens automatically using useEffect.

    Key Points:
    useEffect runs whenever its dependencies (city or fetchWeatherData) change.
    Here, it fetches weather whenever the city changes.
    When the app first loads, city is "Stockholm," so it fetches Stockholm’s weather.
    Analogy: Imagine the waiter automatically places an order for “Stockholm weather” as soon as the app starts. If the customer changes their mind and asks for another city, the waiter goes back to the kitchen to fetch that instead.

    4.  Handling User Input (handleInputChange and handleSubmit)
        These functions let the user type a city name and fetch weather data for it.
        Key Points:

handleInputChange keeps track of what the user is typing in searchInput.
handleSubmit updates the city state when the user submits the form.

Analogy:
The customer writes down the city they want (types into the input). When they hit “Search,” the waiter (app) officially places the order (updates city).

4.  Rendering the UI
    This is where everything comes together. The app shows different things based on the current state.

How Does This All Work Together?
The app starts with Stockholm as the default city.
useEffect automatically fetches Stockholm’s weather when the app loads.
If the user types a new city, searchInput updates as they type.
When the user submits the form, the city updates, triggering useEffect to fetch the new city’s weather.
Conditional rendering ensures the app only shows what makes sense (e.g., loading, error, or weather info).

Key Lessons
useState: Use it to store and update data (like input, loading, or fetched results).
useEffect: Use it to do something automatically when the app loads or when a specific value changes.
Conditional Rendering: Show different things depending on the app’s state (e.g., loading spinner or weather info).
Think Like a Waiter: Handle input, fetch data, and display results step by step, just like a waiter taking an order, fetching from the kitchen, and serving it.
