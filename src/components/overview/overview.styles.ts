export const useStyles = () => {
  return {
    aoHeading: {
      fontSize: 18,
      fontWeight: 500,
      marginBottom: 16,
      color: "#1C4890",
    },
    aoDetails: {
      border: "1px solid #DADCE0",
      borderRadius: 12,
      display: "flex",
      overflow: "auto",
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
    separator: {
      border: "0.5px solid #DADCE0",
      "&:last-child": {
        border: "none",
      },
    },
  };
};
