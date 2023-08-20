import { useMemo } from "react";

/**
 * Drawer component styles
 * @returns {object}
 */
export const useStyles = () => {
  return useMemo(() => {
    const commonHorizontalStyles = {
      transition: "350ms",
      boxShadow: `rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px`, // BoxShadow Need to be confirmed from design team
      display: "flex",
      width: "50%",
      flexDirection: "column",
      height: "100%",
      position: "fixed",
      color: "black",
      top: 0,
      backgroundColor: "#ffffff",
      zIndex: 8,
    };
    const commonVerticalStyles = {
      transition: "350ms",
      boxShadow: `rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px`, // BoxShadow Need to be confirmed from design team
      position: "fixed",
      color: "#000000",
      width: "100%",
      zIndex: 8,
      backgroundColor: "#ffffff",
    };
    const commonContainer = {
      transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
      height: "100vh",
      width: "100%",
      top: 0,
      left: 0,
    };
    return {
      varientPersistent: {
        position: "fixed",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "#ffffff",
        zIndex: 7,
        opacity: 0,
      },
      container: {
        ...commonContainer,
        position: "fixed",
        backgroundColor: "#ffffff",
        opacity: 0,
      },
      containerAnimate: {
        ...commonContainer,
        position: "fixed",
        zIndex: 7,
        backgroundColor: "rgba(0,0,0,.5)", // Need to be confirmed from design team
        opacity: 1,
      },
      leftWrappper: {
        ...commonHorizontalStyles,
        transform: "translateX(-120%)",
        left: 0,
      },
      rightWrapper: {
        ...commonHorizontalStyles,
        transform: "translateX(120%)",
        right: 0,
      },
      topWrapper: {
        ...commonVerticalStyles,
        top: 0,
        left: 0,
        transform: "translateY(-140%)",
      },
      bottomWrapper: {
        ...commonVerticalStyles,
        bottom: 0,
        left: 0,
        transform: "translateY(140%)",
      },
      leftWrapperAnimation: {
        ...commonHorizontalStyles,
        transform: "translateX(0)",
        left: 0,
      },
      rightWrapperAnimation: {
        ...commonHorizontalStyles,
        transform: "translateX(0)",
        right: 0,
      },
      topWrapperAnimation: {
        ...commonVerticalStyles,
        top: 0,
        transform: "translateY(0)",
      },
      bottomWrapperAnimation: {
        ...commonVerticalStyles,
        bottom: 0,
        transform: "translateY(0)",
      },
      header: {
        height: "auto",
      },
      body: {
        flex: 1,
        height: "auto",
        display: "flex",
        justifyContent: "center",
      },
      footer: {
        left: 0,
        bottom: 0,
        textAlign: "center",
        width: "100%",
      },
      closeBtn: {
        position: "absolute",
        right: 0,
        top: 0,
      },
    } as const;
  }, []);
};
