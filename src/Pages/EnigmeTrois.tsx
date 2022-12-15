import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Typography } from "@mui/material";
export function EnigmeTrois() {

    const [gridValues, setGridValues] = React.useState<number[]>([25, 50]);

    const getButtons = (start: number, end: number) => {
        const buttons: ReactJSXElement[] = [];
        for (let i = start; i < end; i++) {
            buttons.push(
                <Button
                    key={i}
                    variant={gridValues.indexOf(i) === -1 ? "outlined" : "contained"}
                    onClick={() => {
                        if (gridValues.indexOf(i) === -1) {
                            setGridValues([...gridValues, i]);
                            return;
                        }
                        else {
                            setGridValues(gridValues.filter((value) => value !== i));
                        }
                    }}
                >
                    {"   "}
                </Button>
            );
        }
        return buttons;
    }
    const testF = () => {
        if (gridValues.length < 54 || gridValues.length > 56) {
            return false;
        }
        let a = 0, b = 1, f = 1;
        let valTab = [0,1]
        for (let i = 2; i < 9; i++) {
            f = a + b;
            a = b;
            b = f;
            valTab.push(f)
        }
        let indiceTab:number[] = []
        let addPlace = 0
        for (let i = 0; i<valTab.length; i++) {

            for (let j = 0; j<valTab[i]; j++) {
                indiceTab.push(addPlace)
                addPlace += 1
            }
            addPlace += 25-valTab[i]
        }
        let testUn:Boolean = (indiceTab.every((value, index) => gridValues.indexOf(value) !== -1))
        let testDeux:Boolean = (gridValues.every((value, index) => indiceTab.indexOf(value) !== -1))
        return (testUn && testDeux)
    }

    return (
        <>
            <div>
                <p>
                    {gridValues.length === 224 || gridValues.length === 0 ? window.location.href = "https://bit.ly/responseToEnigma" : <></>}
                    <a hidden href="https://bit.ly/responseToEnigma">
                    </a>
                </p>
            </div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                    height: "50rm"
                }}
            >
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(0, 25)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(25, 50)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(50, 75)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(75, 100)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(100, 125)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(125, 150)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(150, 175)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(175, 200)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="row button group"
                >
                    {getButtons(200, 225)}
                </ButtonGroup>
            </Box>
            <div>
                <p>
                    {testF() ? <Typography variant="h4">  Le crime s'est déroulé dans le bâtiment fib(6)</Typography> : <></>}
                    <a hidden href="https://bit.ly/responseToEnigma">
                    </a>
                </p>
            </div>
        </>
    );
}