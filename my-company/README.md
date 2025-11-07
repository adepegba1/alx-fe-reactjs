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

## 3. Build a Simple Company Website with React

**Objective:** Create a four-page company website using React. The website should have a homepage, an about page, a services page, and a contact page.

### Requirements:

- Set Up the Project:

  - Use vite to set up a new project called `my-company`
  - Install React Router for routing: `npm install react-router-dom`.

- Create Basic Page Components:

  - Create four components: `Home.jsx`, `About.jsx`, `Services.jsx`, and `Contact.jsx`. Each component should return a simple JSX layout representing the respective page.

- Implement Routing:

  - In your `App.jsx`, set up routing using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
  - Define routes for each of the four pages.

- Navigation Bar:

  - Create a `Navbar.jsx` component with links (`Link` from `react-router-dom`) to each of the four pages.
  - Include the `Navbar` component in `App.jsx` so it appears on all pages.

- Apply Inline CSS Styling:

  - Style each page and the navigation bar using inline CSS to make the website visually appealing.

- Add Simple Interactivity:

  - On the Contact page, implement a simple contact form with state hooks. It doesn’t need to submit anywhere but should demonstrate the use of state.

- Website Content:

  - Home: A welcome message.
  - About: Information about the company.
  - Services: A list of services offered.
  - Contact: A contact form (name, email, message).

- Extra Features (Optional):
  - Implement a footer component that appears on all pages.
  - Add images or additional styling to enhance the website’s appearance.

### Content and Component Structure for Each Page

- **Home Page (Home.jsx):**

```jsx
function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;
```

- **About Page (About.jsx):**

```jsx
function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Us</h1>
      <p>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;
```

- **Services Page (Services.jsx):**

```jsx
function Services() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <ul>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
```

- **Contact Page (Contact.jsx):**

```jsx
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
```
