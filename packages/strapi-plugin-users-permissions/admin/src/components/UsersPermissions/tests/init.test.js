import init from '../init';

describe('ADMIN | HOOKS | USEPERMISSIONS | init', () => {
  it('should return the initial state and set permissions, routes and policies', () => {
    const initialState = {
      permissions: {},
      pluginName: '',
      routes: {},
      selectedAction: '',
      policies: [],
    };
    const permissions = {
      application: {
        controllers: {
          address: {
            find: { enabled: false, policy: '' },
          },
          category: {
            find: { enabled: false, policy: '' },
          },
        },
      },
      'content-manager': {
        controllers: {
          components: {
            find: { enabled: false, policy: '' },
          },
          contenttypes: {
            find: { enabled: false, policy: '' },
          },
        },
      },
    };

    const routes = {
      application: [{ method: 'GET', path: '/addresses' }],
    };

    const policies = ['isauthenticated', 'ratelimit', 'custompolicy'];

    const expected = {
      permissions,
      pluginName: 'application',
      routes,
      selectedAction: '',
      policies,
    };

    expect(init(initialState, permissions, routes, policies)).toEqual(expected);
  });
});
