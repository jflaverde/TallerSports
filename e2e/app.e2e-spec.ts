import { TallerSportsPage } from './app.po';

describe('taller-sports App', function() {
  let page: TallerSportsPage;

  beforeEach(() => {
    page = new TallerSportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
