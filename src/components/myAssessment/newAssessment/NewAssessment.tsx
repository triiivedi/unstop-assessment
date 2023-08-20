import svgs from "../../../assets/svgs";
import { useStyles } from "./newAssessment.styles";

/**
 * Component to render card for new assessment
 * @param {INewAssessment}
 * @param {function} props.setOpen
 * @returns {JSX.Element}
 */
const NewAssessment = ({ setOpen }: INewAssessment): JSX.Element => {
  const styles = useStyles();

  /**
   * Method to handle click on card and opening the modal
   * @returns
   */
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(event: any) => {
        //allowing keydown only when pressed key is enter
        event.key === "Enter" && handleClick();
      }}
      css={styles.naContainer}
      onClick={handleClick}
    >
      <div css={styles.naAdd}>
        <img css={styles.addIcon} src={svgs.add} alt="plus"/>
      </div>
      <p css={styles.naText}>New Assessment</p>
      <p css={styles.naDescription}>
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
};

interface INewAssessment {
  setOpen: (open: boolean) => void;
}

export default NewAssessment;
