export interface MyChracterResponse {
  characters: CharacterInfo[];
}
export interface CharacterInfo {
  id: number;
  name: string;
  img: string;
  level: number;
  description: string;
  exp: number;
}
