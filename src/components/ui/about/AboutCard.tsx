import React, { FC } from "react";
import { AboutDataProps } from "@/components/pages/main/about/About";
import sass from "./AboutCard.module.scss";
import Image from "next/image";

interface AboutCardProps {
  el: AboutDataProps
}

const AboutCard: FC<AboutCardProps> = ({el}) => {
  return (
    <div className={sass.aboutCard}>
      <div className={sass.figure}>
        <Image src={el.icon} alt={el.title} />
      </div>
      <h2>{el.title}</h2>
      <p>
        {el.description}
      </p>
    </div>
  );
};

export default AboutCard;
