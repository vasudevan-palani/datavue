import { DatavuePage } from './app.po';

describe('datavue App', () => {
  let page: DatavuePage;

  beforeEach(() => {
    page = new DatavuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
