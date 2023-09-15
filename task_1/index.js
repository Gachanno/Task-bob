import {encoded, translations} from './data.js';
const decoded = []
const groupId = []
    for (const obj of encoded){
        const decodedObj = []
        for (const key in obj){
            if ("groupId" === key){
                groupId.push(obj[key])
            }
            if ( ["groupId", "service", "formatSize", "ca"].includes(key))
            {
                decodedObj[key] = obj[key]
                continue
            }
            
            decodedObj[key] = translations[obj[key]]
        }
        decoded.push(decodedObj)
    }
console.log(decoded)
console.log(groupId)
console.log("Let's rock")

