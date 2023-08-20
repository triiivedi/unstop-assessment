import { useStyles } from "./details.styles";

const Details = ({ count, description }: IDetails) => {
  const styles = useStyles();
  return (
    <div>
      <p css={styles.dCount}>{count}</p>
      <p css={styles.dDetails}>{description}</p>
    </div>
  );
};

interface IDetails {
  count: string;
  description?: string;
}

export default Details;
