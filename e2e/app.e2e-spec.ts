import { ZeemDotsTemplatePage } from './app.po';

describe('ZeemDots App', function() {
  let page: ZeemDotsTemplatePage;

  beforeEach(() => {
    page = new ZeemDotsTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
