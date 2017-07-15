import { Turizm9Page } from './app.po';

describe('turizm9 App', () => {
  let page: Turizm9Page;

  beforeEach(() => {
    page = new Turizm9Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
