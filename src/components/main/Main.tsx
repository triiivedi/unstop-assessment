import AppRoutes from "../../routes/AppRoutes";
import LeftNavigation from "../leftNavigation/LeftNavigation";
import { useBreakpoints } from "../../hooks";
import { useStyles } from "./main.styles";
import Assessment from "../assessment";

/**
 * Main component
 * @returns {JSX.Element}
 */
const Main = () => {
  const { isMobile } = useBreakpoints();
  const styles = useStyles();

  return (
    <main css={styles.main}>
      {!isMobile && <LeftNavigation />}
      <Assessment />
    </main>
  );
};

export default Main;
