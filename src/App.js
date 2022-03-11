import ResultViewer from "./ResultViewer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>📊 Welcome. , Wish you good luck with your result </h3>
      <h5>🛑 Enter your registration number:</h5>
      <ResultViewer />
      <footer>
        👨‍💻 DEVELOPED BY{" "}
        <a href="https://bit.ly/KINFISHTECH" target="_blank">
          KINFE
        </a>
      </footer>
    </div>
  );
}
