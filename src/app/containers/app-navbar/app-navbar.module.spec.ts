import { AppNavbarModule } from './app-navbar.module';

describe('AppNavbarModule', () => {
  let appNavbarModule: AppNavbarModule;

  beforeEach(() => {
    appNavbarModule = new AppNavbarModule();
  });

  it('should create an instance', () => {
    expect(appNavbarModule).toBeTruthy();
  });
});
