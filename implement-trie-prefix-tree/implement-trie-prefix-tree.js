
var Trie = function() {
    // initialize as object
    this.root = {}
    // this.root.isEnd = false
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    word.split('').forEach((char)=>{
        if(!node[char]){
            node[char]={}
        }
        node = node[char]
    })
    node.isEnd = true
};
Trie.prototype.searchWord = function(word){
    let node = this.root
    for(let char of word.split("")){
        if(!node[char]){
            return null
        }
        else{
            node = node[char]
        }
        
    }
    return node
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
   let ans = this.searchWord(word)
    return ans!=null?ans.isEnd==true:false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let ans = this.searchWord(prefix)
    return ans!=null
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */