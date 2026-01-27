import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: theme.colors.surface,
        borderTop: `1px solid ${theme.colors.border}`,
        padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.sm,
        fontSize: theme.typography.fontSize.xs,
        color: theme.colors.text.secondary,
        width: '100%',
      }}
    >
      <Link
        to="/about"
        style={{
          color: theme.colors.text.secondary,
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = theme.colors.accent.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = theme.colors.text.secondary;
        }}
      >
        About
      </Link>
      <span>|</span>
      <Link
        to="/privacy"
        style={{
          color: theme.colors.text.secondary,
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = theme.colors.accent.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = theme.colors.text.secondary;
        }}
      >
        Privacy
      </Link>
      <span>|</span>
      <span>est 2026</span>
    </footer>
  );
};
