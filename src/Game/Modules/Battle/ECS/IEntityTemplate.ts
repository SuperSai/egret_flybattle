interface IEntityTemplate {
    buildEntity(vo:any):IEntity;
    copyToEntity?(vo:any,parent:IEntity):IEntity;
}