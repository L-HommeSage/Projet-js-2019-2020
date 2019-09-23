var data = {
    users: [
        {
            id: 1,
            first_name: "bastien",
            last_name: "vendrame",
            email: "bastien.vendrame@edu.ece.fr",
            password: "azerty",
            is_admin: 1
        },

        {
            id: 2,
            first_name: "ramzi",
            last_name: "agougil",
            email: "ramzi.agougil@edu.ece.fr",
            password: "azertyu",
            is_admin: 0
        },

        {
            id: 3,
            first_name: "raphael",
            last_name: "partouche",
            email: "raphael.partouche@edu.ece.fr",
            password: "azertyui",
            is_admin: 0
        },
        {
            id: 4,
            first_name: "pablo",
            last_name: "antoniadis",
            email: "pablo.antoniadis@edu.ece.fr",
            password: "azertyuio",
            is_admin: 1
        },

    ],

    Cards: [
        {
            id : 1,
            last_four: 1234,
            brand : "MasterCard",
            expired_at : "2019/01/01",
            user_id : 1
        },

        {
            id : 2,
            last_four: 2345,
            brand : "Visa",
            expired_at : "2019/02/01",
            user_id : 2
        },

        {
            id : 3,
            last_four: 3456,
            brand : "american_express",
            expired_at : "2019/03/01",
            user_id : 3
        },

        {
            id : 4,
            last_four: 4567,
            brand : "union_pay",
            expired_at : "2019/04/01",
            user_id : 4
        }
    ],

    wallet: [
        {
            id : 1,
            user_id : 1,
            amount : 1000,
        },

        {
            id : 2,
            user_id : 2,
            amount : 2000,
        },

        {
            id : 3,
            user_id : 3,
            amount : 3000,
        },

        {
            id : 4,
            user_id : 4, 
            amount : 4000,
        }
    ],

    transfer: [
        {
            id : 1,
            debitted_wallet_id : 1,
            credited_wallet_id : 2,
            amount : 100,
        },

        {
            id : 2,
            debitted_wallet_id :2, 
            credited_wallet_id : 3,
            amount : 200,
        },

        {
            id : 3,
            debitted_wallet_id : 3,
            credited_wallet_id : 4,
            amount : 300,
        },

        {
            id : 4,
            debitted_wallet_id : 1,
            credited_wallet_id : 3,
            amount : 400,
        },
    ],

    payin: [
        {
            id: 1,
            wallet_id: 1,
            amount: 100,
        },
        {
            id: 2,
            wallet_id: 2,
            amount: 200,
        },
        {
            id: 3,
            wallet_id: 3,
            amount: 300,
        },
        {
            id: 4,
            wallet_id: 4,
            amount: 400,
        }
    ],

    payout: [
        {
            id: 1,
            wallet_id: 1,
            amount: 100,
        },
        {
            id: 2,
            wallet_id: 2,
            amount: 200,
        },
        {
            id: 3,
            wallet_id: 3,
            amount: 300,
        },
        {
            id: 4,
            wallet_id: 4,
            amount: 400,
        }
    ]
}
exports.bdd = data;