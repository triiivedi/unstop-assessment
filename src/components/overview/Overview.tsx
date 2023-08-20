import OverviewDetails from "./overviewCard/OverviewCard";
import { useStyles } from "./overview.styles";
import { overviewData } from "./overview.util";
import { useBreakpoints } from "../../hooks";
import OverviewTab from "./overviewTab/OverviewTab.tsx";

/**
 * Component to render Overview section conditionally for web and web responsive
 * @returns {JSX.Element}
 */
const Overview = (): JSX.Element => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  return isMobile ? (
    <OverviewTab />
  ) : (
    <div>
      <p css={styles.aoHeading}>Assessment Overview</p>
      <div css={styles.aoDetails}>
        {overviewData.map((item) => {
          return (
            <>
              <OverviewDetails
                heading={item.heading}
                icon={item.icon}
                data={item.data}
              />
              <div css={styles.separator} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
