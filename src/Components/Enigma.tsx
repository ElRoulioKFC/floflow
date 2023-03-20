import { Stack } from "@mui/system";
import React from "react";
import { PlugBoard } from "./PlugBoard";
import { PlugboardType, RotorType, TestPlugboardType } from "../Commons";
import { Rotor } from "./Rotor";
import { Typography } from "@mui/material";

export interface EnigmaProps {
    plug: PlugboardType | TestPlugboardType;

    rotorI: RotorType;
    rotorII: RotorType;
    rotorIII: RotorType;

}



export function Enigma(props: EnigmaProps) {
    const reflector = (letterPlace: number) => {
        return letterPlace + 5 % props.plug.alphabet.length;
    }

    const setLetter = (startingLetter: string): void => {
        turnRotor();

        let letterPlace = props.plug.alphabet.indexOf(startingLetter);


        setHighLightLetterIn(letterPlace)

        setHighLightLetterTransformIn(letterPlace)

        let letter = props.plug.alphabetTransformed[letterPlace];

        setHighLightLetterRotor1In(props.rotorI.alphabet.indexOf(letter))
        letterPlace = props.rotorI.alphabet.indexOf(letter);

        setHighLightLetterRotor1In2(letterPlace)

        letter = props.rotorI.alphabetTransformed[props.rotorI.alphabet.indexOf(letter)];

        setHighLightLetterRotor2In(props.rotorII.alphabet.indexOf(letter))

        letterPlace = props.rotorII.alphabet.indexOf(letter);
        setHighLightLetterRotor2In2(letterPlace)

        letter = props.rotorII.alphabetTransformed[props.rotorII.alphabet.indexOf(letter)];

        setHighLightLetterRotor3In(props.rotorIII.alphabet.indexOf(letter))

        letterPlace = props.rotorIII.alphabet.indexOf(letter);
        setHighLightLetterRotor3In2(letterPlace)

        letterPlace = reflector(letterPlace);
        setHighLightLetterRotor3Out(letterPlace)

        setHighLightLetterRotor3Out2(letterPlace)

        letter = props.rotorIII.alphabet[letterPlace];

        letterPlace = props.rotorII.alphabetTransformed.indexOf(letter);
        setHighLightLetterRotor2Out2(letterPlace)

        setHighLightLetterRotor2Out(letterPlace)
        
        letter = props.rotorII.alphabet[letterPlace];
        letterPlace = props.rotorI.alphabetTransformed.indexOf(letter);

        setHighLightLetterRotor1Out2(letterPlace)

        setHighLightLetterRotor1Out(letterPlace)

        letter = props.rotorI.alphabet[letterPlace];
        letterPlace = props.plug.alphabetTransformed.indexOf(letter);

        setHighLightLetterTransformOut(letterPlace)

        setHighLightLetterOut(letterPlace)


    }
    const turnRotor = () => {
        props.rotorI.roll = (props.rotorI.roll + 1) % props.rotorI.alphabet.length;
        props.rotorI.alphabetTransformed = props.rotorI.alphabet.map((letter, index) => {
            return props.rotorI.alphabet[(index + props.rotorI.roll) % props.rotorI.alphabet.length];
        })
        if (props.rotorI.roll === 0) {
            props.rotorII.roll = (props.rotorII.roll + 1) % props.rotorII.alphabet.length;
            props.rotorII.alphabetTransformed = props.rotorII.alphabet.map((letter, index) => {
                return props.rotorII.alphabet[(index + props.rotorII.roll) % props.rotorII.alphabet.length];
            })
            if (props.rotorII.roll === 0) {
                props.rotorIII.roll = (props.rotorIII.roll + 1) % props.rotorIII.alphabet.length;
                props.rotorIII.alphabetTransformed = props.rotorIII.alphabet.map((letter, index) => {
                    return props.rotorIII.alphabet[(index + props.rotorIII.roll) % props.rotorIII.alphabet.length];
                }
                )
            }
        }
    }

    const [highLightLetterIn, setHighLightLetterIn] = React.useState(-1);
    const [highLightLetterOut, setHighLightLetterOut] = React.useState(-1);

    const [highLightLetterTransformIn, setHighLightLetterTransformIn] = React.useState(-1);
    const [highLightLetterTransformOut, setHighLightLetterTransformOut] = React.useState(-1);

    const [highLightLetterRotor1In, setHighLightLetterRotor1In] = React.useState(-1);
    const [highLightLetterRotor1In2, setHighLightLetterRotor1In2] = React.useState(-1);

    const [highLightLetterRotor1Out, setHighLightLetterRotor1Out] = React.useState(-1);
    const [highLightLetterRotor1Out2, setHighLightLetterRotor1Out2] = React.useState(-1);

    const [highLightLetterRotor2In, setHighLightLetterRotor2In] = React.useState(-1);
    const [highLightLetterRotor2In2, setHighLightLetterRotor2In2] = React.useState(-1);

    const [highLightLetterRotor2Out, setHighLightLetterRotor2Out] = React.useState(-1);
    const [highLightLetterRotor2Out2, setHighLightLetterRotor2Out2] = React.useState(-1);

    const [highLightLetterRotor3In, setHighLightLetterRotor3In] = React.useState(-1);
    const [highLightLetterRotor3In2, setHighLightLetterRotor3In2] = React.useState(-1);

    const [highLightLetterRotor3Out, setHighLightLetterRotor3Out] = React.useState(-1);
    const [highLightLetterRotor3Out2, setHighLightLetterRotor3Out2] = React.useState(-1);
    return (
        <Stack
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h4">Enigma</Typography>

            <PlugBoard
                plug={props.plug}
                setLetter={setLetter}
                highLightLetterIn={highLightLetterIn}
                highLightLetterOut={highLightLetterOut}
                highLightLetterTransformIn={highLightLetterTransformIn}
                highLightLetterTransformOut={highLightLetterTransformOut}
            />
            <Rotor
                highLightIn={highLightLetterRotor1In}
                highLightOut={highLightLetterRotor1Out}

                highLightIn2={highLightLetterRotor1In2}
                highLightOut2={highLightLetterRotor1Out2}
                rotor={props.rotorI}
            />
            <Rotor
                highLightIn={highLightLetterRotor2In}
                highLightOut={highLightLetterRotor2Out}

                highLightIn2={highLightLetterRotor2In2}
                highLightOut2={highLightLetterRotor2Out2}
                rotor={props.rotorII}
            />
            <Rotor
                highLightIn={highLightLetterRotor3In}
                highLightOut={highLightLetterRotor3Out}

                highLightIn2={highLightLetterRotor3In2}
                highLightOut2={highLightLetterRotor3Out2}
                rotor={props.rotorIII}
            />


        </Stack>
    );
}

