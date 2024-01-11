import { Box, Text } from "../components/Shoe";
export default function Home() {
  return (
    <div>
      <div style={styles.container}>
        <Box />
        <Box />
        <Box />
      </div>
      <div style={styles.container}>
        <Text />
        <Text />
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    gap: "100px",
  },
};
