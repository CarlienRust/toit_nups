import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/ui/Footer';
import { theme } from '../styles/theme';

export const AboutPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.background,
      }}
    >
      <div
        style={{
          flex: 1,
          padding: theme.spacing.xl,
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: theme.colors.surface,
            padding: theme.spacing.xxl,
            borderRadius: theme.borderRadius.lg,
            boxShadow: theme.shadows.md,
          }}
        >
        <div style={{ marginBottom: theme.spacing.lg }}>
          <Link
            to="/"
            style={{
              color: theme.colors.accent.primary,
              textDecoration: 'none',
              fontSize: theme.typography.fontSize.sm,
              display: 'inline-block',
              marginBottom: theme.spacing.md,
            }}
          >
            ← Back to Home
          </Link>
        </div>
        <h1
          style={{
            fontSize: theme.typography.fontSize['3xl'],
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.text.primary,
            marginBottom: theme.spacing.xl,
          }}
        >
          About Vowable
        </h1>

        <div
          style={{
            fontSize: theme.typography.fontSize.base,
            lineHeight: theme.typography.lineHeight.relaxed,
            color: theme.colors.text.primary,
          }}
        >
          <p style={{ marginBottom: theme.spacing.lg }}>
            Vowable is a wedding planning application that helps users organise and manage their wedding planning
            process. The app allows users to create a planning profile, track timelines and tasks, save inspiration, and
            organise information about venues and service providers in one place.
          </p>

          <p
            style={{
              marginTop: theme.spacing.xl,
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.text.secondary,
              fontStyle: 'italic',
            }}
          >
            Est. 2026
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};
