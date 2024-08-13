import React, { useEffect } from "react";
import { useState } from "react";
import refreshIcon from "../assets/images/refresh_icon.png";

const captchaImagesCodes = [
  { id: "00a0", text: "whcxfn" },
  { id: "1d85", text: "tdnjx8" },
  { id: "4e50", text: "25kg2k" },
  { id: "5aa1", text: "w7sv6q" },
  { id: "5abf", text: "3hcv4s" },
  { id: "6faf", text: "rrzb95" },
  { id: "24bb", text: "n2w8wq" },
  { id: "47c6", text: "qdhfxf" },
  { id: "52c3", text: "rwjw3j" },
  { id: "54f1", text: "23brdd" },
  { id: "93af", text: "r2f66h" },
  { id: "0356", text: "y9d6pt" },
  { id: "531b", text: "jrk4s5" },
  { id: "2573", text: "ypnk5q" },
  { id: "3791", text: "hdhmvm" },
  { id: "a3e6", text: "544gwk" },
  { id: "a318", text: "3v8x73" },
  { id: "a804", text: "s2ntmn" },
  { id: "c2bd", text: "g3hx9k" },
  { id: "d214", text: "bgxhxc" },
  { id: "f46e", text: "fkf7x3" },
  { id: "ffc0", text: "53nj35" },
];

// Generate captchaCodes from captchaImagesCodes
const captchaCodes = captchaImagesCodes.map((captcha) => captcha.id);

function Contact() {
  const [userInput, setUserInput] = useState("");
  const [currentCaptcha, setCurrentCaptcha] = useState(generateCaptcha());

  const vpbRefreshCaptcha = () => {
    // Logic to refresh captcha
    const img = document.getElementById("captchaimg");
    img.src = "vasplusCaptcha6faf.jpg?rand=" + Math.random();
  };

  const contactUsNext = () => {
    // Logic to handle form submission
    alert("Message successfully sent");
  };

  // Function to generate a random captcha
  function generateCaptcha() {
    const randomIndex = Math.floor(Math.random() * captchaCodes?.length);
    return captchaImagesCodes.find(
      (captcha) => captcha.id === captchaCodes[randomIndex]
    );
  }

  // Function to refresh captcha
  const refreshCaptcha = () => {
    setCurrentCaptcha(generateCaptcha());
    setUserInput("");
  };

  // Function to handle user input change
  const handleCaptchaCodeChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to validate captcha
  const validateCaptcha = () => {
    if (userInput === currentCaptcha.text) {
      alert("Captcha is correct!");
    } else {
      alert("Captcha is incorrect. Please try again.");
      refreshCaptcha(); // Optionally refresh captcha on incorrect attempt
    }
  };

  return (
    <div
      className="container"
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <br />
      <br />
      <div className="labServ_6411" style={{ width: "80%" }}>
        CONTACT US
      </div>
      <br />
      <table cellPadding="0" cellSpacing="0" width="900">
        <tbody>
          <tr>
            <td valign="top">
              <table
                cellPadding="4"
                cellSpacing="4"
                className="contactTab_9666"
              >
                <tbody>
                  <tr>
                    <td valign="top">
                      <b>Address:</b>
                    </td>
                    <td valign="top">10 Togolok-Moldo street, Bishkek</td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <b>E-mail:</b>
                    </td>
                    <td valign="top">
                      <a
                        href="mailto:basitali1125@gmail.com"
                        className="ssil_3667"
                      >
                        basitali1125@gmail.com
                        <br />
                        <br />
                        WhatsApp +993449616811
                        <br />
                        <br />
                        Instagram page - @visacenterkg
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <b>Working days:</b>
                    </td>
                    <td valign="top">Monday-Friday</td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <b>Weekend:</b>
                    </td>
                    <td valign="top">Saturday and Sunday</td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <b>Working hours:</b>
                    </td>
                    <td valign="top">from 9 a.m. till 6 p.m.</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td valign="top">
              <form id="contact_us_form">
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <input
                    type="text"
                    placeholder="Name"
                    id="firstname"
                    name="firstname"
                    className="inp_6966"
                    required
                    style={{ width: "170px", marginRight: "5px" }}
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    id="email"
                    name="email"
                    className="inp_6966"
                    required
                    style={{ width: "170px" }}
                  />
                </div>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  className="area_6966"
                  required
                ></textarea>
                <br />
                <br />
                <div className="mb-3">
                  <img
                    src={`./captcha/vasplusCaptcha${currentCaptcha.id}.jpg`}
                    id="captchaimg"
                    alt="Captcha"
                  />
                  <img
                    src={refreshIcon}
                    onClick={refreshCaptcha}
                    className="refreshIcon"
                    style={{ marginLeft: "10px" }}
                    alt="Refresh Captcha"
                  />
                  <input
                    type="text"
                    value={userInput}
                    onChange={handleCaptchaCodeChange}
                    id="vpb_captcha_code"
                    name="vpb_captcha_code"
                    required
                  />
                </div>
                <input
                  type="button"
                  className="btn_3256"
                  value="SEND"
                  onClick={contactUsNext}
                />
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="messSucc_7733">
        {" "}
        &nbsp;&nbsp;&nbsp; Message successfully sent
      </div>

      <br />
      <br />
      <div className="gmap3" style={{ height: "400px" }}>
       <img src={"./mapImage.png"} style={{ width: '100%' }} />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Contact;
