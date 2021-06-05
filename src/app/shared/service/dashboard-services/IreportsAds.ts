export interface ReportsAds{

    id: number,
    user: {
        id: number,
        email: "admin@gmail.com",
        firstName: "admin",
        lastName: "admin",
        address: null,
        city: null,
        state: null,
        zip: null,
        phone: "01020187068",
        username: "admin",
        country: null,
        emailVerified: null,
        registrationDate: "May 08 2021 / 23:08"
    },
    type: "REPORT",
    ad: {
        id: number,
        code: null,
        city: "القاهرة",
        type: "PETS",
        active: true,
        name: "ggh",
        longitude: 31.138268373906612,
        latitude: 30.188993717826932,
        createdAt: "May 22 2021 / 22:00",
        updatedAt: null,
        description: "ggg",
        shortDescription: "ggg",
        price: number,
        externalLink: true,
        coordinates: "POINT (30.188993717826932 31.138268373906612)",
        category: {
            id: number,
            name: "Cats",
            nameAr: "قطط",
            code: "CATS",
            parent: null,
            icon: "https://res.cloudinary.com/highcoder/image/upload/v1617371528/pet-app/drawable-hdpi/Group_327_nohdxw.png",
            icon_select: "https://res.cloudinary.com/highcoder/image/upload/v1617372733/pet-app/drawable-hdpi/Path_671_s5zepq.png",
            child: [],
            type: number,
            active: true,
            isExternalLink: true
        },
        userAdsImage: [
            {
                id: 182,
                image: "http://res.cloudinary.com/highcoder/image/upload/v1621720631/je0jckzzi4ksg7fzcj35.jpg",
                isExternalLink: null
            }
        ],
        totalPage: number,
        totalItem: number,
        userReportedAds: [
            {
                id: number,
                reportType: "INTEREST",
                reason: null,
                createdAt: "May 23 2021 / 21:11",
                updatedAt: null
            },
            {
                id: number,
                reportType: "REPORT",
                reason: {
                    id: 1,
                    value: "Scam"
                },
                createdAt: "May 23 2021 / 18:05",
                updatedAt: null
            }
        ],
        selling_type: "Adopt",
        image: null,
        breed: "N/A",
        stock: number,
        weaned: false,
        neutering: false,
        vaccinationCertifcate: false,
        training: "null",
        food: "DRY",
        barkingProblem: null,
        passport: false,
        playWithKids: false,
        diseasesDisabilities: false,
        diseasesDisabilitiesDesc: null
    },
    createdAt: "May 23 2021 / 18:05",
    updatedAt: null,
    reason: {
        id: 1,
        value: "Scam"
    }
}