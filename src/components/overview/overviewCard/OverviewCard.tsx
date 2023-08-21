import Details from "./details/Details";
import { useStyles } from "./overviewCard.styles";

/**
 * Card for overview section
 * @param {string} props.heading 
 * @param {string} props.icon 
 * @param {any[]} props.data 
 * @returns 
 */
const OverviewDetails = ({ heading, icon, data }: IOverviewDetails) => {
  const styles = useStyles();
  return (
    <div css={styles.ocContainer}>
      <p css={styles.ocHeading}>{heading}</p>
      <div css={styles.ocWrapper}>
        <img css={styles.icon} src={icon} alt="detail" />
        <div css={styles.itemWrapper}>
          {data.map((item: any) => {
            return (
              <>
                <Details count={item.count} description={item.description} increment={item.increment} />
                <div css={styles.separator} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface IOverviewDetails {
  heading: string;
  icon: string;
  data: any[];
}

export default OverviewDetails;