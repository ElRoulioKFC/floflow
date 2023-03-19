import { MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { createPlugboardType, PlugboardType, TestPlugboardType } from "../Commons";

export interface PlugsProps {
    plug: PlugboardType | TestPlugboardType;
    nbLetter: number;
    setPlug: (plug: PlugboardType | TestPlugboardType) => void;
    changeLetter: string[][];
    setLetter: (letter: string[][]) => void;

}

export function Plugs(props: PlugsProps) {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const createTextField = (place: number) => {

        return (
            <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "center" }}
                key={place}
            >
            <TextField
                id="outlined-select-currency"
                select
                label="Letter"
                key={place + "1"}
                value={props.changeLetter[place][0]}
                onChange={(event) => {
                    let newLetter = props.changeLetter;
                    newLetter[place][0] = event.target.value;
                    props.setLetter(newLetter);
                    props.setPlug(createPlugboardType(newLetter));
                }}
            >
                {createMenuItems(place)}
            </TextField>
            {"=>"}
            <TextField
                id="outlined-select-currency"
                select
                label="Letter"
                key={place + "2"}
                value={props.changeLetter[place][1]}
                onChange={(event) => {
                    let newLetter = props.changeLetter;
                    newLetter[place][1] = event.target.value;
                    props.setLetter(newLetter);
                    props.setPlug(createPlugboardType(newLetter));
                }}
            >
                {createMenuItems(place)}
            </TextField>
            /
            </Stack>

        )
    }
    const createMenuItems = (place:number) => {
        let menuItems: JSX.Element[] = [];
        for (let i = 0; i < alphabet.length; i++) {
            menuItems.push(
                <MenuItem key={i + "" + place} value={alphabet[i]}>
                    {alphabet[i]}
                </MenuItem>
            )
        }
        return menuItems;
    }
    const createTextFields = () => {
        let textFields: JSX.Element[] = [];
        for (let i = 0; i < 10; i++) {
            textFields.push(createTextField(i));
        }
        return textFields;
    }
    return (
        <Stack
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                spacing: 2,
            }}
        >
            {createTextFields()}

        </Stack>
    )
}