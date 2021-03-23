const workAndBussiness = [
    "workOffers",
    "lookingForJob",
    "coursesAndEducation",
    "workingContacts",
    "legalContacts",
    "financeContacts",
    "translating",
    "internetServices",
    "other"
];

const electrical = [
    "",
    "computers",
    "audio"
]

const phones = [
    "Apple",
    "Samsung",

]

const sectionEnum = [
    workAndBussiness,
    electrical
];

class OfferType {

}


class Phones {
    public static brands: Array<String> = [
        "Apple",
        "Samsung",
        "Huawei"
    ];

    public static operationMemory: Array<number> = [
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ]
}

export default Phones;