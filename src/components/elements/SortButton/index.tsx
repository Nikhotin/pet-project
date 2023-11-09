import React, { useMemo, useState } from 'react';
import Popover, { TriggerTypes } from '../Popover';
import { sortProductsByPrice, sortProductsByTime, SortTypes } from '../../../store';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { clsx } from 'clsx';
import styles from './SortButton.module.scss';

enum SortedTypes {
  Time = 'time',
  AscPrice = 'ascPrice',
  DescPrice = 'descPrice',
}

function SortButton() {
  const [selectedSort, setSelectedSort] = useState<SortedTypes>(SortedTypes.Time);

  const buttonText = useMemo(() => {
    if (selectedSort === SortedTypes.AscPrice) return 'сперва дешевле';
    if (selectedSort === SortedTypes.DescPrice) return 'сперва дороже';
    return 'сперва новые';
  }, [selectedSort]);

  const popoverContent = useMemo(() => {
    return (
      <div className={clsx(styles.Content)}>
        <div
          className={clsx(styles.Action, selectedSort === SortedTypes.Time && styles.Active)}
          onClick={() => {
            setSelectedSort(SortedTypes.Time);
            sortProductsByTime();
          }}
        >
          Сперва новые
        </div>
        <div
          className={clsx(styles.Action, selectedSort === SortedTypes.AscPrice && styles.Active)}
          onClick={() => {
            setSelectedSort(SortedTypes.AscPrice);
            sortProductsByPrice({ sortType: SortTypes.ASC });
          }}
        >
          Сперва дешевле
        </div>
        <div
          className={clsx(styles.Action, selectedSort === SortedTypes.DescPrice && styles.Active)}
          onClick={() => {
            setSelectedSort(SortedTypes.DescPrice);
            sortProductsByPrice({ sortType: SortTypes.DESC });
          }}
        >
          Сперва дороже
        </div>
      </div>
    );
  }, [selectedSort]);

  return (
    <Popover trigger={TriggerTypes.Click} content={popoverContent}>
      <div className={clsx(styles.Wrapper)}>
        <div>Порядок: {buttonText}</div>
        <Arrow />
      </div>
    </Popover>
  );
}

export default SortButton;
