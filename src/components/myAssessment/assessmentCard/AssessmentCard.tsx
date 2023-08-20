import svgs from "../../../assets/svgs";
import { useBreakpoints } from "../../../hooks";
import { useStyles } from "./assessmentCard.styles";

/**
 * Component for assessment card
 * @param {string} props.title
 * @param {string} props.icon
 * @param {string} props.description
 * @param {string} props.date
 * @param {string} props.duration
 * @param {string} props.questions
 * @param {string} props.avatar
 * @returns {JSX.Element}
 */
const AssessmentCard = ({
  title,
  icon,
  description,
  date,
  duration,
  questions,
  avatar,
}: IAssessmentCard): JSX.Element => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  /**
   * rendering common title and description section for web and web responsive
   */
  const detailsToRender = (
    <div>
      <p css={styles.acTitle}>{title}</p>
      <div
        css={{
          display: "flex",
          marginBottom: 16,
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <p css={styles.acDescription}>{description}</p>
        <div css={styles.separator} />
        <img src={isMobile?svgs.calender:svgs.schedule} alt="calender"/>
        <p css={styles.acDate}>{date}</p>
      </div>
    </div>
  );

  // divided this assessment card in two sections

  /**
   * section one to render
   */
  const sectionOne = (
    <div css={styles.sectionOne}>
      <div css={styles.acHeader}>
        <div css={styles.acDetailsMobile}>
          <img css={styles.acIcon} src={icon} alt="bag" />
          {isMobile && detailsToRender}
        </div>
        <img src={svgs.bullets} alt="show more" />
      </div>
      {!isMobile && detailsToRender}
    </div>
  );

  /**
   * section two to render
   */
  const sectionTwo = (
    <div css={styles.sectionTwo}>
      <div css={styles.acQnD}>
        <div css={styles.acDuration}>
          <p css={styles.acCount}>{duration}</p>
          <p css={styles.acQnDtitle}>Duration</p>
        </div>
        <div>
          <p css={styles.acCount}>{questions}</p>
          <p css={styles.acQnDtitle}>Questions</p>
        </div>
      </div>
      <div css={{display: 'flex'}}>
        <button css={styles.acButton}>
          <img src={svgs.link} alt="share"/>
          <p css={styles.acButtonText}>Share</p>
        </button>
        <img src={avatar} alt="user avatar"/>
      </div>
    </div>
  );

  return (
    <div css={styles.acContainer}>
      {sectionOne}
      {sectionTwo}
    </div>
  );
};

interface IAssessmentCard {
  title: string;
  icon: string;
  description: string;
  date: string;
  duration: string;
  questions: string;
  avatar: string
}
export default AssessmentCard;
