import { AngularSchoolPage } from './app.po';

describe('angular-school App', function() {
  let page: AngularSchoolPage;

  beforeEach(() => {
    page = new AngularSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
