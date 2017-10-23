import { YachtsPage } from './app.po';

describe('yachts App', () => {
  let page: YachtsPage;

  beforeEach(() => {
    page = new YachtsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
