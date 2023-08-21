import { useMemo } from "react";
import svgs from "../../assets/svgs";
import { useBreakpoints } from "../../hooks";
import { useStyles } from "./assessmentForm.styles";
import { badgeData } from "./assessmentForm.util";

/**
 * Component to render assessment details form
 * @returns {JSX.Element}
 */
const AssessmentForm = (): JSX.Element => {

  const styles = useStyles();
  const { isMobile } = useBreakpoints()

  const formToRender = useMemo(() => {
    return (
      <form css={styles.afContainer}>
        <div css={styles.afInputContainer}>
          <label css={styles.afLabel}>Name of assessment</label>
          <input css={styles.input} placeholder="Type Here" />
          <label css={styles.afLabel}>Purpose of the test is</label>
          <input css={styles.input} placeholder="Select" />
          <label css={styles.afLabel}>Description</label>
          <input css={styles.input} placeholder="Select" />
          <label css={styles.afLabel}>Skills</label>
          <div css={styles.afBadgeContainer}>
            {badgeData.map((item) => (
              <div css={styles.afBadge}>
                <p css={styles.afBadgeText}>{item.name}</p>
                <img css={styles.afBadgeIcon} src={svgs.cross} />
              </div>
            ))}
          </div>
          <input css={styles.input} placeholder="Type Here" />
          {!isMobile && <><label css={styles.afLabel}>Duration of assessment</label>
            <input css={styles.input} placeholder="HH:MM:SS" /></>}
        </div>
        <div css={styles.afbtnContainer}>
          <button css={styles.afButton}>
            <p css={styles.afButtonText}>Save</p>
          </button>
        </div>
      </form>
    )
  }, [isMobile])

  return formToRender
};

export default AssessmentForm;
