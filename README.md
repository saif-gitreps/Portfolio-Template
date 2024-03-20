# Developer Portfolio Template

Welcome to the Developer Portfolio Template! This template is designed to help fellow developers create their first developer portfolio website. It's built with Tailwind CSS for styling, React for JavaScript framework, and utilizes react-router for navigation. Additionally, it integrates GitHub APIs to automate loading developer projects on the site in card format.

## Features

- **Responsive Design:** The portfolio template is responsive and works seamlessly across various devices and screen sizes.
- **Tailwind CSS:** Utilizes Tailwind CSS for easy and customizable styling.
- **React Components:** Developed with React, making it easy to manage and reuse components.
- **React Router:** Implements react-router for smooth navigation between different sections of the portfolio.
- **GitHub APIs Integration:** Automatically loads developer projects from GitHub in card format, providing an easy way to showcase your work.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/developer-portfolio-template.git
```
2. Navigate into the project directory:
```
cd developer-portfolio-template
```
3. Install packages and dependencies
```
npm install
```

## Usage:

- Replace all of the sample descriptions with your own.
- Replace the Github API Endpoint in \src\components\github\GithubReposLoader.js with your GitHub API Endpoint
  Example:
  ```
  const result = await fetch("https://api.github.com/users/{Your Github User Name }/repos");
  ```
- After making all the desirable changes, build your project and deploy with the 'dist' file as static site:
  ```
  npm run build
  ```
- or you can choose your own method of site deployment.

# Be sure to leave a Star :D
