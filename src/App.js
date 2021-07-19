import "./style.css";
import imageInSrc from "./html.jpg";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", MaxWidth: "100vw" }}></div>
      <h1 className="title red">Your name here</h1>
      <br />
      <img src={imageInSrc} alt="html" width="320" height="240" />
      <br />
      <img src="/js.png" alt="js " width="320" height="240" />
      <br />
      <video width="320" height="240" controls>
        <source src="/Rainy Day.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
