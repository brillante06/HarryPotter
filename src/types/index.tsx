export type wandInfo = {
    wood: string
    core: string
    length: string
}
export interface Character  {
    actor: string
    alive: string
    ancestry: string
    dateOfBirth: string
    eyeColour: string
    gender: "male" | "female"
    hairColour: string
    hogwartsStaff: Boolean
    hogwartsStudent: Boolean
    house: string
    image: string
    name: string
    patronus: string
    species: string
    wand: wandInfo
    yearOfBirth: Number
}
export type simpleInfo = Pick<Character, "actor" | "name" | "image">
export type characterInfo = Partial<Character>