import { useBreakpoints } from "../../hooks";
import svgs from "../../assets/svgs";
import { useStyles } from "./leftNavigation.styles";
import { navData } from "./leftNavigation.util";

const LeftNavigation = () => {
  const styles = useStyles();
  const {isMobile} = useBreakpoints()

  const badgeToRender = (
    <div css={styles.adminBadge}>
      <p css={styles.adminText}>Admin</p>
    </div>
  );

  return (
    <>
      <ul css={styles.lnContainer}>
        {navData.map((navItem, index) => {
          return (
            <li key={index} css={styles.navContainer}>
              <div
                css={[
                  styles.navItem,
                  navItem?.isSelected && styles.navSelectedItem,
                ]}
              >
                <img src={navItem.icon} css={{ width: 20 }} alt={navItem.alt} />
                <p css={styles.navItemText}>{navItem.text}</p>
              </div>
            </li>
          );
        })}
        <li css={styles.adNav}>
      {!isMobile && badgeToRender}
          <div css={styles.navItem}>
            <img src={svgs.admin} css={{ width: 20 }} alt={"admin"} />
            <p css={styles.navItemText}>Round Status</p>
          </div>
          {isMobile && badgeToRender}
        </li>
      </ul>
    </>
  );
};

export default LeftNavigation;
