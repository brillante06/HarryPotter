export type wandInfo = {
    wood: string
    core: string
    length: Number
}
interface Character  {
    actor: string
    alive: boolean
    ancestry: boolean
    dateOfBirth: Date
    eyeColour: string
    gender: "male" | "female"
    hairColour: string
    hogwartsStaff: boolean
    hogwartsStudent: boolean
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