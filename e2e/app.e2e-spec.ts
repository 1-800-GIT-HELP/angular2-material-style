import { Angular2MaterialStylePage } from './app.po';

describe('angular2-material-style App', () => {
  let page: Angular2MaterialStylePage;

  beforeEach(() => {
    page = new Angular2MaterialStylePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
