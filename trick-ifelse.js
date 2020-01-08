let a = one
  ? two
    ? 'one && two'
    : 'one && !two'
  : three
    ? '!one && three'
    : '!one && !three'