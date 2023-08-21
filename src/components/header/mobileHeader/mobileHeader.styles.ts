/**
 * styles for mobile header
 */
export const useStyles = () => {
  return {
    mhContainer: {
      paddingTop: 10,
      display: "flex",
      flexDirection: "column",
      height: 100,
      position: "fixed",
      width: "100%",
      background: "#ffffff",
    },
    wrapper: {
      padding: "0 15px",
      display: "flex",
      justifyContent: "space-between",
    },
    mhWrapper: {
      display: "flex",
      alignItems: "center",
    },
    mhHeading: {
      fontSize: 16,
      fontWeight: 600,
      color: "#1C4980",
      marginLeft: 10,
    },
    mhBtn: {
      borderRadius: "50%",
      border: "none",
      background: "#F2F8FE",
      padding: 2,
      display: "flex",
    },
    mhIcon: {
      width: 30,
      height: 30,
    },
    drawerTitle: {
      fontSize: 14,
      fontWeight: 500,
      color: "#1C4980",
    },
    dtContainer: {
      marginTop: 40,
      padding: "0 20px",
      width: "100%",
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
    },
  } as const;
};