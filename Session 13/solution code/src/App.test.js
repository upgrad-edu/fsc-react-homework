import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";

import store from "./store";
import App from "./components/App";

describe("Task manager tests", () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="root"></div>';

    const rootElement = document.getElementById("root");
    act(() => {
      ReactDOM.render(
        <StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </StrictMode>,
        rootElement
      );
    });
  });

  afterAll(() => {
    document.body.innerHTML = "";
  });

  test("should render", () => {
    const appEl = document.querySelector(".App");
    expect(appEl).toBeDefined();
    expect(document.querySelectorAll(".task-item").length).toBe(0);
  });

  test("should add task", () => {
    const inputEl = document.querySelector(".task-input");
    const addBtn = document.querySelector(".add-task");
    act(() => {
      const changeEvent = new window.Event("change", {
        bubbles: true,
        cancelable: false
      });
      inputEl.value = "test";
      inputEl.dispatchEvent(changeEvent);

      const clickEvent = new window.Event("click", {
        bubbles: true,
        cancelable: false
      });
      addBtn.dispatchEvent(clickEvent);
    });
    expect(document.querySelectorAll(".task-item").length).toBe(1);
    expect(document.querySelector(".task-item h5").innerHTML).toBe("test");
  });
});
