import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MyQuizzesPage } from "./pages/MyQuizzesPage";
import { PlayQuizPage } from "./pages/PlayQuizPage";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzes" element={<MyQuizzesPage />} />
        <Route path="/play-quiz" element={<PlayQuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};
