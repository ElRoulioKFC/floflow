import * as React from 'react';

import { Button, ButtonGroup, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { PlugboardType, TestPlugboardType } from "../Commons";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export interface PlugBoardProps {
    plug : PlugboardType | TestPlugboardType;
    setLetter: (letter: string) => void;
    highLightLetterIn: number;
    highLightLetterOut: number;
    highLightLetterTransformIn: number;
    highLightLetterTransformOut: number;

}

export function PlugBoard(props: PlugBoardProps) {


    const createLetterButton = (letter: string) => {
        if (props.highLightLetterIn === props.plug.alphabet.indexOf(letter)) {

            return (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.setLetter(letter)}
                    key={letter + "plug"}
                    sx={{
                        bgcolor: "green",
                        color: "white",
                    }}
                >
                    {letter}
                </Button>
            )
        }
        else if(props.highLightLetterOut === props.plug.alphabet.indexOf(letter)){
            return (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.setLetter(letter)}
                    key={letter + "plug"}
                    sx={{
                        bgcolor: "red",
                        color: "white",
                    }}
                >
                    {letter}
                </Button>
            )
        }
        else{
            return (
                <Button
                    variant="contained"
                    color="primary"
                    key={letter + "plug"}
                    onClick={() => props.setLetter(letter)}
                >
                    {letter}
                </Button>
            )
        }
    }
    const createLetterButtons = () => {
        return props.plug.alphabet.map((letter, index) => {
            return createLetterButton(letter)
        })
    }
    const createButtonGroup = () => {
        return (
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {createLetterButtons()}
            </ButtonGroup>
        )
    }
    const createLetterButtonTransformed = (letter: string) => {
        if (props.highLightLetterIn === props.plug.alphabetTransformed.indexOf(letter)) {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        bgcolor: "green",
                        color: "white",
                    }}
                    key={letter + "plugOut"}

                >
                    {letter}
                </Button>
            )
        }
        else if(props.highLightLetterOut === props.plug.alphabetTransformed.indexOf(letter)){
            return (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        bgcolor: "red",
                        color: "white",
                    }}
                    key={letter + "plugOut"}
                >
                    {letter}
                </Button>
            )
        }
        else{
            return (
                <Button
                    key={letter + "plugOut"}
                    variant="contained"
                    color="primary"
                >
                    {letter}
                </Button>
            )
        }
    }
    const createLetterButtonsTransformed = () => {
        return props.plug.alphabetTransformed.map((letter, index) => {
            return createLetterButtonTransformed(letter)
        })
    }
    const createButtonGroupTransformed = () => {
        return (
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {createLetterButtonsTransformed()}
            </ButtonGroup>
        )
    }

        
                
    

  return(
    <Stack
        key={props.highLightLetterIn}
        sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        {createButtonGroup()}
        {createButtonGroupTransformed()}
    </Stack>
    )
}