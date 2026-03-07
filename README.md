# IP Address Tracker (React)

## Overview
The IP Address Tracker is a responsive web application that allows users to search for an IP address and view its geographic location and network information. The application uses the **IP Geolocation API by IPify** to retrieve IP data and **LeafletJS** to display the location on an interactive map.

The project was built using **React** and demonstrates API integration, reusable components, custom hooks, and responsive design.

## Live Demo
Add your deployed link here:  
https://ip-address-tracker-react-mithra.netlify.app/

## GitHub Repository

https://github.com/Mith29/react-project-ip-address-tracker
---

## Features
- Search for any **IPv4 or IPv6 address**
- Display IP address information including:
  - IP Address
  - Location (City, Region, Postal Code)
  - Timezone
  - Internet Service Provider (ISP)
- Interactive **map displaying the IP location**
- **Responsive design** for desktop and mobile devices
- **Form validation** for valid IP addresses
- **Dynamic API data fetching**
- Clean UI styled with **Tailwind CSS**

---

## Technologies Used

- **React**
- **React Hooks**
- **Context API**
- **Tailwind CSS**
- **LeafletJS**
- **React Leaflet**
- **IPify Geolocation API**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## Project Structure
````
src
│
├── components
│ ├── SearchIpAddress.jsx
│ ├── DisplayIpAddress.jsx
│ └── MyMap.jsx
│
├── hooks
│ ├── useFetch.js
│ └── useValidate.js
│
├── context
│ └── IpContext.jsx
│
├── assets
│ └── images
│
└── App.jsx

````

---

## Key Components

### SearchIpAddress
Handles the search form, input validation, and triggers API calls using context.

### DisplayIpAddress
Displays the fetched IP information including location, timezone, and ISP.

### MyMap
Renders the interactive map using **LeafletJS** and places a marker based on the IP coordinates.

---

## Custom Hooks

### useFetch
A reusable hook that handles:
- API requests
- Loading state
- Error handling
- Cleanup using AbortController

### useValidate
Validates the user input to ensure the IP address format is correct (IPv4 or IPv6).

---

## Context API

### IpContext
The Context API is used to manage global state for:
- API response data
- Loading and error states
- IP address search value

This allows components to access shared data without prop drilling.

---

## Installation

1. Clone the repository
* git clone :

 https://github.com/yourusername/ip-address-tracker.git


2. Navigate to the project folder


       cd ip-address-tracker


3. Install dependencies


        npm install


4. Create a `.env` file and add your API key


       VITE_API_KEY=your_ipify_api_key


5. Run the development server


          npm run dev


---

## Deployment

The application can be deployed using:

- **Netlify**

 Add the env variable in Netlify

       npm run build

And deploy the project from the gitHub repo.





## Project Reflection

This project helped me practice building a real-world React application. The goal was to create an IP Address Tracker that shows the location and network information of an IP address using the IPify API and LeafletJS map.

I built the project using different React components like SearchIpAddress, DisplayIpAddress, and MyMap. I also created custom hooks such as useFetch for API requests and useValidate for input validation.

The most challenging part of the project was implementing the Context API. I needed to understand how to create a context, provide the data using a provider, and access it in different components using a custom hook. This allowed multiple components to use the same API data without passing props between many components.

In the future, I would like to improve the project by adding better error messages, search history, and smoother map updates.

