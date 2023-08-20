import { useBreakpoints } from "../../hooks";

export const useStyles = () => {
  return {
    afContainer: {
      display: "flex",
      flexDirection: "column",
    },
    afhContainer: {
      padding: 30,
      borderBottom: "1px solid #DADCE0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    afHeading: {
      fontSize: 20,
      fontWeight: 600,
      color: "#1C4890",
    },
    afLabel: {
      fontSize: 16,
      fontWeight: 500,
      color: "#1C4980",
      marginBottom: 10,
    },
    afInputContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "20px 30px",
    },
    input: {
      padding: 15,
      marginBottom: 20,
      borderRadius: 8,
      border: "1px solid #DADCE0",
    },
    afbtnContainer: {
      boxShadow: "0px -4px 50px 0px rgba(0, 0, 0, 0.09)",
      padding: "20px 30px",
    },
    afButton: {
      marginTop: 20,
      padding: "10px 30px",
      backgroundColor: "#0073E6",
      borderRadius: 8,
      border: "none",
      width: "100%",
      "&:hover": {
        cursor: "pointer",
      },
    },
    afButtonText: {
      fontSize: 14,
      fontWeight: 600,
      color: "#ffffff",
    },
  } as const;
};
