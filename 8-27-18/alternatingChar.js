function alternatingCharacters(s) {
    var deletion = 0;
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'A'){
            if(s[i+1] == 'A'){
                deletion++
            }
        } else if(s[i] == 'B'){
            if(s[i+1] == 'B'){
                deletion++
            }
        }
    }
    return deletion
}