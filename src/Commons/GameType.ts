export type Object ={
    description: string;
    name: string;
    id: number;
    content: string|undefined;
    typeOfContent : string|undefined;
}
export type GameType = {
    id: number;
    name: string;
    description: string;

}
export type Room = {
    id: number;
    namePre: string;
    namePost: string;
    roomTransform : Room;
    triggerTransform : Trigger;
}
export type Trigger = {
    id: number;
    name: string;
    event: boolean[];
}
export type Player = {
    id: number;
    name: string;
    inventory: Object[];
    room: Room;
}