export const useStyles = () => {
  return {
    ocContainer: {
      padding: "16px 20px",
    },
    ocHeading: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 16,
      color: '#1C4980'
    },
    ocData: {
      fontSize: 20,
      fontWeight: 700,
    },
    ocWrapper: {
      display: "flex",
      alignItems: 'center'
    },
    icon: {
      marginRight: 20,
    },
    separator: {
      border: "0.5px solid #DADCE0",
      margin: "0 20px",
      "&:last-child": {
        border: "none",
      },
    },
  };
};
