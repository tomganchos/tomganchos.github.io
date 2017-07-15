import { Turizm8Page } from './app.po';

describe('turizm8 App', () => {
  let page: Turizm8Page;

  beforeEach(() => {
    page = new Turizm8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
