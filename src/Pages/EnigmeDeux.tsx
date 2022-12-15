import React from "react";
import { Button, Typography } from "@mui/material";
import logoW from '../assets/Xequal17.png'
export function EnigmeDeux() {
    const [input, setInput] = React.useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        switch (event.key) {
            case 'z':
                setInput("z = 741")
            default:
                break;
        }
    };
    const [opened, setOpened] = React.useState(false);
    const funcY = () => {
        if (opened) {
            return (<>
                y = 98
            </>)
        }
    }
    return (<>
    <div>
                <p>
                    <a hidden href="https://bit.ly/responseToEnigma">

                    </a>
                </p>
            </div>
        <div>
            <Typography variant="h4">Parfois les yeux nous jouent des tours, ou c'est juste le dev qui est nul. (TF)</Typography>
        </div>
        <div>
            {funcY()}
        </div>
        <div style={{ backgroundColor: 'white' }}>
            <Button
                style={{ fontSize: '2rem' }}
                onClick={() => setOpened(true)}
            >
                {' '}
                <span style={{ color: 'white' }}></span>
                {' '}
            </Button>
        </div>
        <div>
                <p>
                    <a hidden href="https://bit.ly/responseToEnigma">

                    </a>
                </p>
            </div>
        <div style={{ height: "50rem", backgroundColor: "white" }}>

        </div>
        <div style={{ height: "50rem", backgroundColor: "white" }}>
            <img src={logoW} alt="logo" style={{ height: "50rem" }} />
        </div>
        <div style={{ height: "50rem", backgroundColor: "white" }}>

        </div>
        <div>
                <p>
                    <a hidden href="https://bit.ly/responseToEnigma">

                    </a>
                </p>
            </div>
        <div style={{ backgroundColor: 'white' }}>
            <p style={{ fontSize: '2rem' }}>
                {' '}
                <span style={{ color: 'white' }}>{
                    "ajouter la valeur de la variable 'x' et celle de la variable 'y' et celle de la variable 'z' à l'url pour accéder à la réponse"
                }</span>
                {' '}
            </p>
        </div>
        <div>
                <p>
                    <a hidden href="https://bit.ly/responseToEnigma">

                    </a>
                </p>
            </div>
        <div
        tabIndex={0}
            onKeyDown={handleKeyDown}>
            <div>Value: "{input}"</div>
        </div>
        <div>
                <p>
                    <a hidden href="https://bit.ly/responseToEnigma">

                    </a>
                </p>
            </div>
    </>
    );
}