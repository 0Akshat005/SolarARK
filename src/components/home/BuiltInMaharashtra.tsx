/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MaharashtraStrip } from '../MaharashtraStrip';

interface BuiltInMaharashtraProps {
  onNavigate: (path: string) => void;
  onCtaClick?: () => void;
}

export const BuiltInMaharashtra: React.FC<BuiltInMaharashtraProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  return (
    <MaharashtraStrip
      onNavigate={onNavigate}
      onCtaClick={onCtaClick}
    />
  );
};
