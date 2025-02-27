# Course Platform Client

The **Course Platform Client** is the front-end of a personal course sales platform. It allows users to browse, purchase, and access online courses. The project is built with **React** and uses **styled-components** for styling.

## Key Features

- **Home Page**: Displays featured courses and categories.
- **Course Detail Page**: Shows detailed information about each course, including description, instructor, and reviews.
- **Signup and Login**: Allows users to create an account or log in to access courses.
- **Shopping Cart**: Add courses to the cart and complete the purchase.
- **Student Dashboard**: Access purchased courses, progress, and certificates.
- **Responsive Design**: Adaptable design for mobile and desktop devices.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **styled-components**: Library for component styling.
- **React Router**: Front-end route management.
- **Axios**: HTTP client for making API requests.
- **Context API**: Global state management (e.g., authentication, cart).
- **Other Libraries**: `react-icons`, `react-toastify`, etc.

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)

## How to Run the Project

Follow the steps below to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/course-platform-client.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd course-platform-client
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root of the project.
   - Add the necessary variables (e.g., API URL):
     ```env
     REACT_APP_API_URL=https://your-api.com
     ```

5. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Access the project**:
   - Open your browser and go to: `http://localhost:3000`.

## Project Structure

Here is an overview of the project folder structure:

```
course-platform-client/
├── public/                  # Static files (e.g., index.html)
├── src/                     # Project source code
│   ├── components/          # Reusable components
│   ├── images/              # Images and icons
│   ├── pages/               # Application pages
│   ├── App.js               # Main component
│   ├── globalStyles.js      # Global styles
│   ├── index.css            # Global CSS
│   ├── index.js             # Entry point
│   └── reportWebVitals.js   # Performance monitoring
├── .env.example             # Example environment variables file
├── .gitignore               # Files and folders ignored by Git
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Contributing

Contributions are welcome! Follow the steps below to contribute:

1. **Fork** the project.
2. Create a **branch** for your feature (`git checkout -b feature/new-feature`).
3. **Commit** your changes (`git commit -m 'Add new feature'`).
4. **Push** to the branch (`git push origin feature/new-feature`).
5. Open a **Pull Request** in the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Name**: Tony S. Duarte A.
- **Email**: tonysduarte101@gmail.com
- **GitHub**: [tonysandro](https://github.com/tonysandro)

---