import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      Built by
      <a
        href="https://github.com/lienta3"
        target="_blank"
        title="Developer's GitHub account"
        rel="noreferrer"
      >
        {" "}
        Lien Ta{" "}
      </a>
      and code is open-sourced on
      <a
        href="https://github.com/lienta3/Weather-Forecast"
        target="_blank"
        title="GitHub"
        rel="noreferrer"
      >
        {" "}
        GitHub{" "}
      </a>
      and website hosted on
      <a
        href="https://weather-forecast-w7.netlify.app/"
        target="_blank"
        title="Netlify"
        rel="noreferrer"
      >
        {" "}
        Netlify{" "}
      </a>
    </footer>
  );
}
