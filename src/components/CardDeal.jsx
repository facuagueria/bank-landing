import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button.jsx";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className={"sm:block hidden"} />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquiet eget mauris tortor. Aliquiet ultrices ac, ametau.
      </p>
      <Button styles={"mt-10"}>Get Started</Button>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className={"w-[100%] w-[100%]"} />
    </div>
  </section>
);

export default CardDeal;