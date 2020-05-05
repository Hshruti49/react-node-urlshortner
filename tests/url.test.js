const request = require('supertest')
const app = require('../routes/url.js');


describe('Sample test', () => {
    it('should test endpoints for post', async () => {
        const res = await request(app)
        .post('/shorten')
        .send({
            longUrl : "https://www.amazon.in/IRRFAN-KHAN-MAN-DREAMER-STAR-ebook/dp/B082PLTZVD/ref=pd_rhf_se_s_zg_ebk_0_5/261-2918536-1057144?_encoding=UTF8&pd_rd_i=B082PLTZVD&pd_rd_r=34b95bba-71f8-4f0b-97f9-692a102cdf8f&pd_rd_w=qNuuA&pd_rd_wg=PCW3b&pf_rd_p=6ae19939-ecb3-4591-9f68-18223252d6cd&pf_rd_r=1V45QKBNCPNBFNCAZ8DS&psc=1&refRID=1V45QKBNCPNBFNCAZ8DS"
        })
        expect(res.body).toHaveProperty('_id')
        expect(res.body.longUrl).toBe("https://www.amazon.in/IRRFAN-KHAN-MAN-DREAMER-STAR-ebook/dp/B082PLTZVD/ref=pd_rhf_se_s_zg_ebk_0_5/261-2918536-1057144?_encoding=UTF8&pd_rd_i=B082PLTZVD&pd_rd_r=34b95bba-71f8-4f0b-97f9-692a102cdf8f&pd_rd_w=qNuuA&pd_rd_wg=PCW3b&pf_rd_p=6ae19939-ecb3-4591-9f68-18223252d6cd&pf_rd_r=1V45QKBNCPNBFNCAZ8DS&psc=1&refRID=1V45QKBNCPNBFNCAZ8DS")
        expect(res.body.shortUrl).toHaveProperty("http://localhost:5000/wAfG0rxxc")
    });

});
