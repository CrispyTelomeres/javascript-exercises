const repeatString = function(string, iterations) {   
    if (iterations < 0) {
        return "ERROR";
    } else {
        let answer = "";
        for (let i = 0; i < iterations; i++) {
            answer += string;
        }
        return answer;
    }   
};

// Do not edit below this line
module.exports = repeatString;
