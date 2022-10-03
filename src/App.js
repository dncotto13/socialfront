import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { PostPage } from './pages/PostPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { UserPage } from './pages/userPage';


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/user/:id' element={<UserPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
