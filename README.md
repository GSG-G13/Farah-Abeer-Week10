
# University Search App 🔍

The University Search App is a React application that allows users to search for universities and view campus photos. It utilizes the "http://universities.hipolabs.com" API to fetch university data and the Unsplash API to retrieve random campus photos.

## Features ✨

- Search for universities by country
- View a list of universities with their details
- Display a random campus photo for each university
- Responsive design for optimal viewing on different devices

## Prerequisites 🗈

Before running the project, ensure that you have the following installed:

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Getting Started 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/GSG-G13/farah-abeer-week10.git
Navigate to the project directory:
Install the dependencies:``` npm install```


Obtain an API key from Unsplash by signing up for an account at https://unsplash.com/developers. Once you have the API key, replace the placeholder value in the Photo.js component with your actual API key:

``` javascript
// Replace 'YOUR_UNSPLASH_API_KEY' with your actual API key
`https://api.unsplash.com/photos/random?query=campus,${country}&client_id=YOUR_UNSPLASH_API_KEY`

```

Start the development server: ``` npm start ```

Open your browser and navigate to http://localhost:3000  to view the application.

## Usage ❓
Enter a country name in the search bar to fetch universities from that country.
The list of universities will be displayed, along with a random campus photo for each university.
Contributing
Contributions to the University Search App are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on the GitHub repository.

## Developers 👩‍💻
- Farah Alhalimi
- Abeer Ayyad