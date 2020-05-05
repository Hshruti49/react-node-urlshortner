const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url')

//@route POST /api/url/bulkurls
//@desc Create short URLs

router.post('/bulkurls', async (req, res) => {
    const longUrl =  req.body.longUrl
    const baseUrl = config.get('baseUrl')

    //check base url
    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid Base Url');
    }

    let newLongUrlArr = await Promise.all(longUrl.length && longUrl.map(async (item) => {
        //check long url is valid or not
        if(validUrl.isUri(item)) {
            try {
                let url = await Url.findOne({item})
                if(url) {
                    return url
                }
                else {
                    //create url code
                    const urlCode = shortid.generate();
                    const shortUrl = baseUrl + '/' + urlCode;
                    url = new Url({
                        longUrl : item,
                        shortUrl,
                        urlCode,
                        date: new Date(),
                        count: 0
                    });
                    await url.save()
                    return url
                }
            }
            catch(err) {
                console.error(err);
                res.status(500).json('Server error')
            }
        } else {
            res.status(401).json('Invalid long url')
        }
    }));
    res.json(newLongUrlArr);
});


module.exports = router;