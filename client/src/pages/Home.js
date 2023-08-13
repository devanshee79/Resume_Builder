import React from "react";
import DefaultLayout from "../components/DefaultLayout.js";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
import Start from "./Start.js";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateimg,
    },
    {
      title: "Highlighted Sections Resume",
      image: template2img,
    },
  ];
  return (
    // <Start>
      <DefaultLayout>
        <div className="row home">
          {templates.map((template, index) => {
            return (
              <div className="col-md-4">
                <div className="template">
                  <img
                    src={template.image}
                    height="400"
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <div className="text">
                    <p>{template.title}</p>
                    <button onClick={() => navigate(`/templates/${index + 1}`)}>
                      TRY
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DefaultLayout>
    // </Start>
    
  );
}

export default Home;
