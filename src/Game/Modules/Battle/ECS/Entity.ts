class Entity implements IEntity {
    public data: any;
    public name: string;
    public components: TSDictionary<string, IComponent> =
    new TSDictionary<string, IComponent>();

    /**
     * Add component.
     * @param {IComponent} component
     * @param vo
     * @param removeNull
     * @returns {IComponent} Returns component that was added. (For chaining)
     */
    addComponent(component: IComponent | string, vo: any, removeNull: boolean = false): any {
        if (typeof component === "string") {
            let com: IComponent = Entity.createNewComponent(component, vo);
            if (com == null) {
                if (removeNull) ComponentHelper.removeComponent(this.components, component);
                return null;
            }
            return ComponentHelper.addComponent(this.components, com);
        } else {
            return ComponentHelper.addComponent(this.components, component);
        }
    }

    private static createNewComponent(component: string, vo: any): IComponent {
        const clz: any = egret.getDefinitionByName(component);
        if (!clz.canAdd(vo)) return null;
        let com: IComponent = App.ObjectPool.pop(component);
        App.ObjectUtils.copyValue2(com, vo);
        return com;
    }

    /**
     * Removes component by reference or name.
     * @param {IComponent|string} component
     * @returns {boolean} Returns component that was removed.
     */
    removeComponent(component: IComponent | string): boolean {
        return ComponentHelper.removeComponent(this.components, component);
    }

    /**
     * Checks if the component reference exists.
     * @param {IComponent|string} component
     * @returns {boolean} Returns true or false.
     */
    hasComponent(component: IComponent | string): boolean {
        return ComponentHelper.hasComponent(this.components, component);
    }

    /**
     * Checks if the components reference exists.
     * @param {string[]} componentNames
     * @returns {boolean} Returns true or false.
     */
    hasComponents(componentNames: string[]): boolean {
        for (let i: number = 0; i < componentNames.length; i++) {
            if (!this.hasComponent(componentNames[i])) return false;
        }
        return true;
    }

    /**
     * Returns the component by name or null if not found.
     * @param {string} name
     * @param defaultValue (optional)
     * @returns {IComponent|null}
     */
    getComponent(name: string, defaultValue: any = null): any {
        return ComponentHelper.getComponent(this.components, name, defaultValue);
    }

    getComponents(names: string[]): IComponent[] {
        let coms: IComponent[] = [];
        for (let i: number = 0; i < names.length; i++) {
            coms.push(this.getComponent(names[i]))
        }
        return coms;
    }

    /**
     * Call on tick to update this entity and all children.
     */
    updateComponents(): void {

        ComponentHelper.updateComponents(this.components);

    }

    /**
     * Call to dispose this entity and children.
     */
    removeComponents(): void {
        ComponentHelper.removeComponents(this.components);
    }

    setupPos(posX: number, posY: number): void {
        let posCom: PositionCom = this.getComponent(ComponentTypes.Position);
        if (posCom) {
            posCom.point.x = posX;
            posCom.point.y = posY;
        }
        let moveTarget: MoveTargetCom = this.getComponent(ComponentTypes.MoveTarget);
        if (moveTarget) {
            moveTarget.targetX = posX;
            moveTarget.targetY = posY;
        }
    }

    setupCamp(camp: number): void {
        let campCom: CampCom = this.getComponent(ComponentTypes.Camp);
        if (campCom == null) return;
        campCom.camp = camp;
    }

    setupType(type: number): void {
        let typeCom: EntityTypeCom = this.getComponent(ComponentTypes.EntityType);
        if (typeCom == null) return;
        typeCom.type = type;
    }
}