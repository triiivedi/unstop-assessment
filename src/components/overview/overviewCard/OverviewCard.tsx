import Details from "./details/Details";
import { useStyles } from "./overviewCard.styles";

const OverviewDetails = ({ heading, icon, data }: IOverviewDetails) => {
  const styles = useStyles();
  return (
    <div css={styles.ocContainer}>
      <p css={styles.ocHeading}>{heading}</p>
      <div css={styles.ocWrapper}>
        <img css={styles.icon} src={icon} alt="detail" />
        <div css={{ "&:last-child": { border: "none" }, display: 'flex'}}>
          {data.map((item: any) => {
            return (
              <>
                <Details count={item.count} description={item.description} />
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
  icon: any;
  data: any;
}

export default OverviewDetails;
