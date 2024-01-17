import styles from "@/styles/project.module.css";
export const Box1 = () => {
  return (
    <>
      <div className={styles.dFlex}>
        <div>
          <h1>SS</h1>
        </div>
        <div className={styles.dFlex}>
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <button>Download CV</button>
        </div>
      </div>
    </>
  );
};
