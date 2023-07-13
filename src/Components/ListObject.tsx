import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Object } from "./Object";
export function ListObject(){
    const [objects, setObjects] = useState<string[]>([])
    const [name, setName] = useState<string>("")
    return(
        <Box>
            <TextField
                label="Object Name"
                variant="outlined"
                value={name}
                onChange={(event)=>{
                    setName(event.target.value)
                }}
                />
                <Button 
                    onClick={()=>{
                        setObjects([...objects, name])
                        setName("")
                    }
                }>
                    Add Object
                </Button>
            {
                objects.map((object, index)=>{
                    return(
                        <Object
                            key={index}
                            name={object}
                            up={()=>{
                                if (index === 0){
                                    return
                                }
                                const newObjects = [...objects]
                                const temp = newObjects[index]
                                newObjects[index] = newObjects[index-1]
                                newObjects[index-1] = temp
                                setObjects(newObjects)
                            }}
                            down={()=>{
                                if (index === objects.length-1){
                                    return
                                }
                                const newObjects = [...objects]
                                const temp = newObjects[index]
                                newObjects[index] = newObjects[index+1]
                                newObjects[index+1] = temp
                                setObjects(newObjects)
                            }}
                        />
                    )
                }
            )}
            <Button
                onClick={()=>{
                    const json = JSON.stringify(objects)
                    const blob = new Blob([json], {type: "application/json"})
                    const href = URL.createObjectURL(blob)
                    const link = document.createElement("a")
                    link.href = href
                    link.download = "objects.json"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                }
            }>
                saveInJson
            </Button>
 <Button
                onClick={()=>{
                    //import from json
                    const jsonData = data.objectsListJson as string[]
                    setObjects(jsonData)
                }
            }>
                importFromJson
            </Button>

        </Box>
    )
}
