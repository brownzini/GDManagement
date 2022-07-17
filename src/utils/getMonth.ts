import months from "./months";

export default function getMonth(key:string):string {
    const result = months.find(month => month.key === key);
    return result.name;
}