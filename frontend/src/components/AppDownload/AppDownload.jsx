import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Food Delivery App
      </p>
      <div className="app-download-platform">
        <img src={assets.store} alt="playstore" />
      </div>
    </div>
  );
};

export default AppDownload;
