const c = require('../../../defaultConf.json')

class types extends MimeTypeArray
{
    constructor(types)
    {
        super(types, 
        {
            type: "types",
            os: c.DefaultOS
        })

        if(this.item === null) 
        {
            return Error;
        }

        this.brod = BroadcastChannel()

        this.brod(globalThis.Array === decodeURIComponent(this.namedItem))
        .then(fetch => fetch)

        if(!this.item) 
        {
            return Error.then(dispatchEvent(eval.toString()))
        }

        const fs = require('fs')

        fs.writeFileSync('logFile.txt', '[AUTOMATIC WRITE]\n\nGENERATED FILES\n\nCONNECTED', (err) => {

            if(err) throw err

            console.info('[GENERATED FILES]')
        })

    }
}

module.exports = types;