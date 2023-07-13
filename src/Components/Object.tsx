import { Button, Stack, Typography } from "@mui/material";

export interface ObjectProps{
    name:string
    up:()=>void
    down:()=>void
}

export function Object(props:ObjectProps){

    return(
        <Stack
            direction="row"
        >
            <Button
                onClick={props.up}
                >
                UP
            </Button>
            <Button
                onClick={props.down}
                >
                DOWN
            </Button>
            <Typography
                variant="h4"
                >
                {props.name}
            </Typography>        

        </Stack>
    )
}