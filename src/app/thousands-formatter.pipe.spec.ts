import { ThousandsFormatterPipe } from './thousands-formatter.pipe';

describe('ThousandsFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new ThousandsFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
