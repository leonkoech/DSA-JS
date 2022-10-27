
var MapSum = function() {
    this.root = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    // the key will be the index of the trie    // root will have an array
    // the key will be a key // root will be a hashmap
    this.root[key] = {}
    let node = this.root[key]
    for(let char of key){
        if(!node[char]) {
            node.val = val
            node[char] = {}
        }
        node = node[char]
    }
    node.isEnd = true
    
    
};

MapSum.prototype.startsWith = function(prefix,key) {
        let node = this.root[key]
        for(let char of prefix){
            if(!node[char]) {
                return null
            }
            node=node[char]
        }
        return true
}

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    // loops through the root dict values
    // performs a search
    let node = this.root
    let count = 0
    console.log(Object.values(node))
    for(let [key,val] of Object.entries(node)){
            if(this.startsWith(prefix,key)){
                
                count+=parseInt(node[key].val)
            }
    }
    return count
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */