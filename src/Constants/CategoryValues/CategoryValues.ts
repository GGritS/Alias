export type DifficultyItem = {
  title: string;
  subTitle: string;
  exampleWords: string;
  wordCount: number;
  gameWords: string[];
};

const easyWords: string[] = [
  "слово",
  "дорога",
  "алфавит",
  "имя",
  "песок",
  "алмаз",
  "лопата",
];
const mediumWords: string[] = [
  "Кальян",
  "Ноутбук",
  "Яблоко",
  "Чашка",
  "Мундштук",
  "Шорты",
];
const hardWords: string[] = ["Шизофрения", "Дверь", "Анаконда", "Окно", "Роза"];

export const difficultyLevel: DifficultyItem[] = [
  {
    title: "Быстрая игра",
    subTitle: "Легкий",
    exampleWords: "кекс, луг, тень",
    wordCount: easyWords.length,
    gameWords: [...easyWords],
  },
  {
    title: "Оптимус",
    subTitle: "Средний",
    exampleWords: "арсенал, интерьер, музыка",
    wordCount: mediumWords.length,
    gameWords: [...mediumWords],
  },
  {
    title: "Мозговой штурм",
    subTitle: "Сложный",
    exampleWords: "",
    wordCount: hardWords.length,
    gameWords: [...hardWords],
  },
];
