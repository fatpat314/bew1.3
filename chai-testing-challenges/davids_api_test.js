chai.config.includeStack = true
const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

it('yes should return Aye', (done) => {
    chai.request(app)
    .get(`/translate`)
    .send({text: "yes"})
    .end((err, res) =>{
        if (err) { done(err) }
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('object')
        expect(res.body.translated).to.equal('Aye')
        done()
    })
})
