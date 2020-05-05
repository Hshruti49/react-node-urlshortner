const request = require('supertest')
const app = require('../routes/geturl.js');
const shortid = require('shortid');
const code = shortid.generate()

describe("GET / ", () => {
    it("it should redirect to long url", async () => {
      const res = await request(app).get(`/${code}`);
      //expect(response.redirect.mock.calls).toEqual(1);
      expect(res.redirect).toHaveBeenCalled();
    });
});