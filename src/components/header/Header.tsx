import svgs from "../../assets/svgs";
import { useBreakpoints } from "../../hooks";
import { useStyles } from "./header.styles";
import MobileHeader from "./mobileHeader/MobileHeader";

/**
 * Component for Header
 * @returns 
 */
const Header = () => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  /**
   * Method to request desktop site from web responsive
   */
  const requestDesktopSite = () => {
    if (
      document.getElementsByTagName("meta")["viewport" as any].content ===
      "width=1440px" 
    ) {
      document.getElementsByTagName("meta")["viewport" as any].content =
        "width=400px";
    } else {
      document.getElementsByTagName("meta")["viewport" as any].content =
        "width=1440px";
    }
  };

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header css={styles.hContainer}>
      <div css={styles.tabContainer}>
        <p css={styles.hHeading}>Assessment</p>
        <div css={styles.separator} />
        <div css={styles.hSubHeadingContainer}>
          <p css={styles.hSubHeading}>My Assessment</p>
        </div>
      </div>
      <div>
        <img src={svgs.webResponsive} alt="mobile" onClick={requestDesktopSite}/>
      </div>
    </header>
  );
};

export default Header;
