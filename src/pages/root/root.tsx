// Подключение библиотек
import React from 'react';

// Подключение таблиц стилей и функций
import './root.scss';
import logo from 'assets/logo.svg';

export async function loader() {
  const str = 'test';
  return { str };
}

export default function RootPage() {
  return (
    <div className="App">
      <header className="container-fluid App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
