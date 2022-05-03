// Copyright 2022 @rossbulat/polkadot-staking-experience authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from "styled-components";
import { textPrimary, textSecondary, borderPrimary } from "../../theme";

export const AccountWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  border-bottom: 1px solid ${borderPrimary};
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;

  .account {
    width: 100%;
    height: 27px;
    display: flex; 
    flex-flow: row wrap;
    align-items: center;
    padding: 0;

    button {
      color: ${textPrimary};
    }

    .icon {
      position: relative;
      top: 0.1rem;
      margin-right: 0.5rem;
    }
    h4 {
      margin: 0;
      padding: 0;

      > .addr {
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${textSecondary};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;