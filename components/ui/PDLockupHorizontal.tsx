import PDMark from './PDMark';

interface PDLockupHorizontalProps {
  theme?: 'dark' | 'light';
}

export default function PDLockupHorizontal({ theme = 'dark' }: PDLockupHorizontalProps) {
  const dividerColor = theme === 'dark'
    ? 'rgba(255,255,255,0.15)'
    : 'rgba(0,0,0,0.12)';
  const textColor = theme === 'dark' ? '#f4f3f0' : '#2b3240';
  const taglineColor = theme === 'dark'
    ? 'rgba(244,243,240,0.38)'
    : 'rgba(43,50,64,0.45)';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

      {/* 80px mark */}
      <PDMark size={80} bg="dark" />

      {/* Vertical divider */}
      <div style={{
        width: '1px',
        height: '36px',
        background: dividerColor,
        flexShrink: 0,
      }} />

      {/* Wordmark + tagline */}
      <div>

        {/* Wordmark row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            fontSize: '24px',
            color: textColor,
            letterSpacing: '-0.02em',
          }}>Parsons</span>

          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            fontSize: '24px',
            color: '#0891b2',
            margin: '0 2px',
          }}>/</span>

          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 300,
            fontSize: '24px',
            color: textColor,
            letterSpacing: '-0.01em',
          }}>Digital</span>
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 300,
          fontSize: '9px',
          color: taglineColor,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          marginTop: '5px',
        }}>Pixel-Perfect Solutions</div>

      </div>
    </div>
  );
}
