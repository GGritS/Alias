export type settingsItems = {
  title: string;
  subtitle: string;
  presenceOfARangeInput: boolean;
  rangeInputSettings: rangeInputSettings;
  presenceOfACounter: boolean;
};

export type rangeInputSettings = {
  minValue: number;
  maxValue: number;
  defaultValue: number;
};

export const settingsItems: settingsItems[] = [
  {
    title: "Количество слов",
    subtitle: "для достижения победы",
    presenceOfARangeInput: true,
    rangeInputSettings: {
      defaultValue: 30,
      minValue: 10,
      maxValue: 200,
    },
    presenceOfACounter: true,
  },
  {
    title: "Время раунда",
    subtitle: "продолжительность в секундах",
    presenceOfARangeInput: true,
    rangeInputSettings: {
      defaultValue: 60,
      minValue: 10,
      maxValue: 120,
    },
    presenceOfACounter: true,
  },
  {
    title: "Штраф за пропуск",
    subtitle: "каждое пропущенное слово отнимает очко",
    presenceOfARangeInput: false,
    rangeInputSettings: {
      defaultValue: 0,
      minValue: 0,
      maxValue: 0,
    },
    presenceOfACounter: false,
  },
];
