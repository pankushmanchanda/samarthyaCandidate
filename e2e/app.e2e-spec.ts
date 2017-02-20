import { CandidateAppPage } from './app.po';

describe('candidate-app App', function() {
  let page: CandidateAppPage;

  beforeEach(() => {
    page = new CandidateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
