const mockedUseRoutes = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRoutes: () => mockedUseRoutes,
}));

export {};
