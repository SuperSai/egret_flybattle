class ComponentHelper {

    static addComponent(collection: TSDictionary<string, IComponent>,
        component: IComponent): IComponent {
        let lastComponent: IComponent = collection.TryGetValue(component.componentName);
        if (lastComponent) ComponentHelper.removeComponent(collection, lastComponent);
        collection.SetDicValue(component.componentName, component);
        if (component != null && component.onAdded != null)
            component.onAdded();
        return component;
    }

    static removeComponent(collection: TSDictionary<string, IComponent>,
        component: IComponent | string): boolean {
        let name: string = ComponentHelper.getComponentName(component);
        if (collection.ContainsKey(name)) {
            let comp: IComponent = collection.TryGetValue(name);
            if (comp != null && comp.onRemoved != null)
                comp.onRemoved();
            collection.Remove(name);
            return true;
        }
        return false;
    }

    static hasComponent(collection: TSDictionary<string, IComponent>,
        component: IComponent | string): boolean {
        let name: string = ComponentHelper.getComponentName(component);
        return collection.ContainsKey(name) ||
            collection.ContainsValue(component as IComponent);
    }

    static getComponent(collection: TSDictionary<string, IComponent>,
        name: string, defaultValue: any = null): IComponent | null {
        return collection.GetDefault(name, defaultValue);
    }


    static updateComponents(collection: TSDictionary<string, IComponent>): void {
        if (collection == null)
            return;
        let components: IComponent[] = collection.getValues();
        for (let i: number = 0; i < components.length; i++) {
            if (components[i] == null) continue;
            components[i].update();
        }
    }

    static removeComponents(collection: TSDictionary<string, IComponent>): void {
        if (collection == null)
            return;
        let components: IComponent[] = collection.getValues();
        for (let i: number = 0; i < components.length; i++) {
            let comp: IComponent = components[i];
            if (comp == null) continue;
            if (comp.onRemoved != null) {
                comp.onRemoved();
            }

        }
        collection.clear();
    }


    private static getComponentName(component: IComponent | string): string {
        if (ComponentHelper.isComponent(component))
            return (component as IComponent).componentName;
        else
            return component as string;
    }


    private static isComponent(component: IComponent | string): boolean {
        return !(typeof component === "string");
    }

}