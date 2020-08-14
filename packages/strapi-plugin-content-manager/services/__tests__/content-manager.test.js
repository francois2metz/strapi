'use strict';

const contentManagerService = require('../content-manager');

describe('Content-Manager', () => {
  describe('Publish', () => {
    beforeEach(() => {
      global.strapi = {
        entityService: {
          update: jest.fn(),
        },
      };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('Publish a content-type', async () => {
      const model = 'application::test.test';
      const params = { id: 1 };
      await contentManagerService.publish(params, model);

      expect(strapi.entityService.update).toBeCalledWith(
        { params, data: { published_at: expect.any(String) } },
        { model }
      );
    });
  });
});
