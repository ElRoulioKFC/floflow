import { Button, ButtonGroup, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { RotorType } from "../Commons";

export interface RotorProps {
    highLightIn: number;
    highLightOut: number;

    highLightIn2: number;
    highLightOut2: number;
 
    rotor: RotorType,
}

export function Rotor(props: RotorProps) {
    const createLetterButton = (letter: string,path:string) => {
        if ((props.highLightIn === props.rotor.alphabet.indexOf(letter)&& path === "in" )|| (props.highLightIn2 === props.rotor.alphabetTransformed.indexOf(letter)&& path === "out") ) {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        bgcolor: "green",
                        color: "white",
                    }}
                    key = {letter + "rotor" + path}
                >
                    {letter}
                </Button>
            )
        }
        else if((props.highLightOut === props.rotor.alphabetTransformed.indexOf(letter) &&path==="out")|| (props.highLightOut2 === props.rotor.alphabet.indexOf(letter) && path === "in")) {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        bgcolor: "red",
                        color: "white",
                    }}
                    key = {letter + "rotor" + path}
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
                    key = {letter + "rotor" + path}
                >
                    {letter}
                </Button>
            )
        }
    }
    const createLetterButtons = () => {
        return props.rotor.alphabet.map((letter, index) => {
            return createLetterButton(letter,"in")
        })
    }
    const createButtonGroup = () => {
        return (
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {createLetterButtons()}
            </ButtonGroup>
        )
    }
    const createLetterButtonOut = () => {
        return props.rotor.alphabetTransformed.map((letter, index) => {
            return createLetterButton(letter,"out")
        })
    }
    const createButtonGroupOut = () => {
        return (
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {createLetterButtonOut()}
            </ButtonGroup>
        )
    }
    
    return (
        <Stack
        sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Typography variant="h4">{props.rotor.name}</Typography>
        {createButtonGroup()}
        {createButtonGroupOut()}
    </Stack>
    );

   
}