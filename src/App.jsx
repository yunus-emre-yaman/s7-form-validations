import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="main-container">
      <div className="mid-container">
        <div className="form-container">
          <LoginForm />
        </div>
        <div className="image-container">
          <img src="/cool.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
