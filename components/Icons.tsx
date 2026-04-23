import React from 'react';

interface IconProps {
  size?: number;
  stroke?: number;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 20,
  stroke = 1.5,
  fill = 'none',
  className,
  style,
  children,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IconBuilding: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="4" y="3" width="16" height="18" rx="0.5" />
    <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2M10 21v-4h4v4" />
  </Icon>
);

export const IconShield: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const IconScroll: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M6 3h10a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5" />
    <path d="M6 3a2 2 0 00-2 2v2h4" />
    <path d="M10 9h6M10 13h6M10 17h4" />
  </Icon>
);

export const IconBriefcase: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="7" width="18" height="13" rx="1.5" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
    <path d="M3 13h18" />
  </Icon>
);

export const IconScale: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 3v18M5 21h14M7 7h10" />
    <path d="M7 7l-3 7c0 1.5 1.5 2.5 3 2.5S10 15.5 10 14L7 7zM17 7l-3 7c0 1.5 1.5 2.5 3 2.5S20 15.5 20 14L17 7z" />
  </Icon>
);

export const IconHandshake: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 12l3-3 4 4 2-2 5 5-2 2-3-3" />
    <path d="M14 6l3-3 4 4-3 3" />
    <path d="M10 6L7 3 3 7l2 2" />
  </Icon>
);

export const IconMail: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);

export const IconPhone: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </Icon>
);

export const IconPin: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);

export const IconClock: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const IconChevronDown: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
);

export const IconChevronRight: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M9 6l6 6-6 6" />
  </Icon>
);

export const IconSend: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </Icon>
);

export const IconCheck: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 13l4 4L19 7" />
  </Icon>
);

export const IconLinkedIn: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-5c0-1 1-2 2-2s2 1 2 2v5M12 17v-7" />
  </Icon>
);

export const IconAcademic: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 9l10-5 10 5-10 5L2 9z" />
    <path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5" />
    <path d="M22 9v5" />
  </Icon>
);
