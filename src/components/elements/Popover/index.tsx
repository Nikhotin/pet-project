import React, { useState, ReactNode, useRef } from 'react';
import useClickOutside from '../../../lib/hooks/useClickOutside';
import { clsx } from 'clsx';
import styles from './Popover.module.scss';

export enum TriggerTypes {
  Hover = 'hover',
  Click = 'click',
}

interface PopoverProps {
  content: ReactNode;
  trigger: TriggerTypes;
  children: ReactNode;
}

function Popover({ content, trigger, children }: PopoverProps) {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (trigger === TriggerTypes.Hover) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === TriggerTypes.Hover) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (trigger === TriggerTypes.Click) {
      setIsOpen((prevState) => !prevState);
    }
  };

  useClickOutside(popover, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={clsx(styles.Wrapper, isOpen && styles.Active)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {isOpen ? (
        <div ref={popover} className={clsx(styles.Popover)}>
          {content}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Popover;
