import { atom, selector } from "recoil";

const filterInfo = atom({
  key: "filterInfo",
  default: false,
});

const checkFilter = selector({
  key: "checkFilter",
  get: ({ get }) => {
    const check = get(filterInfo);
    return check;
  },
});

export { checkFilter, filterInfo };
