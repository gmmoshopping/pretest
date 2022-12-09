const request = require("supertest");
const app = require("../src/app");
const req = request(app);

describe("GET /dashboard", () => {
  it("should return all dashboard", async () => {
    const res = await req.get("/dashboard");
    expect(res.status).toBe(200);
  });
});


describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/addDashboard')
      .send({ '_id': 99999, 'Seed_RepDate': 25640623, 'Seed_Year':2564, 'Seeds_YearWeek':26, 'Seed_Varity':'กข15','Seed_RDCSD':'กรุงเทพ','Seed_Stock2Sale':28675,'Seed_Season':1, 'Seed_Crop_Year':2564  })
    expect(res.statusCode).toEqual(201)    
  })
})