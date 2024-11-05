# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- Responsive design
- Single Page Application (SPA) with React Router
- Smooth scrolling navigation
- Interactive UI components
- Dark theme
- Section-based layout:
  - Home
  - About
  - Skills
  - Projects
  - Experience
  - Contact

## 🛠️ Technologies

- React 18
- TypeScript
- TailwindCSS
- React Router DOM
- Lucide React (for icons)
- Azure Static Web Apps (for deployment)

## 🏗️ Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run format` - Formats code using Prettier
- `npm run format:check` - Checks code formatting

## 🌐 Deployment

This project is configured for deployment to Azure Static Web Apps. The deployment workflow is automatically triggered when pushing to the main branch.

To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```
2. The build output will be in the `build` folder, ready for deployment.

## 🎨 Project Structure

```
src/
├── components/
│ ├── Layout/
│ │ ├── Navigation.tsx
│ │ └── Footer.tsx
│ ├── Sections/
│ │ ├── Home.tsx
│ │ ├── About.tsx
│ │ ├── Skills.tsx
│ │ ├── Projects.tsx
│ │ ├── Experience.tsx
│ │ └── Contact.tsx
│ ├── ProjectCard.tsx
│ └── SkillCategory.tsx
├── pages/
│ ├── PersonalProfile.tsx
│ └── Experience.tsx
├── constants/
│ └── personalInfo.ts
├── utils/
│ └── scrollUtils.ts
└── App.tsx
```
## ⚙️ Configuration

- TailwindCSS configuration in `tailwind.config.js`
- TypeScript configuration in `tsconfig.json`
- Prettier configuration in `.prettierrc`
- ESLint configuration in `.eslintrc`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
This README provides a comprehensive overview of your project, including its features, setup instructions, and project structure. It's based on the actual codebase structure and configuration files present in your project.
The main references I used from your codebase include:
Package.json for scripts and dependencies
Project structure and components
Configuration files
Deployment workflow
I've organized it to be clear and helpful for anyone who wants to understand or contribute to the project.
