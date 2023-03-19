//create type for PlugboardType for enigma machine
export type PlugboardType = {
    name: string;
    alphabet: Array<string>;
    alphabetTransformed: Array<string>;
    size: 26;
}
//create function to change x letter to y letter

export function createPlugboardType(letterChanged:string[][]): PlugboardType {
    let plug: PlugboardType = {
        name: "PlugboardType",
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        alphabetTransformed: [],
        size: 26
    }    
    let plugRes = createAlphabetTransformed(plug,letterChanged);
    return plugRes;
}

export type TestPlugboardType = {
    name: string;
    alphabet: Array<string>;
    alphabetTransformed: Array<string>;
    size: 8;
}

export function createTestPlugboardType(letterChanged:string[][]): TestPlugboardType {
    let plug: TestPlugboardType = {
        name: "PlugboardType",
        alphabet: ["A", "B", "C", "D", "E", "F", "G","H"],
        alphabetTransformed: [],
        size: 8
    }
    let plugRes: TestPlugboardType = createTestAlphabetTransformed(plug,letterChanged);
    return plugRes;
}


export function createAlphabetTransformed( plug: PlugboardType,letterChanged:string[][] ): PlugboardType {

        //change letters from alphabetTransformed that are in letterChanged
        plug.alphabetTransformed = [...plug.alphabet]
        let place:number
        let extPlace:number
        for (let i = 0; i < letterChanged.length; i++) {
            place = plug.alphabetTransformed.indexOf(letterChanged[i][0]);
            extPlace = plug.alphabetTransformed.indexOf(letterChanged[i][1]);
            plug.alphabetTransformed[place] = letterChanged[i][1];
            plug.alphabetTransformed[extPlace] = letterChanged[i][0];
        }

    return plug;
}
/*
export function createCoupleOfLetter(nbLetter:number, plug:PlugboardType |TestPlugboardType): string[][]{
    let coupleOfLetter:string[][] = [];
    for (let i = 0; i < nbLetter; i++) {
        coupleOfLetter.push([]);
    }
    let letterInSimpleArray:string[] = [];
    for (let h=0; h < nbLetter; h++){
        for (let i = 0; i < plug.alphabet.length; i++) {
            if (letterInSimpleArray.indexOf(plug.alphabet[i]) === -1){
            
            for (let j = i+1; j < plug.alphabet.length; j++) {
                if (letterInSimpleArray.indexOf(plug.alphabet[j]) === -1){
                    coupleOfLetter[h].push(plug.alphabet[i]+plug.alphabet[j]);
                }
            }
        }
        }
    }
    return coupleOfLetter;


}*/
export function createTestAlphabetTransformed(plug: TestPlugboardType,letterChanged:string[][] ): TestPlugboardType {
    if (plug.alphabetTransformed.length === plug.size){
        return plug;
    }
    else{
        //change letters from alphabetTransformed that are in letterChanged
        plug.alphabetTransformed = plug.alphabet;
        let place:number
        for (let i = 0; i < letterChanged.length; i++) {
            for (let j = 0; j < plug.alphabet.length; j++) {
                if (letterChanged[i][0] === plug.alphabet[j]){
                    plug.alphabetTransformed[j] = letterChanged[i][1];
                    place = plug.alphabetTransformed.indexOf(letterChanged[i][1]);
                    plug.alphabetTransformed[place] = letterChanged[i][0];
                }
            }
        }


    }
    return plug;
}

