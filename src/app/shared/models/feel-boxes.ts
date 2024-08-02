type FeelingType = "Felicidad" | "Tristeza" | "Ansiedad";

export interface Feeling {
  date: string;
  description: string;
  feeling: FeelingType;
  imageUrl: string;
}
