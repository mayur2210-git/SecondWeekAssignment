// Function to compute the nth Fibonacci number using iteration
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let first = 0;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        const next = first + second;
        first = second;
        second = next;
    }

    return second;
}

// function calls
console.log("Fibonacci(5):", fibonacci(10));   // 55

