import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./views /AuthPage/AuthPage";
import HomePage from "./views /HomePage/HomePage";
import ChatsPage from "./views /ChatsPage/ChatsPage";
import SupportPage from "./views /SupportPage/SupportPage";
import TicketsPage from "./views /TicketsPage/TicketsPage";
import TasksPage from "./views /TasksPage/TasksPage";
import NotificationsPage from "./views /NotificationsPage/NotificationsPage";
import ProfilePage from "./views /ProfilePage/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chats" element={<ChatsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
