

router.get('/translate', (req, res) => {
    Translation.findOne({text: req.body.text}))
    .then(result => {
        res.json(result)
    }).catch(err => {
        throw err.message
    })

} )
