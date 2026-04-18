import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils/cn';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles undefined and empty strings', () => {
    expect(cn('foo', undefined, '')).toBe('foo');
  });

  it('merges tailwind classes', () => {
    expect(cn('flex', 'flex-col')).toBe('flex flex-col');
    expect(cn('px-4 py-2', 'px-4', 'py-4')).toBe('px-4 py-4');
  });
});