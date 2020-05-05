const request = require('supertest')
const app = require('../routes/url.js');


describe('Sample test', () => {
    it('should test bulk urls to be post', async () => {
        const res = await request(app)
        .post('/shorten')
        .send({
            longUrl : ["https://www.amazon.in/Maqbool-Vishal-Bhardwaj-ebook/dp/B00PFWH46G?pf_rd_r=GDK5MGP16RDPAYK8GRNK&pf_rd_p=cf2644f2-1964-492d-94e4-e624f0d9f42e&pd_rd_r=04fd04f8-2199-4b4f-b93c-03bfb00610b8&pd_rd_w=TeWRJ&pd_rd_wg=exb8r&ref_=pd_gw_ci_mcx_mr_hp_d", "https://www.amazon.in/Mi-10000mAH-Li-Polymer-Power-Charging/dp/B07VZRJQX1/ref=lp_20954496031_1_2?s=electronics&ie=UTF8&qid=1588705570&sr=1-2"]
        })
        expect(res.body).toHaveProperty('_id')
        expect(res.body.longUrl).toBe("https://www.amazon.in/Maqbool-Vishal-Bhardwaj-ebook/dp/B00PFWH46G?pf_rd_r=GDK5MGP16RDPAYK8GRNK&pf_rd_p=cf2644f2-1964-492d-94e4-e624f0d9f42e&pd_rd_r=04fd04f8-2199-4b4f-b93c-03bfb00610b8&pd_rd_w=TeWRJ&pd_rd_wg=exb8r&ref_=pd_gw_ci_mcx_mr_hp_d")
    });

});
