export type RotorType = {
    name: string;
    alphabet: Array<string>;
    alphabetTransformed: Array<string>;
    size: number;
    roll: number;

}

export const RotorI: RotorType = {
    name: "RotorI",
    alphabet: ["E", "K", "M", "F", "L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"],
    alphabetTransformed : ["A","F","L","P","S","W","C","D","G","H","K","N","Q","R","U","X","Y","B","E","I","J","M","O","T","V","Z"],
    size: 26,
    roll: 0
}

export const RotorII: RotorType = {
    name: "RotorII",
    alphabet: ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"],
    alphabetTransformed : ["F","V","P","J","I","A","O","Y","E","D","R","Z","X","W","G","C","T","K","U","Q","S","N","M","B","L","H"], 
    size: 26,
    roll: 0

}

export const RotorIII: RotorType = {
    name: "RotorIII",
    alphabet: ["B", "D", "F", "H", "J", "L", "C", "P", "R", "T", "X", "V", "Z", "N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"],
    alphabetTransformed : ["B","K","D","Q","E","F","G","J","H","L","C","P","R","T","X","V","Z","N","Y","I","W","A","M","U","S","O"],
    size: 26,
    roll: 0
}

export const RotorIV: RotorType = {
    name: "RotorIV",
    alphabet: ["E", "S", "O", "V", "P", "Z", "J", "A", "Y", "Q", "U", "I", "R", "H", "X", "L", "N", "F", "T", "G", "K", "D", "C", "M", "W", "B"],
    alphabetTransformed : ["E","S","O","V","P","Z","J","A","Y","Q","U","I","R","H","X","L","N","F","T","G","K","D","C","M","W","B"],
    size: 26,
    roll: 0
}

export const RotorV: RotorType = {
    name: "RotorV",
    alphabet: ["V", "Z", "B", "R", "G", "I", "T", "Y", "U", "P", "S", "D", "N", "H", "L", "X", "A", "W", "M", "J", "Q", "O", "F", "E", "C", "K"],
    alphabetTransformed : ["V","Z","B","R","G","I","T","Y","U","P","S","D","N","H","L","X","A","W","M","J","Q","O","F","E","C","K"],
    size: 26,
    roll: 0
}

export const TestRotorVI: RotorType = {
    name: "TestRotorVI",
    alphabet: ["A","H", "C","B","G","F","E","D"],
    alphabetTransformed : ["C","A","G","F","B","H","E","D"],
    size : 8,
    roll: 0
}

export const TestRotorVII: RotorType = {
    name: "TestRotorVII",
    alphabet: ["F", "A","B","H","C","D","E","H","G"],
    alphabetTransformed : ["H","F","A","B","C","H","D","G","E"],
    size : 8,
    roll: 0
}

export const TestRotorVIII: RotorType = {
    name: "TestRotorVIII",
    alphabet: ["D","B","G","A","C","H","E","F"],
    alphabetTransformed : ["D","C","H","E","F","B","G","A"],
    size : 8,
    roll: 0
}

export const stringToRotor = (name: string): RotorType => {
    switch (name) {
        case "RotorI":
            return RotorI;
        case "RotorII":
            return RotorII;
        case "RotorIII":
            return RotorIII;
        case "RotorIV":
            return RotorIV;
        case "RotorV":
            return RotorV;
        case "TestRotorVI":
            return TestRotorVI;
        case "TestRotorVII":
            return TestRotorVII;
        case "TestRotorVIII":
            return TestRotorVIII;
        default:
            return RotorI;
    }
}
export const rollRotor = (rotor:RotorType):RotorType => {
    rotor.alphabetTransformed = rotor.alphabet.map((letter, index) => {
        return rotor.alphabet[(index + rotor.roll) % rotor.alphabet.length];
    }
    )
    return rotor;
}
