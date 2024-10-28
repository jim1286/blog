import React from 'react';
import { TypeOptions } from 'react-toastify';
import {
  AlertCircleFilled,
  AlertTriangleFilled,
  CircleCheckFilled,
  InfoCircleFilled,
} from './styles';

interface NotificationIconProps {
  type: TypeOptions;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ type }) => {
  return ((type) => {
    switch (type) {
      case 'success': {
        return <CircleCheckFilled size={24} stroke={1.5} />;
      }
      case 'warning': {
        return <AlertCircleFilled size={24} stroke={1.5} />;
      }
      case 'info': {
        return <InfoCircleFilled size={24} stroke={1.5} />;
      }
      case 'error': {
        return <AlertTriangleFilled size={24} stroke={1.5} />;
      }
      default: {
        return <CircleCheckFilled size={24} stroke={1.5} />;
      }
    }
  })(type);
};

export default NotificationIcon;
