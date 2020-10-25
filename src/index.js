module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (const ch of str.split(""))
    {
        switch (ch)
        {
            case "(":
                stack.push(1) ;
                break;
            case "[":
                stack.push(2);
                break;
            case "{":
                stack.push(3);
                break;
            case "}":
                if (stack[stack.length - 1] != 3) return false;
                stack.pop();
                break;
            case "]":
                if (stack[stack.length - 1] != 2) return false;
                stack.pop();
                break;
            case ")":
                if (stack[stack.length - 1] != 1) return false;
                stack.pop();
                break;
            default:
                break;
        }
    }
    return stack.length == 0;
}  
