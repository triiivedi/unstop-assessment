import { useEffect, useRef, useState } from 'react';

const ANIMATION_DURATION = 150;
const ANIMATION_DELAY = 150;

/**
 * Custom hook for DrawerV2
 * @param {boolean} props.open
 * @param {Function} props.onClose
 */
export const useDrawer = (
  open?: boolean,
  defaultOpen?: boolean,
  onClose?: () => void
) => {
  const [isOpen, setisOpen] = useState(open);
  const [animate, setAnimate] = useState(false);
  const [isDefaultOpen, setIsDefaultOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**
   * useEffect for handling animation start and close
   */
  useEffect(() => {
    if (!isDefaultOpen || isDefaultOpen === undefined) {
      if (open) {
        setisOpen(open);
        setTimeout(() => {
          setAnimate(!animate);
        }, ANIMATION_DELAY);
      } else {
        setTimeout(() => {
          setisOpen(open);
        }, ANIMATION_DURATION);
      }
      setAnimate(false);
    }
  }, [open, isDefaultOpen]);

  /**
   * useEffect for handling animation default open
   */
  useEffect(() => {
    if (defaultOpen) {
      setIsDefaultOpen(defaultOpen);
      setisOpen(true);
      setTimeout(() => {
        setAnimate(!animate);
      }, ANIMATION_DELAY);
    } else {
      setTimeout(() => {
        setIsDefaultOpen(false);
      }, ANIMATION_DURATION);
    }
  }, [defaultOpen]);

  /**
   * Method to handle options if we click outside the container/component
   * @param {MouseEvent} event
   * @returns {void}
   */
  const handleOutsideClick = (event: MouseEvent): void => {
    if (!containerRef?.current?.contains(event?.target as Node)) {
      setTimeout(() => {
        setIsDefaultOpen(false);
        setAnimate(false);
        if (onClose) onClose();
      }, ANIMATION_DURATION);
    }
  };

  /**
   * for handling the click outside the component
   */
  useEffect(() => {
    if (containerRef.current) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [containerRef, handleOutsideClick]);

  /**
   * Handle opening and closing of div
   */
  useEffect(() => {
    if (!isDefaultOpen && !animate) {
      setTimeout(() => {
        setisOpen(false);
        setAnimate(false);
        if (onClose) onClose();
      }, ANIMATION_DURATION);
    }
  }, [animate, isDefaultOpen]);

  /**
   * Handle opening and closing of div on Default input
   */
  useEffect(() => {
    if (!defaultOpen) setAnimate(false);
    else {
      setisOpen(true);
      setTimeout(() => {
        setAnimate(true);
      }, ANIMATION_DELAY);
    }
  }, [defaultOpen]);

  /**
   * Method to close the drawer
   */
  const closeDrawer = () => {
    setAnimate(false);
  };

  return {
    animate,
    isOpen,
    closeDrawer,
    setisOpen,
    containerRef,
    handleOutsideClick,
  };
};
