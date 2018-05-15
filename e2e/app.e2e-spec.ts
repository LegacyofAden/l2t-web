import { L2tWebPage } from './app.po';

describe('l2t-web App', () => {
  let page: L2tWebPage;

  beforeEach(() => {
    page = new L2tWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
