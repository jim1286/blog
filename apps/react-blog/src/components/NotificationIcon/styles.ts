import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react';
import styled from 'styled-components';

export const CircleCheckFilled = styled(IconCircleCheckFilled)`
  color: ${({ theme }) => theme.icon.success};
`;

export const AlertCircleFilled = styled(IconAlertCircleFilled)`
  color: ${({ theme }) => theme.icon.warning};
`;

export const InfoCircleFilled = styled(IconInfoCircleFilled)`
  color: ${({ theme }) => theme.icon.information};
`;

export const AlertTriangleFilled = styled(IconAlertTriangleFilled)`
  color: ${({ theme }) => theme.icon.danger};
`;
