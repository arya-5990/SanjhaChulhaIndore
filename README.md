# Sanjha Chulha 🥘

**Taste Redefined: Tradition Served with Love**

Sanjha Chulha is a premium restaurant website that blends the warmth of a traditional Punjabi hearth with the elegance of modern fine dining. This React-based application showcases the restaurant's heritage, extensive menu, and provides an interactive booking experience.

## ✨ Features

-   **Immersive Hero Section:** Features a video background and parallax effects to create a stunning first impression.
-   **Dynamic Menu:** Browse our culinary offerings with category filtering (Veg/Non-Veg).
-   **Animations:** Smooth transitions and scroll-triggered animations powered by `framer-motion`.
-   **Story & Heritage:** A dedicated section telling the story of Sanjha Chulha using interactive cards.
-   **Table Reservation:** An integrated booking form for users to reserve tables.
-   **Cloud Integration:**
    -   **Firebase:** Configured for backend services (Analytics, Firestore).
    -   **Cloudinary:** Integrated for media asset management.

## 🛠️ Technology Stack

-   **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Backend/Services:**
    -   [Firebase](https://firebase.google.com/)
    -   [Cloudinary](https://cloudinary.com/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/sanjha-chulha.git
    cd sanjha-chulha
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your Firebase and Cloudinary credentials:

    ```env
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

    VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
    VITE_CLOUDINARY_API_KEY=your_api_key
    VITE_CLOUDINARY_API_SECRET=your_api_secret
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, videos)
├── components/      # Reusable React components (Navbar, Footer, Sections)
├── services/        # Service configurations (Firebase, Cloudinary)
├── App.jsx          # Main application component
├── index.css        # Global styles and Tailwind imports
└── main.jsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
