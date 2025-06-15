# Steam Game Explorer

## Project Description

The Steam Game Explorer is a React-based web application designed to provide users with a modern and intuitive platform to explore, discover, and compare PC games available on Steam. It offers a rich user interface, a robust backend for managing game data, and features to enhance the game discovery experience.

![Untitled design (4)](https://github.com/user-attachments/assets/ece950fa-4822-4780-b55c-0304ba06801d)


## Features

- **Modern Home Page:** A visually appealing hero section, featured games, and a modern card layout for all games.
- **Responsive Design:** Optimized for various screen sizes, from desktops to mobile devices.
- **User Authentication:** Secure sign-up and login functionalities.
- **Game Search & Filtering:** Efficiently search for games and filter them by various criteria.
- **Game Details Page:** Comprehensive information about individual games.
- **Game Comparison:** Ability to compare multiple games side-by-side.
- **User Library:** Manage and view a personal collection of games.
- **Contact Us & About Us Pages:** Dedicated sections for user support and project information.

## Technologies Used

### Frontend:
- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** For declarative routing in React applications.
- **CSS3:** For styling and animations, including modern layouts, gradients, and responsive design.

### Backend:
- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing game and user data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcrypt:** For hashing passwords to ensure security.
- **dotenv:** To load environment variables from a `.env` file.
- **nodemon:** A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB installed and running, or access to a MongoDB Atlas cluster.

### Backend Setup
1. Navigate to the `src/backend` directory:
   ```bash
   cd src/backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `src/backend` directory and add the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g., from MongoDB Atlas).
4. Seed the database with initial game data (optional, but recommended for testing):
   ```bash
   node seedGames.js
   ```
5. Start the backend server:
   ```bash
   npm start
   ```
   The backend server will typically run on `http://localhost:5000`.

### Frontend Setup
1. Navigate back to the root directory of the project:
   ```bash
   cd ..
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend application will typically open in your browser at `http://localhost:3000`.

## Usage

Once both the frontend and backend servers are running, you can:

- **Browse Games:** Explore the home page to see featured and all available games.
- **Search & Filter:** Use the search bar and filter options to find specific games.
- **View Game Details:** Click on any game card to see detailed information.
- **Compare Games:** Select games for a side-by-side comparison.
- **Create an Account:** Sign up and log in to manage your game library.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m "Add Your Feature"`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request. 
