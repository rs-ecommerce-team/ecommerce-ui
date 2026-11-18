import { describe, expect, it } from 'vitest';

describe('Vitest setup check', () => {
  it('verifies basic math assertion', () => {
    expect(1 + 1).toBe(2);
  });

  it('verifies jsdom browser environment is available', () => {
    const div = document.createElement('div');
    div.textContent = 'Hello, Wildberries clone!';
    document.body.appendChild(div);

    expect(document.body.textContent).toContain('Hello, Wildberries clone!');
  });
});
