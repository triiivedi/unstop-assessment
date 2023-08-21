import { useState } from "react";
import svgs from "../../../assets/svgs";
import Drawer from "../../drawer";
import { useStyles } from "./mobileHeader.styles";
import LeftNavigation from "../../leftNavigation/LeftNavigation";
import OverviewTab from "../../overview/overviewTab/OverviewTab";

/**
 * Component for mobile header
 * @returns 
 */
const MobileHeader = () => {
  const [drawer, setDrawer] = useState(false);
  const styles = useStyles();

  /**
   * Method to request mobile site from web
   */
  const requestMobileSite = () => {
    if (
      document.getElementsByTagName("meta")["viewport" as any].content ===
      "width=400px" 
    ) {
      document.getElementsByTagName("meta")["viewport" as any].content =
        "width=1440px";
    } else {
      document.getElementsByTagName("meta")["viewport" as any].content =
        "width=400px";
    }
  };

  /**
   * Method to handle click on mobile header icon
   * @returns
   */
  const handleClick = () => {
    setDrawer(true);
  };

  /**
   * Method to handle drawer closing
   * @returns
   */
  const handleClose = () => {
    setDrawer(false);
  };

  /**
   * rendering drawer title
   */
  const drawerTitle = (
    <div css={styles.dtContainer}>
      <p css={styles.drawerTitle}>Menu</p>
      <img onClick={handleClose} src={svgs.cross} alt="cross"/>
    </div>
  );
  return (
    <>
      <header css={styles.mhContainer}>
        <div css={styles.wrapper}>
          <div css={styles.mhWrapper}>
            <button css={styles.mhBtn} onClick={handleClick}>
              <img
                css={styles.mhIcon}
                src={svgs.segment}
                alt="hamburger menu"
              />
            </button>
            <p css={styles.mhHeading}>Assessment</p>
          </div>
          <img src={svgs.web} alt="desktop" onClick={requestMobileSite}/>
        </div>
        <OverviewTab />
      </header>
      <Drawer
        open={drawer}
        header={drawerTitle}
        showClose={true}
        body={<LeftNavigation />}
        onClose={handleClose}
        anchor="left"
        width="80%"
      />
    </>
  );
};

export default MobileHeader;
