import { useMemo } from "react";
import { useBreakpoints } from "../../hooks";
import AssessmentCard from "./assessmentCard/AssessmentCard";
import { useStyles } from "./myAssessment.styles";
import {
  assessmentWebData,
  assessmentMobileData,
  iconsList,
} from "./myAssessment.util";
import NewAssessment from "./newAssessment/NewAssessment.tsx";

/**
 * Component to render My assessment section
 * @param {IMyAssessment}
 * @param {function} props.setOpen
 * @returns {JSX.Element}
 */
const MyAssessment = ({ setOpen }: IMyAssessment): JSX.Element => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  /**
   * Common heading for My assessment section
   */
  const heading = <p css={styles.maHeading}>My Assessment</p>;

  /**
   * rendering conditional heading for web and mobile
   */
  const headingToRender = useMemo(() => {
    return isMobile ? (
      <div css={styles.maMobileContainer}>
        {heading}
        <div css={styles.maIconsContainer}>
          {iconsList.map((name) => {
            return <img css={styles.icon} src={name.icon} alt={name.alt} />;
          })}
        </div>
      </div>
    ) : (
      <>{heading}</>
    );
  }, [isMobile, styles]);

  /**
   * rendering cards with assessment details
   */
  const cardsToRender = useMemo(() => {
    return (isMobile ? assessmentMobileData : assessmentWebData).map(
      (item: any) => {
        return (
          <AssessmentCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            date={item.date}
            duration={item.duration}
            questions={item.questions}
            avatar={item.avatar}
          />
        );
      }
    );
  }, [isMobile, assessmentMobileData, assessmentWebData]);

  return (
    <div>
      {headingToRender}
      <div css={styles.maCardContainer}>
        <NewAssessment setOpen={setOpen} />
        {cardsToRender}
      </div>
    </div>
  );
};

interface IMyAssessment {
  setOpen: (open: boolean) => void;
}

export default MyAssessment;
