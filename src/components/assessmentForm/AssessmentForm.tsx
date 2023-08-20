import { useStyles } from "./assessmentForm.styles";

/**
 * Component to render assessment details form
 * @returns {JSX.Element}
 */
const AssessmentForm = (): JSX.Element => {

  const styles = useStyles();

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
        <div></div>
        <input css={styles.input} placeholder="Type Here" />
        <label css={styles.afLabel}>Duration of assessment</label>
        <input css={styles.input} placeholder="HH:MM:SS" />
      </div>
      <div css={styles.afbtnContainer}>
        <button css={styles.afButton}>
          <p css={styles.afButtonText}>Save</p>
        </button>
      </div>
    </form>
  );
};

export default AssessmentForm;
