const windowsError = require("./windowsError");
const c = require('../../defaultConf.json')

class ErrorLogger extends windowsError
{
    constructor()
    {
        super("loggerError", {
            type: "winError",
            os: c.DefaultOS
        })

        if(!this.currentTarget)
        {
            return console.warn("[ERROR]")
        } else (!this.error) 
        {
            return console.warn("[GENERATING]")
        }
    }
}