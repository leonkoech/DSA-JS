/**
 * @param {string[]} emails
 * @return {number}
 */
var getLocalName = (name) => {
    // rules
    // . word mergedd
    // + words ignored after
    var string = ''
    for (let i=0;i<name.length;i++){
        if(name[i]==="+"){
            break
        }
        if(name[i]==='.'){
            continue
        }
        string += name[i]
    }
    return string
}

var numUniqueEmails = function(emails) {
    // what  is the username sent to
    // what is the domain sent to
    // merge the two and make sure they're unique
    var mSet = new Set()
    for (let i=0;i<emails.length;i++){
        let email = emails[i].split("@")
        mSet.add(`${getLocalName(email[0])}@${email[1]}`)
    }
    return mSet.size
};