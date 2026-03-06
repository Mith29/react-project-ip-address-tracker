                      IP Address Tracker

The IP Address Tracker is a responsive React application that allows users to search for any IP address and view its geographic location and related details. The application integrates the IP Geolocation API by IPify to retrieve real-time information such as the IP address, location (city and country), timezone, and ISP. The retrieved location data is then displayed visually on an interactive map using LeafletJS. Users can enter an IP address in the search bar, and the application dynamically updates the displayed information and map location based on the search results. The project uses reusable components, custom hooks, API integration, responsive design with Tailwind CSS, and interactive UI elements.

### Features

* Search and track any IP address

* Display IP address details

* Show location on an interactive map

* Responsive design 

* Form validation for correct IP format

* Dynamic API data fetching

* Accessible UI elements


### Project Structure
```
src
 ┣ components
 ┃ ┣ SearchIpAddress.jsx
 ┃ ┣ DisplayIpAddress.jsx
 ┃ ┗ MyMap.jsx
 ┣ hooks
 ┃ ┣ useFetch.js
 ┃ ┗ useValidate.js
 ┣ App.jsx
 ┣ main.jsx

 ```

### Installation

* Clone the repository:

      git clone https://github.com/yourusername/ip-address-tracker.git

* Install dependencies

      npm install

* Run the project

      npm run dev


### API Setup

Create a .env file in the project root and add your API key:

     VITE_API_KEY= your_ipify_api_key

You can get the API key from the IPify Geolocation API website.


The user enters an IP address in the search bar, and the application first validates the input using a custom useValidate hook to ensure the IP format is correct. Once the input is validated, the useFetch hook sends a request to the IPify Geolocation API to retrieve the corresponding location data. The returned information, including the IP address, location, timezone, and ISP, is then displayed in the DisplayIpAddress component. At the same time, the MyMap component uses the latitude and longitude from the API response to dynamically update the map and show the exact location using LeafletJS.