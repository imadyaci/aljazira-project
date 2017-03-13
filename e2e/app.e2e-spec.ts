import { AljaziraPage } from './app.po';

describe('aljazira App', function() {
  let page: AljaziraPage;

  beforeEach(() => {
    page = new AljaziraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
