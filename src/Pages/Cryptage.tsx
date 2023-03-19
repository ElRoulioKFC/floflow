import { MenuItem, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { createPlugboardType, RotorType, RotorI,RotorII,RotorIII,RotorIV,RotorV,stringToRotor,TestRotorVI,TestRotorVII,TestRotorVIII, rollRotor } from "../Commons";
import { createTestPlugboardType, PlugboardType, TestPlugboardType } from "../Commons";
import { Enigma } from "../Components/Enigma";
import { Plugs } from "../Components/Plugs";


//show how enigmaworks  and how to use it
export function Cryptage() {
    const createListFromPlugboardSize = (plug:PlugboardType|TestPlugboardType) => {
        if (plug.size === 26){
            const list = [];
            for (let i = 0; i < 11; i++) {
                list.push({
                    value: i,
                    label: i,
                });
            }
            return list;
        }
        else{
            const list = [];
            for (let i = 0; i < 3; i++) {
                list.push({
                    value: i,
                    label: i,
                });
            }
            return list;
        }
        
    };
    const createListFromRotorSize = (rot:RotorType) => {
        const list = [];
        for (let i = 0; i < rot.size; i++) {
            list.push({
                value: i,
                label: i,
            });
        }
        return list;
    };

    const rotor = [
        {
            value: RotorI.name,
            label: RotorI.name,
        },
        {
            value: RotorII.name,
            label: RotorII.name,
        },
        {
            value: RotorIII.name,
            label: RotorIII.name,
        },
        {
            value: RotorIV.name,
            label: RotorIV.name,
        },
        {
            value: RotorV.name,
            label: RotorV.name,
        },
    ];

    const rotorTest = [
        {
            value: TestRotorVI.name,
            label: TestRotorVI.name,
        },
        {
            value: TestRotorVII.name,
            label: TestRotorVII.name,
        },
        {
            value: TestRotorVIII.name,
            label: TestRotorVIII.name,
        },
    ];
    const testOrRotor = [
        {
            value: 0,
            label: "Rotor",
        },
        {
            value: 1,
            label: "TestRotor",
        },
    ]
    const [rotorType, setRotorType] = React.useState<Number>(testOrRotor[0].value);
    const [rotorList, setRotorList] = React.useState({
        rotor1: RotorI,
        rotor2: RotorII,
        rotor3: RotorIII,
    });
    const [numberPlugged, setNumberPlugged] = React.useState<number>(10);
    const [plugboard, setPlugboard] = React.useState<PlugboardType |TestPlugboardType>(createPlugboardType([["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"]]));
    const [changeLetter, setChangeLetter] = React.useState<string[][]>([["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"]]);
    return (
        <Stack
            flexDirection = "column"
            justifyContent = "center"
            alignItems = "center"
            spacing = {2}
        >
            <Typography  variant="h4">Enigma</Typography>
            <TextField
                id="outlined-select-currency"
                select
                label="type"
                defaultValue={testOrRotor[0].value}
                size='small'
                onChange={(event) => {
                    setRotorType(Number(event.target.value));
                    if (Number(event.target.value) === 0) {
                        setRotorList({
                            rotor1: RotorI,
                            rotor2: RotorII,
                            rotor3: RotorIII,
                        });
                        setPlugboard(createPlugboardType([]));
                        setNumberPlugged(0);
                    } else {
                        setRotorList({
                            rotor1: TestRotorVI,
                            rotor2: TestRotorVII,
                            rotor3: TestRotorVIII,
                        });
                        setPlugboard(createTestPlugboardType([]));
                        setNumberPlugged(0);
                    }
                }}
            >
                {testOrRotor.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
                    <Stack
                        sx={{ 
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            spacing: 2,
                        }}
                    >
            <TextField
                id="outlined-select-currency"
                select
                label="ROTOR 1"
                defaultValue={rotorList.rotor1.name}
                size='small'
                onChange={(event) => {
                    setRotorList({
                        ...rotorList,
                        rotor1: stringToRotor(event.target.value),
                    });
                }}
                sx={{
                    padding : 2,
                }}
            >
                {rotorType === 0 ? rotor.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                )) : rotorTest.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="ROTOR 2"
                defaultValue={rotorList.rotor2.name}
                size='small'
                onChange={(event) => {
                    setRotorList({
                        ...rotorList,
                        rotor2: stringToRotor(event.target.value),
                    });
                }}
                sx={{
                    padding : 2,
                }}
            >
                {rotorType === 0 ? rotor.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                )) : rotorTest.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="ROTOR 3"
                defaultValue={rotorList.rotor3.name}
                size='small'
                onChange={(event) => {
                    setRotorList({
                        ...rotorList,
                        rotor3: stringToRotor(event.target.value),
                    });
                }}
                sx={{
                    padding : 2,
                }}
            >
                {rotorType === 0 ? rotor.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                )) : rotorTest.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </Stack>
            <Typography variant="h4">Choose roll initial for rotors</Typography>

            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    spacing: 2,
                }}
            >
            <TextField
                id="outlined-select-currency"
                select
                label="ROTOR 1"
                defaultValue={0}
                size='small'
                onChange={(event) => {
                    let rotor = rotorList.rotor1;
                    rotor.roll = Number(event.target.value);
                    rotor = rollRotor(rotor);
                    setRotorList({  
                        ...rotorList,
                        rotor1 : rotor,
                    });
                }}
                sx={{
                    padding : 2,
                }}
            >
                {createListFromRotorSize(rotorList.rotor1).map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="ROTOR 2"
                defaultValue={0}
                size='small'
                onChange={(event) => {
                    let rotor = rotorList.rotor2;
                    rotor.roll = Number(event.target.value);
                    rotor = rollRotor(rotor);
                    setRotorList({  
                        ...rotorList,
                        rotor2 : rotor,
                    });
                }}
                sx={{
                    padding : 2,
                }}
            >
                {createListFromRotorSize(rotorList.rotor2).map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="ROTOR 3"
                defaultValue={0}
                size='small'
                onChange={(event) => {
                    let rotor = rotorList.rotor3;
                    rotor.roll = Number(event.target.value);
                    rotor = rollRotor(rotor);
                    setRotorList({  
                        ...rotorList,
                        rotor3 : rotor,
                    });
                }}
                sx={{
                    padding : 2,
                }}
            >
                {createListFromRotorSize(rotorList.rotor3).map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                
            </TextField>
            </Stack>
            <Stack
                sx={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    spacing: 5,
                }}
            >
               {/* <Typography variant="h4">Choose number of letter changed in plugboard </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="PlugboardNumber"
                    defaultValue={numberPlugged}
                    size='small'
                    onChange={(event) => {
                        setNumberPlugged(Number(event.target.value));
                        setChangeLetter(createCoupleOfLetter(numberPlugged,plugboard));
                    }}
                >
                    {createListFromPlugboardSize(plugboard).map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    </TextField>*/}
                    <Stack
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            spacing: 2,
                        }}
                    >
                <Typography variant="h4">Choose letter changed in plugboard </Typography>
                <Plugs
                    nbLetter={numberPlugged}
                    plug={plugboard}
                    setPlug={setPlugboard}
                    changeLetter={changeLetter === undefined? [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"]] : changeLetter}
                    setLetter={setChangeLetter}
                />
                </Stack>


        </Stack>



        <Stack
            sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                spacing: 5,
            }}
        >
            <Enigma
                rotorI={rotorList.rotor1}
                rotorII={rotorList.rotor2}
                rotorIII={rotorList.rotor3}
                plug={plugboard}
            />
            



            </Stack>
        </Stack>



    );
}