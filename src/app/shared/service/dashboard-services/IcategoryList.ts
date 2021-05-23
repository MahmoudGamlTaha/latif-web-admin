export interface IblogList {
    id: string;
    title: string;
    category: string;
    category_id: number,
    description: string,
    image: any,
    images:Array<any>,
    path:Array<any>,
    user:any,
    createdDateL:any,
    externalLink:any,
}

export interface IblogCategory {
    id: string;
    name: string;
    description: string;
    icon: string,
    icon_select: string,
    external_link: string,
    nameAr: string,
}

export interface IcategoryType {
    id: string;
    active: string;
    code: string;
    name: string,
    createdDate: string,
    nameAr: string,

}
