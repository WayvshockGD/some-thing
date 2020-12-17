const fs = require('fs');
const Paths = require('../src/config/filePaths');
const c = require('../../defaultConf.json')

class windowsError extends ErrorEvent
{
    constructor(error)
    {
        super(error, {
            type: "error",
            os: c.DefaultOS
        })

        this.currentTarget(Paths.files);

        this.fileCreator = fs.readdirSync(Paths.creator)

        if(this.currentTarget) 
        {
            
            console.warn('No files Detected! Creating new...')
            .then(
                new this.fileCreator()
            )
            
            throw new Error("looks like you dont have files! Generating...")
        }
    }
}

module.exports = windowsError;