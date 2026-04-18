export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getWebGLSupport(): 'none' | 'webgl1' | 'webgl2' {
  if (typeof window === 'undefined') return 'none';

  const canvas = document.createElement('canvas');

  if (canvas.getContext('webgl2')) return 'webgl2';
  if (canvas.getContext('webgl')) return 'webgl1';
  return 'none';
}
