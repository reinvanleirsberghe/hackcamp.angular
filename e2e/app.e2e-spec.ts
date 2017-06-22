import { Hackcamp.AngularPage } from './app.po';

describe('hackcamp.angular App', () => {
  let page: Hackcamp.AngularPage;

  beforeEach(() => {
    page = new Hackcamp.AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
