import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LineLoading from './components/LineLoading';
import ThemeContextProvider from './context/ThemeContext';
import ProductContextProvider from './context/ProductContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

let previousTitle = document.title;
window.addEventListener('blur', () => {
  previousTitle = document.title;
  document.title = '¡Vuelve, tenemos que jugar!🎮';
});

window.addEventListener('focus', () => {
  document.title = previousTitle;
});

root.render(
  <Suspense fallback={<LineLoading />}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <React.StrictMode>
          <ThemeContextProvider>
            <ProductContextProvider>
              <App />
            </ProductContextProvider>          </ThemeContextProvider>

        </React.StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
