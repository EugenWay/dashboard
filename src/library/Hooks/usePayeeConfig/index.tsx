// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowDown,
  faArrowRightFromBracket,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { PayeeOptions } from 'contexts/Setup/types';

export interface PayeeItem {
  icon: IconProp;
  value: PayeeOptions;
  title: string;
  activeTitle: string;
  subtitle: string;
}

export const usePayeeConfig = () => {
  const items: Array<PayeeItem> = [
    {
      value: 'Staked',
      title: 'Compound',
      activeTitle: 'Compounding',
      subtitle: 'Add payouts to your existing staked balance automatically.',
      icon: faRotate,
    },
    {
      value: 'Stash',
      title: 'To Staking Account',
      activeTitle: 'To Staking Account',
      subtitle: 'Payouts are sent to your account as free balance.',
      icon: faArrowDown,
    },
    {
      value: 'Account',
      title: 'To Another Account',
      activeTitle: 'To Another Account',
      subtitle: 'Send payouts to another account as free balance.',
      icon: faArrowRightFromBracket,
    },
  ];

  return { items };
};
