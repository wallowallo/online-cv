import { OnlineCvPage } from './app.po';

describe('online-cv App', function() {
  let page: OnlineCvPage;

  beforeEach(() => {
    page = new OnlineCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
