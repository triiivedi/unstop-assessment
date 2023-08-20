import { useState } from "react";
import Header from "../header";
import Overview from "../overview/Overview";
import MyAssessment from "../myAssessment/MyAssessment";
import ModalV3 from "../modalV3";
import AssessmentForm from "../assessmentForm/AssessmentForm";
import { useBreakpoints } from "../../hooks";
import { useStyles } from "./assessment.styles";

/**
 * Component to render to whole assessment section
 * @returns {JSX.Element}
 */
const Assessment = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useBreakpoints();
  const styles = useStyles();

  /**
   * Method ot handle Modal onClose click
   * @returns
   */
  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div css={styles.container}>
        <Header />
        <div css={styles.wrapper}>
          <Overview />
          <MyAssessment setOpen={setOpen} />
        </div>
      </div>
      <ModalV3
        isMobile={true}
        open={open}
        onClose={handleCloseClick}
        showClose={true}
        body={<AssessmentForm />}
        title="Create new assessment"
        customStyles={{
          modal: {
            minWidth: isMobile ? "100%" : 591,
            left: "50%",
            transform: "translateX(-50%)",
          },
          modalContent: { borderRadius: 8, padding: 0 },
          body: { maxHeight: 800 },
        }}
      />
    </>
  );
};

export default Assessment;
