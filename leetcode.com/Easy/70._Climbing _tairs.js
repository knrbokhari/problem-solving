// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
    let first = 1, second = 0
    for (let i = 0; i <= n;i++) {
        let third = first + second
        second = first
        first = third
    }
    return second
};

console.log(climbStairs(2))
console.log(climbStairs(3))