# 🎬 Movie Explorer App

A sleek and dynamic movie browsing application built with **React** and **Redux Toolkit (RTK)**. This project leverages the **TMDB API** to fetch real-time data on trending, top-rated, and popular movies.

---

## 🚀 Features

- 🔍 Search and explore trending, popular, and top-rated movies
- 🎥 View detailed movie information including poster, rating, and description
- ⚙️ State management with Redux Toolkit for better performance and structure
- ⚡ Responsive and interactive UI using React
- 🌐 API integration with TMDB for live movie data

---

## 🧪 Tech Stack

- **React** – Frontend library for building user interfaces
- **Redux Toolkit** – Efficient and scalable state management
- **TMDB API** – Source of movie and TV show data
- **Axios / Fetch API** – For making HTTP requests
- **React Router DOM** – Client-side routing
- **CSS / Tailwind CSS** – UI styling

---

## 📁 Folder Structure

src/
│
├── Api/ # Axios instance and API configs
│ └── Axios.jsx
│
├── assets/ # Static assets (images, icons, etc.)
│
├── components/ # Reusable UI components
│ ├── BannerHome.jsx
│ ├── Card.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── HorizontalCard.jsx
│ ├── MobileNav.jsx
│ └── Video.jsx
│
├── constants/ # App-wide constants
│ └── navigation.js
│
├── pages/ # Page-level components (routes)
│ ├── DetailsPage.jsx
│ ├── ErrorPage.jsx
│ ├── ExplorePage.jsx
│ ├── Home.jsx
│ └── Search.jsx
│
├── routes/ # App routing configuration
│ └── index.jsx
│
├── store/ # Redux Toolkit store and slices
│ ├── movieslice.jsx
│ └── store.jsx
│
├── App.jsx # Root app component
├── index.css # Global styles
└── main.jsx # App entry point

## 📸 Screenshots

🏠 Home Page
![alt text](image.png)

## 🎬 Movie Detail Page

![alt text](image-1.png)

## 🔍 Search Result Page

![alt text](image-2.png)
