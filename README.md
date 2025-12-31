# 🍳 PantryChef – AI-Powered Food Waste Reduction Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)


![PantryChef Hero](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=1200\&q=80)

Transform your leftovers into delicious meals with **AI-powered recipe matching** and **smart kitchen management**.

---

## ✨ Live Demo

https://pantry-chef-brown.vercel.app/

---

## 🎯 Features

### 🧠 Smart AI Integration

* **AI Recipe Matching** – Intelligent algorithm finds perfect recipes based on available ingredients
* **Ingredient Scanner** – Camera-based ingredient recognition with quantity estimation
* **Expiration Tracking** – Smart notifications for ingredients nearing expiration

### 👨‍🍳 Educational Content

* **Master Methods** – Step-by-step cooking technique tutorials 
* **Interactive Tutorials** – Hands-on guides with pro tips and video demonstrations
* **Cooking Fundamentals** – Learn essential skills to cook smarter and waste less

### 🛒 Smart Kitchen Management

* **AI Shopping Lists** – Intelligent grocery lists based on meal plans
* **Pantry Inventory** – Track ingredients with expiration alerts
* **Meal Planning** – Weekly planning to minimize waste from the start

### 👥 Community Platform

* **Community Q&A** – Get answers from both AI and experienced cooks
* **Recipe Sharing** – Share your creations and discover community favorites
* **Progress Tracking** – Monitor your waste reduction and savings

### 🔐 User Experience

* **Secure Authentication** – Social login and email/password authentication
* **Personal Dashboard** – Track your environmental impact and savings
* **Mobile Responsive** – Fully responsive design for all devices
* **WCAG 2.1 Compliant** – Accessible to all users

---

## 📸 Screenshots

| Home Page                                                                                                         | Recipe Finder                                                                                                     | Shopping List                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=400\&q=80) | ![](https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=400\&q=80) | ![](https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=400\&q=80) |

| Master Methods                                                                                                       | Community Q&A                                                                                                     | User Dashboard                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![](https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=400\&q=80) | ![](https://images.unsplash.com/photo-1556906781-2a3f6c5a0c61?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=400\&q=80) | ![](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=400\&q=80) |

---

## 🚀 Quick Start

### Prerequisites

* Node.js **16.x** or higher
* npm or yarn
* Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/busa0019/PantryChef.git

# Navigate to project directory
cd PantryChef

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at **[http://localhost:3000](http://localhost:3000)**

### Build for Production

```bash
# Create production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🛠️ Tech Stack

### Frontend Framework

* React 18 with TypeScript
* Tailwind CSS for styling
* Create React App for build tooling

### Key Libraries

* React Hooks for state management
* LocalStorage for data persistence
* React Icons for iconography

### Development Tools

* TypeScript for type safety
* ESLint for code quality
* PostCSS for CSS processing

---

## 📁 Project Structure

```text
PantryChef/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── IngredientScanner.tsx
│   │   ├── RecipeFinder.tsx
│   │   ├── ShoppingList.tsx
│   │   ├── MethodsSection.tsx
│   │   ├── MethodCard.tsx
│   │   ├── CommunityQA.tsx
│   │   ├── DashboardPreview.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── LoginModal.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🔑 Key Features in Detail

### 1. AI-Powered Recipe Matching

* Ingredient-based search
* Dietary filters (Vegetarian, Vegan, Keto, Gluten-Free)
* Time-based filtering (under 30 minutes)
* Match percentage scoring

### 2. Smart Shopping List

* AI-generated grocery lists
* Priority sorting for expiring items
* Cost estimation
* Category organization

### 3. Cooking Techniques Library

* Step-by-step guides with pro tips
* Difficulty levels
* Video tutorials
* Tool requirements

### 4. Community Engagement

* Q&A forum
* Recipe sharing
* Waste reduction tracking
* Expert contributors

---

## ♿ Accessibility Features

PantryChef follows **WCAG 2.1 AA** guidelines:

* Semantic HTML
* Full keyboard navigation
* ARIA labels
* 4.5:1 minimum color contrast
* Visible focus indicators
* Descriptive alt text

---

## 📱 Responsive Design

* Mobile-first approach
* Breakpoints: `sm`, `md`, `lg`, `xl`
* Touch-friendly UI
* Performance optimized with lazy loading

---

## 🌱 Environmental Impact

### Statistics Tracked

* Food waste reduced
* Money saved
* CO₂ reduction
* Recipes created

### Sustainability Goals

* Reduce food waste by **60%**
* Save resources
* Educate users
* Build a waste-conscious cooking community

---

## 🔧 Development

### Available Scripts

```bash
npm start
npm test
npm run build
npm run deploy
npm run eject
```

### Code Style

* TypeScript (strict mode)
* ESLint (Airbnb style guide)
* Prettier formatting
* Functional components with hooks

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## 🙏 Acknowledgments

* Unsplash – Food photography
* Tailwind CSS
* React Community

---

## 📞 Support

* **Bugs**: GitHub Issues
* **Features**: GitHub Discussions
* **Questions**: Open an issue


---

<div align="center">
  <strong>Built with ❤️ for sustainable cooking</strong><br />
  <sub>Help reduce food waste, one meal at a time</sub>
</div>

<p align="center">
  <a href="https://github.com/busa0019/PantryChef/stargazers">⭐ Star us on GitHub</a> •
  <a href="https://github.com/busa0019/PantryChef/fork">🍴 Fork the project</a> •
  <a href="https://github.com/busa0019/PantryChef/issues">🐛 Report a bug</a>
</p>
