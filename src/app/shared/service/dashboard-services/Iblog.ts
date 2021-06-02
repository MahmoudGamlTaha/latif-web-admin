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
            title: string,
            category: string,
            category_id:number,
            description: string,
            image: null,
            images: [],
            path: [],
            user: {
                id: number,
                email: string,
                firstName: string,
                lastName: string,
                address: string,
                city: string,
                state: string,
                zip: string,
                phone: string,
                country: string,
                emailVerified: any,
                registrationDate: any
            },
            createdDate: any,
            externalLink: boolean
        }

export interface IcategoryType {
    id: string;
    active: string;
    code: string;
    name: string,
    createdDate: string,
    nameAr: string,

}
