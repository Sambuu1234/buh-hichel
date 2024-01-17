import styles from "@/styles/avatars.module.css";
export const List = (props) => {
  const { Array } = props;
  return (
    <>
      {Array.map((element) => (
        <div className={styles.container}>
          <img src={element.avatar} alt="" />
          <h1 className={styles.first}>
            {element.first_name}
            {element.last_name}
          </h1>
          <p className={styles.first}>{element.employment.title}</p>
          <p className={styles.first}>{element.email}</p>
        </div>
      ))}
    </>
  );
};
// export const Box = () => {
//   return (
//     <div className={styles.container}>
//       <img
//         className={styles.img}
//         src="https://robohash.org/consecteturautaut.png?size=300x300&set=set1%22"
//         alt=""
//       />
//       <h1 className={styles.first}>firstname lastname</h1>
//       <p className={styles.first}>Employment title </p>
//       <p className={styles.first}>Email</p>
//     </div>
//   );
// };
