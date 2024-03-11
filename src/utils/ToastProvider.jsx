import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = ({ children }) => {
  return (
    <>
       <ToastContainer
        position="top-center" // Set toast position to top-center
        autoClose={3000} // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar={true} // Hide progress bar
        newestOnTop={true} // Display newest toast on top
        closeOnClick // Close toast on click
        rtl={false} // Set to true for right-to-left language support
        draggable // Allow dragging to dismiss
        pauseOnHover // Pause toast timer on hover
        closeButton={false} // Hide close button
        toastStyle={{ borderRadius: '20px' }} // Rounded pill-shaped style
      />
      {children}
    </>
  );
};

export default ToastProvider;
