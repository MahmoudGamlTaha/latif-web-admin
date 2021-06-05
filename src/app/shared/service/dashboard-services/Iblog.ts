export interface IblogList {
    id: any;
    title: string;
    category: any;
    category_id: any,
    description: string,
    image: any,
    images:Array<any>,
    path:Array<any>,
    user:any,
    createdDateL:any,
    externalLink:any,
}

export interface IblogCategory {
            id: number,
            name: string,
            description: string,
            icon: any,
            icon_select: any,
            external_link:boolean,
            nameAr:string
        }

export interface IcategoryType {
    id: string;
    active: string;
    code: string;
    name: string,
    createdDate: string,
    nameAr: string,

}
