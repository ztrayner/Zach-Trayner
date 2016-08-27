import { ZachtraynerPage } from './app.po';

describe('zachtrayner App', function() {
  let page: ZachtraynerPage;

  beforeEach(() => {
    page = new ZachtraynerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
