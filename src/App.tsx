import { Routes } from "./routes/Routes";
import "./App.scss";

function App() {
  function parseUrlParams() {
    const params: any = {};
    const parser = document.createElement("a");
    parser.href = window.location.href;

    const hash = parser.hash.substring(1);
    const hashParams = new URLSearchParams(hash);

    const tgWebAppData = hashParams.get("tgWebAppData");
    if (!tgWebAppData) {
      console.error("tgWebAppData отсутствует в URL");
      return null;
    }

    const dataParams = new URLSearchParams(tgWebAppData);

    dataParams.forEach((value, key) => {
      params[key] = decodeURIComponent(value);
    });

    return params;
  }

  // document.addEventListener("DOMContentLoaded", function () {
  console.log("Начало выполнения скрипта");
  console.log("window.location.href:", window.location.href);

  const params = parseUrlParams();

  if (params) {
    console.log("Извлечённые параметры:", params);

    if (params.user) {
      try {
        const userJson = decodeURIComponent(params.user);
        const user = JSON.parse(userJson);
        console.log("Данные пользователя:", user);
      } catch (e) {
        console.error("Ошибка при разборе данных пользователя:", e);
      }
    } else {
      console.error("Параметр user отсутствует в tgWebAppData");
    }
  } else {
    console.error("Не удалось извлечь параметры из URL");
  }
  // });

  console.log("ssssssssssssssssssssssss");

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
