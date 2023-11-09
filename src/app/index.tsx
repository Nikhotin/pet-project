import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import MainPage from '../pages/Main';
import CartPage from '../pages/Cart';
import MainLayout from '../components/layouts/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<Navigate to="/error/404" />} />
          <Route path="/error/:code" element={<div>Error page stub</div>} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
        style={{ fontSize: '1.6rem' }}
      />
    </>
  );
}

export default App;
