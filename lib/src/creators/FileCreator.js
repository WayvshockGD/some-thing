const fs = require('fs')
const c = require('../../../defaultConf.json')

class Creator
{
    constructor()
    {
        super("creator", {
            type: "FileCreator",
            os: c.DefaultOS
        })



        fs.writeFileSync('file', )
    }
}