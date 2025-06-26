import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";
import "./ExperienceSlider.scss";

export default function ExperienceSlider({experiences, isDark}) {
  return (
    <div className="experience-slider-wrapper">
      <div className="experience-slider">
        {experiences.map((card, index) => (
          <div className="experience-slide" key={index}>
            <ExperienceCard
              isDark={isDark}
              cardInfo={{
                company: card.company,
                desc: card.desc,
                date: card.date,
                companylogo: card.companylogo,
                role: card.role,
                descBullets: card.descBullets
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
