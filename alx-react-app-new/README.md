# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Fundamentals and Core Concepts of React

The "Fundamentals and Core Concepts of React" project is designed to introduce you to the essential elements of React, a popular JavaScript library for building user interfaces. This project aims to provide a solid foundation in React by guiding you through the creation and modification of basic React applications and components. By engaging with this project, you will gain practical experience in setting up React applications, understanding JSX, and working with components and props.

## Objectives

- Understand the Basics of React:

  - Learn what React JS is and why it is a valuable tool for web development.
  - Gain knowledge on how to get started with React and set up a new React application.

- Familiarize with ReactDOM and JSX:

  - Understand the role of ReactDOM in React applications.
  - Learn how to use JSX to create and structure UI components.

- Create and Manage React Components:

  - Develop various types of React components, including functional components.
  - Understand the component lifecycle and how to manage component states and props.

- Build and Modify React Applications:

  - Create a React application from scratch using the create-react-app tool.
  - Modify and customize pre-built React components to suit specific requirements.

- Work with Props to Pass Data:

  - Learn how to use props to pass data between components.
  - Create a user profile card component that displays user information through props.

- Integrate Multiple Components:
  - Assemble multiple specific React components into a main application component.
  - Ensure proper integration and functionality of the combined components within the application.

## Tasks

### 0. Create your first React App

- Create an empty repository called `alx-fe-reactjs`

- Clone the repository and cd into that directory.

- Run the command `npm create vite@latest alx-react-app -- --template react` where alx-react-app is the name of your react app.

- To see what your app looks like, go ahead cd into the `alx-react-app` directory that will be created and run the command `npm install`.

- Next, run the command `npm run dev`.

- The app will now open in your browser on port 5173. If that doesn’t happen, then just open a browser and type in the address bar <code>localhost:5173</code> and click enter.

### 1. Modify JSX in a Pre-built React Component

- Objective: Familiarize yourself with JSX

- Create a new file called WelcomeMessage.jsx under src/components

- Copy and paste the following code into the file

```jsx
function WelcomeMessage() {
  return (
    <div>
      <h1>Welcome to ALX React APP!</h1>
      <p>This is a simple JSX component.</p>
    </div>
  );
}

export default WelcomeMessage;
```

- Examine the <code>WelcomeMessage.jsx</code> file to understand its structure and the JSX it contains.
- Change the `<h1>` tag text to "Hello everyone, I am learning React at ALX!".
- Add a new paragraph (`<p>`) tag with the custom message, **"I am learning about JSX!"**.
- Integrate this new file (component) into your app by doing the following:
- Add this line to the top of your App.jsx file: <code>import WelcomeMessage from './components/WelcomeMessage</code>
- Include the `<WelcomeMessage />` component inside the return statement of the App function.
  Run and Observe Changes:
- Start the application using <code>npm run dev.</code>
- Observe the changes in the browser and ensure your updated text is displayed.

### 2. Create Specific Components in a React Application

- Objective: Learn to create and assemble multiple specific React components within a main application component.

- Create Three Specific Components:

- **Header Component (Header.jsx):**
- Create a functional component that returns the following JSX element:

```html
<header>
  <h1>My Favorite Cities</h1>
</header>
```

- **Main Content Component (MainContent.jsx):**
- Create a functional component that returns the following JSX element:

```html
<main>
  <p>I love to visit New York, Paris, and Tokyo.</p>
</main>
```

- **Footer Component (Footer.jsx):**
- Create a functional component that returns the following JSX element:

```html
<footer>
  <p>© 2023 City Lovers</p>
</footer>
```

- Include Components in the App Component (App.jsx):
- Import the three components:
  - <code>import Header from './components/Header';</code>,
  - <code>import MainContent from './components/MainContent';</code>, and
  - <code>import Footer from './components/Footer';</code>.
- In the App component’s return statement, include these components in the following order: `<Header />`, `<MainContent />`, and `<Footer />`.
- Run the Application:
- Start your application using <code>npm run dev</code> or <code>yarn dev</code> (depending on which package manager you are using).
- Ensure that the application displays the header, main content, and footer as specified.

### 3. Create a User Profile Card Using Props

- **Objective:** Create a UserProfile component that receives and displays user information through props.

- **Instructions:**

- Create UserProfile Component:
  - In the src/components file, create a new file named UserProfile.jsx.
  - Define a functional component UserProfile that takes props.
  - The component should display a user’s name, age, and a short bio. Structure it to include these in JSX elements like `<h2>` for the name, `<p>` for age, and another `<p>` for the bio.
- Define the Props Structure:
  - The props for UserProfile should include name, age, and bio.
  - Example of the component JSX structure:

```jsx
const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
```

- Use UserProfile in App.jsx:

  - Import UserProfile into your App.jsx file.
  - Use the component with props. For example: `<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />`

- Run the Application:
  - Start your application and ensure the UserProfile component displays the information correctly.
