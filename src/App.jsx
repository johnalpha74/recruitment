//import React from 'react';
import './App.css';
import { ThemeProvider } from "@/components/theme-provider"; // Ensure alias is configured correctly
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/app-layout"; // Ensure the file is named correctly
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/OnBoarding';
import JobListing from './pages/JobListing';
import PostJobs from './pages/PostJobs';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import JobPage from './pages/JobPage';
import ProtectedRoute from './components/ui/protectedRoute';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/Onboarding', element: <ProtectedRoute><Onboarding /> </ProtectedRoute>},
        { path: '/Jobs', element: <ProtectedRoute><JobListing /> </ProtectedRoute> },
        { path: '/Job/:id', element: <ProtectedRoute> <JobPage /> </ProtectedRoute>},
        { path: '/PostJobs', element: <ProtectedRoute><PostJobs /> </ProtectedRoute>},
        { path: '/SavedJobs', element: <ProtectedRoute><SavedJobs /> </ProtectedRoute>},
        { path: '/MyJobs', element: <ProtectedRoute><MyJobs /> </ProtectedRoute> },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
