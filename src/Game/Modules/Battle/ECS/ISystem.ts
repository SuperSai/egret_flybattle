interface ISystem {
    name:string;
    excute(...arg);
    getNeededComponents():string[];
    initialize?();
}