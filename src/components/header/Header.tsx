import { useEffect, useState } from "react";
import svgs from "../../assets/svgs";
import { useBreakpoints } from "../../hooks";
import { useStyles } from "./header.styles";
import MobileHeader from "./mobileHeader/MobileHeader";

const Header = () => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();
  //   const [change, setChange] = useState(0);

  const requestDesktopSite = () => {
    console.log('====================================');
    console.log(
      "here",
      document.getElementsByTagName("meta")["viewport" as any].content
    );
    console.log('====================================')
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
      console.log(
        "check",
        document.getElementsByTagName("meta")["viewport" as any].content
      );
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
