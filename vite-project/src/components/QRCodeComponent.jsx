import Style from "../assets/styles/QRCodeComponent.module.css";
import QRCode from "../assets/images/image-qr-code.png";

export default function QRCodeComponent() {
  return (
    <div className={`${Style.center} ${Style.container}`}>
      <img
        className={Style.qrImage}
        src={QRCode}
        alt="QR Code to improve your front-end skills by building projects"
      />
      <div className={Style.QRCodeText}>
        <p className={Style.caption}>
          Improve your front-end skills by building projects
        </p>
        <p className={Style.desciption}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
