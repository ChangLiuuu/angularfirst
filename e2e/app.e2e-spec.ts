import { AngularfirstPage } from './app.po';

describe('angularfirst App', function() {
  let page: AngularfirstPage;

  beforeEach(() => {
    page = new AngularfirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
