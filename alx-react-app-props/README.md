# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Styling, States, Rendering, Routes and Hooks

In the “Styling, States, Rendering, Routes, and Hooks” project, you will enhance your React application by applying inline CSS styling, managing state with hooks, implementing routing, and refactoring to use the Context API. This project is designed for novice learners who aim to build robust and well-structured React applications. By the end of this project, you will have a comprehensive understanding of React’s core concepts and best practices for creating interactive and maintainable web applications.

## Learning Objectives

By the end of this project, you will be able to:

- Apply Inline CSS Styling to React Components:

  - Enhance the visual appearance of your React components using inline CSS.

- Create a Simple Counter Application Using State and Hooks:

  - Build a counter application using the useState hook to manage component state.

- Build a Simple Company Website with React:

  - Create a multi-page React application using React Router for routing.

- Refactor Prop Drilling to Use Context API:

  - Simplify data flow in your React application by refactoring to use the Context API.

## 2. Refactor Prop Drilling to Use Context API

- **Objective:** Refactor an existing React application that uses prop drilling to manage user data across multiple components. Implement the Context API to streamline data flow within the application.

- For this project use the project you created with the directory `alx-react-app`. Duplicate that directory and rename the duplicate as `alx-react-app-props`. Use this new directory for this task.

### **Initial Code with Prop Drilling**

- Suppose you have the following components set up with prop drilling:
- **App.jsx**

```jsx
import ProfilePage from "./ProfilePage";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
```

- **ProfilePage.jsx:**

```jsx
import UserInfo from "./UserInfo";

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
```

- **UserInfo.jsx:**

```jsx
import UserDetails from "./UserDetails";

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

export default UserInfo;
```

- **UserDetails.jsx:**

```jsx
function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
```

### Refactoring Task

#### Instructions:

- **Create a UserContext:**

  - Create a new file UserContext.js.
  - Initialize a Context using React.createContext() and export it.

- Provide Context in App:

  - In App.jsx, import UserContext and wrap the ProfilePage component inside UserContext.Provider. Pass userData as the value to the provider.

- Consume Context in UserDetails:
  - Modify UserDetails.jsx to consume UserContext using the useContext hook instead of receiving userData as a prop.
- Remove Unused Props:
  - Remove the userData props passed through ProfilePage and UserInfo, as these will no longer be necessary.
