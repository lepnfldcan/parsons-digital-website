interface PDMarkProps {
  size?: 28 | 40 | 56 | 80;
  bg?: 'dark' | 'darker';
}

export default function PDMark({ size = 40, bg = 'darker' }: PDMarkProps) {
  // bg='darker' = #2b3240 (nav, on dark bg)
  // bg='dark'   = #3d4555 (larger marks, on dark card bg)
  const bgColor = bg === 'darker' ? '#2b3240' : '#3d4555';

  const sizeMap = {
    28: {
      containerSize: '28px',
      borderRadius: '4px',
      fontSize: '12px',
      gap: '1px',
      padding: '0 3px',
      slashW: '2px',
      slashH: '10px',
      slashRadius: '2px',
    },
    40: {
      containerSize: '40px',
      borderRadius: '7px',
      fontSize: '16px',
      gap: '2px',
      padding: '0 4px',
      slashW: '2px',
      slashH: '13px',
      slashRadius: '2px',
    },
    56: {
      containerSize: '56px',
      borderRadius: '9px',
      fontSize: '24px',
      gap: '3px',
      padding: '0 7px',
      slashW: '3px',
      slashH: '20px',
      slashRadius: '99px',
    },
    80: {
      containerSize: '80px',
      borderRadius: '13px',
      fontSize: '34px',
      gap: '4px',
      padding: '0 10px',
      slashW: '4px',
      slashH: '28px',
      slashRadius: '99px',
    },
  };

  const d = sizeMap[size];

  return (
    <div
      style={{
        width: d.containerSize,
        height: d.containerSize,
        background: bgColor,
        borderRadius: d.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: d.fontSize,
          color: '#f4f3f0',
          letterSpacing: '-0.03em',
          gap: d.gap,
          padding: d.padding,
        }}
      >
        <span>P</span>
        <div
          style={{
            width: d.slashW,
            height: d.slashH,
            background: '#0891b2',
            transform: 'rotate(14deg)',
            borderRadius: d.slashRadius,
            flexShrink: 0,
          }}
        />
        <span>D</span>
      </div>
    </div>
  );
}
