// Подключение библиотек
import React from 'react';
import ReactDOM from 'react-dom/client';

// Подключение Redux
import { Provider } from 'react-redux';
import { store } from 'services/store';

// Подключение компонентов
import App from 'components/app/app';

// Подключение таблиц стилей и функций
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Рендеринг основного компонента
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
