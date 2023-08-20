import { useMemo } from "react";
import { useStyles } from "./drawerV2.styles";
// import Icon from '@components/icon';
import { useDrawer } from "./useDrawer";

// import { Size } from '@components/icon/Icon';

/**
 * Component to render the Drawer
 * @param {object} props.customStyles (optional)
 * @param {Anchor} props.anchor (optional)
 * @param {boolean} props.withBackdrop
 * @param {Function} props.onClose
 * @param {string | ReactNode} props.header (optional)
 * @param {string | ReactNode} props.body (optional)
 * @param {string | ReactNode} props.footer (optional)
 * @param {boolean} props.showClose
 * @param {boolean} props.open
 * @param {string} props.width (optional)
 * @param {string} props.height (optional)
 * @param {Size} props.iconSize (optional)
 * @param {string | ReactNode} props.icon (optional)
 * @returns JSX Element
 */

const DrawerV2 = ({
  withBackdrop,
  customStyles,
  header,
  body,
  footer,
  anchor,
  showClose,
  open,
  width,
  iconSize,
  icon,
  height,
  onClose,
  defaultOpen,
}: IDrawerV2) => {
  const styles = useStyles();

  const { containerRef, animate, closeDrawer, isOpen } = useDrawer(
    open,
    defaultOpen,
    onClose
  );

  /**
   * Method to get content of the drawer
   */
  const getContent = useMemo(
    () => (
      <>
        {header && (
          <div css={[styles.header, styles.body, customStyles?.header]}>
            {header}
          </div>
        )}
        {body && <div css={[styles.body, customStyles?.body]}>{body}</div>}
        {footer && (
          <div css={[styles.footer, customStyles?.footer]}>{footer}</div>
        )}
      </>
    ),
    [
      header,
      body,
      footer,
      showClose,
      icon,
      iconSize,
      closeDrawer,
      customStyles,
      styles,
    ]
  );

  /**
   * Method to get the styles for Wrapper div animation
   */
  const anchorStyles = useMemo(() => {
    switch (anchor) {
      case "bottom":
        return {
          defaultStyles: styles.bottomWrapper,
          animationStyles: styles.bottomWrapperAnimation,
        };
      case "left":
        return {
          defaultStyles: styles.leftWrappper,
          animationStyles: styles.leftWrapperAnimation,
        };
      case "right":
        return {
          defaultStyles: styles.rightWrapper,
          animationStyles: styles.rightWrapperAnimation,
        };
      case "top":
        return {
          defaultStyles: styles.topWrapper,
          animationStyles: styles.topWrapperAnimation,
        };
      default:
        return {};
    }
  }, [styles, anchor]);

  /**
   * Method to get the styles for backdrop animation
   */
  const variantAnimation = useMemo(
    () => (!withBackdrop ? styles.varientPersistent : styles.containerAnimate),
    [styles, withBackdrop]
  );

  const { animationStyles = {}, defaultStyles = {} } = anchorStyles;

  return (
    <>
      {isOpen && (
        <>
          <div
            css={[
              styles.container,
              animate && styles.containerAnimate,
              animate && variantAnimation!,
            ]}
          ></div>
          <div
            css={[defaultStyles, animate && animationStyles, { width, height }]}
            ref={containerRef}
          >
            {getContent}
          </div>
        </>
      )}
    </>
  );
};
export type Anchor = "top" | "left" | "bottom" | "right";

interface IDrawerV2 {
  testId?: string;
  customStyles?: IDrawerStyles;
  anchor?: Anchor;
  withBackdrop?: boolean;
  header?: string | React.ReactNode;
  body?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  open: boolean;
  width?: string;
  height?: string;
  showClose?: boolean;
  iconSize?: any;
  icon?: string | React.ReactNode;
  onClose?: () => void;
  defaultOpen?: boolean;
}

interface IDrawerStyles {
  header?: ICustomStyles;
  body?: ICustomStyles;
  footer?: ICustomStyles;
  icon?: ICustomStyles;
  iconPlacement?: ICustomStyles;
}

/**
 * Default props for drawer component
 */
DrawerV2.defaultProps = {
  anchor: "right",
  withBackdrop: true,
  width: "50%",
  iconSize: "m",
  icon: "closeFilled",
  open: true,
};

export default DrawerV2;
