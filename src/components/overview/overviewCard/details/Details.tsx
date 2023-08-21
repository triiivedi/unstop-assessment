import { useStyles } from "./details.styles";

/**
 * Component to render description and counts
 * @param {IDetails}
 * @param {string} props.count 
 * @param {string} props.description 
 * @returns {JSX.Element}
 */
const Details = ({ count, description, increment }: IDetails): JSX.Element => {
  const styles = useStyles();
  return (
    <div css={{display: 'flex'}}>
      <div>
      <p css={styles.dCount}>{count}</p>
      <p css={styles.dDetails}>{description}</p>
      </div>
      <p css={styles.dIncrement}>{increment}</p>
    </div>
  );
};

interface IDetails {
  count: string;
  description?: string;
  increment?: string;
}

export default Details;