import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { YMInitializer } from "react-yandex-metrika"; // ИСПРАВЛЕНИЕ: Импортируем точный YMInitializer

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";

const engine = new Styletron();

// Укажите здесь ваш точный 8-9 значный номер счетчика из личного кабинета Метрики
const YM_COUNTER_ID = 12345678;

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      {/* ИСПРАВЛЕНИЕ: Вызываем YMInitializer на верхнем уровне дерева */}
      <YMInitializer
        accounts={[YM_COUNTER_ID]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true, // Включает видеозапись визитов (Вебвизор)
          trackHash: true, // Фиксирует бесшовные переходы в React Router
        }}
      />
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly
serviceWorker.unregister();
