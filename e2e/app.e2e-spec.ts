import { MovieListsPage } from './app.po';

describe('movie-lists App', () => {
  let page: MovieListsPage;

  beforeEach(() => {
    page = new MovieListsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
