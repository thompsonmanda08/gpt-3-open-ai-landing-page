import React from "react";
import "./brand.css";

import { google, slack, atlassian, dropbox, shopify } from "./imports";

const brands = [
  {
    name: "Google",
    image: google,
  },
  {
    name: "Slack",
    image: slack,
  },
  {
    name: "Atlassian",
    image: atlassian,
  },
  {
    name: "Drop-box",
    image: dropbox,
  },
  {
    name: "Shopify",
    image: shopify,
  },
];

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {brands.map((brand, index) => (
        <div key={index}>
          <img src={brand.image} alt={brand.name} />
        </div>
      ))}
    </div>
  );
};

export default Brand;
