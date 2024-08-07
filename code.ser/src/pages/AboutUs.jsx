import React, { useState } from "react";
import twitterIcon from "../assets/images/icon_tviter.png";
import instagramIcon from "../assets/images/icon_instagram.png";
import facebookIcon from "../assets/images/icon_facebook.png";
import vkontakteIcon from "../assets/images/icon_vkontakte.png";
import midIcon from "../assets/images/mid.png";
import videoPoster from "../assets/images/mov_bbb.png";
import videoSource from "../assets/videos/rolik_2.mp4"; 
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const toggleVideo = () => setVideoVisible(!isVideoVisible);

  return (
    <div className="container" style={{ padding: "40px 140px" }}>
      <div className="labServ_6411">KYRGYZSTAN</div>
      <div className="about_kyrgyzstan">
        <div className="watchVideo" onClick={toggleVideo}>
          Watch video
        </div>
      </div>
      
      {isVideoVisible && (
       <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
         <video controls poster={videoPoster} className="videos">
          <source src={videoSource} type="video/mp4" />
        </video>
       </div>
      )}
      
      <table className="about_kyrgyzstan_tab">
        <tbody>
          <tr>
            <td width="500" valign="top">
              <b >About Kyrgyzstan</b>
              <p>
                Kyrgyzstan is one the most scenic places in Central Asia. 2/3 of its territory is occupied by the mountains, which is affected by a variety of climates, landscapes, and flora and fauna. Being here, you will open to yourself the country of snowy mountains, enjoy the views of stern sunlit heights of Tien-Shan. Wild nature with beautiful waterfalls and rapid mountain rivers, falling into the lakes with the crystal clear water will astound you with its beauty.
              </p>
              <p>
                You will enjoy your time in Kyrgyzstan at any time. During hot summer days, a variety of beautiful lakes and wide powerful rivers will just amaze you. Being one of the few unpolluted places in the world along with its beautiful alpine scenery, it can offer you lots of places to enjoy the real beauty of nature. In the snowy winter days, a big variety of ski bases will offer you an exceptional opportunity to enjoy the glorious mountains of Tien-Shan.
              </p>
              <p>
                Kyrgyz Republic is located in the north-east part of Central Asia in the very heart of Eurasia. About 90% of its territory lies above 1500 m above sea level.
              </p>
              <p>
                Country has great touristic potential, which covers:
                <ul>
                  <li>22 diverse ecosystems</li>
                  <li>160 varieties of mountain and plain landscapes. 94% of the territory is occupied by mountains, among known mountain peaks such as Pobeda Peak (7439 m), Lenin Peak (7134 m), Khan Tengri Peak (6995 m). One of the stretched glaciers “Enylchek” is also a landmark on a world scale</li>
                  <li>1923 beautiful lakes, the main one being Lake Issyk-Kul - one of the largest and deepest mountain lakes in the world</li>
                  <li>More than 40 thousand rivers and rivulets, the main source of water in which is melt water from mountain glaciers.</li>
                </ul>
              </p>
            </td>
            <td width="350" valign="top" style={{ paddingLeft: "50px" }}>
              <b >General information:</b>
              <p>
                Area: 198.5 th. square kilometers. 94% of the country is occupied by mountains. The average height is 2750 m above sea level.
              </p>
              <ul>
                <li>Population: more than 6 million people</li>
                <li>Capital: Bishkek</li>
                <li>Language: Kyrgyz - state, Russian - official</li>
                <li>Religion: Islam - 75%, Orthodoxy - 20%, other religions - 5%</li>
                <li>Time: GMT +06:00 GMT according to Grivinch</li>
                <li>Internet zone: .kg</li>
                <li>National currency: Kyrgyz Som-in relation to the dollar fluctuates around 1 $ = 69 Som</li>
                <li>The biggest cities are Bishkek, Osh, Karakol, Talas, Naryn, Jalal-Abad, Batken</li>
                <li>Climate: sharply continental</li>
                <li>The average temperature in January is -4°C -14°C, the average July temperature is +17°C +38°C.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AboutUs;
