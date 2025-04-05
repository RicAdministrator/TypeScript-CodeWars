// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/typescript

export function rps(p1: string, p2: string): string {
    interface Combination {
        message: string,
        p1_action: string,
        p2_action: string
    }

    const combinations: readonly Combination[] = [
        { message: "Player 1 won!", p1_action: "rock", p2_action: "scissors" },
        { message: "Player 1 won!", p1_action: "scissors", p2_action: "paper" },
        { message: "Player 1 won!", p1_action: "paper", p2_action: "rock" },
        { message: "Player 2 won!", p1_action: "scissors", p2_action: "rock" },
        { message: "Player 2 won!", p1_action: "paper", p2_action: "scissors" },
        { message: "Player 2 won!", p1_action: "rock", p2_action: "paper" },
        { message: "Draw!", p1_action: "rock", p2_action: "rock" },
        { message: "Draw!", p1_action: "scissors", p2_action: "scissors" },
        { message: "Draw!", p1_action: "paper", p2_action: "paper" }
    ];

    // exclamation mark tells TypeScript that even though something looks like it could be null, 
    // it can trust you that it's not
    return combinations.find((obj) => obj.p1_action === p1 && obj.p2_action === p2)?.message!;
}