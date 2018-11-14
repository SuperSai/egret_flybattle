interface IEntity {

    /** 数据 */
    data: any;
    /**
     * Add component.
     * @param {IComponent} component
     * @param vo
     * @param removeNull
     * @returns {IComponent} Returns component that was added. (For chaining)
     */
    addComponent(component: IComponent | string, vo: any, removeNull?: boolean): IComponent;

    /**
     * Removes component by reference or name.
     * @param {IComponent|string} component
     * @returns {boolean} Returns component that was removed.
     */
    removeComponent(component: IComponent | string): boolean;


    /**
     * Checks if the component reference exists.
     * @param {IComponent|string} component
     * @returns {boolean} Returns true or false.
     */
    hasComponent(component: IComponent | string): boolean;


    hasComponents(componentNames: string[]): boolean


    /**
     * Returns the component by name or null if not found.
     * @param {string} name
     * @param defaultValue (optional)
     * @returns {IComponent|null}
     */
    getComponent(name: string, defaultValue?: any): any;

    getComponents(names: string[]): IComponent[];

    components: TSDictionary<string, IComponent>;

    setupPos(posX: number, posY: number): void;

    setupCamp(camp: number): void
    setupType(type: number): void

    /**
     * @optional
     * Call on tick to update this entity and all children.
     */
    updateComponents?(): void;

    /**
     * @optional
     * Call to dispose this entity and children.
     */
    removeComponents?(): void;

}