import { useStyles } from "./overviewTab.styles";

/**
 * Component to render tabs for assessment section in web responsive
 * @returns {JSX.Element}
 */
const OverviewTab = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div css={styles.otContainer}>
      <div css={styles.otSelected}>
        <p css={styles.otSelectedText}>My Assessment</p>
      </div>
      <div css={styles.otDeafult}>
        <p css={styles.otText}>Unstop Assessment</p>
      </div>
    </div>
  );
};

export default OverviewTab;
