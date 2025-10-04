"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rps = void 0;
function rps(p1, p2) {
    var _a;
    const combinations = [
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
    return (_a = combinations.find((obj) => obj.p1_action === p1 && obj.p2_action === p2)) === null || _a === void 0 ? void 0 : _a.message;
}
exports.rps = rps;
//# sourceMappingURL=a_8kyu_rock_paper_scissors.js.map