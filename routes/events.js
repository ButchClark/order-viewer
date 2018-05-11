var express = require('express');
var router = express.Router();


const newEvents2 = [
    { "createdAt": "2018-04-05T11:03:19.932-06:00", "domoEvent": { "eventId": "deed8ec0-c885-4d82-91de-8367e333cd9d",
            "timestamp": 1522947799925,
            "type": "order-accepted-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "order": {
                    "dishCustomerId": "mike-test-5418",
                    "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
                    "cft": "MIKE",
                    "attributes": {
                        "orderCreateDate": "2018-01-12T09:50:58.563",
                        "orderSubTotal": 15.0,
                        "orderTaxTotal": 3.0,
                        "orderTotal": 18.0
                    },
                    "lines": [{
                        "id": "1",
                        "type": "est",
                        "attributes": {
                            "action": "ADD",
                            "productId": "407422",
                            "RUID": "RUID",
                            "title": "Avatar",
                            "resolution": "HD",
                            "pricePlanId": "30499",
                            "unitPrice": 15.0,
                            "providerOrderNumber": "104526296",
                            "purchaseStatus": "Delivered",
                            "returnForCreditStartDate": "11/02/2017",
                            "returnForCreditEndDate": "01/23/2018",
                            "imageURL": "http://content.sls1.cdops.net/Assets/MediaMojo/movies/images/image_avatar.jpg"
                        }
                    }]
                }
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.955-06:00",
        "domoEvent": {
            "eventId": "7b659c26-7944-4357-a54b-5cf5eec934ee",
            "timestamp": 1522947799948,
            "type": "preprocessing-completed-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
                "promptedBy": ["deed8ec0-c885-4d82-91de-8367e333cd9d"]
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.958-06:00",
        "domoEvent": {
            "eventId": "23f6b641-9cc0-43dc-9a87-70d5d354e125",
            "timestamp": 1522947799946,
            "type": "tasks-created-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "cm-offering-sp",
                "promptedBy": "deed8ec0-c885-4d82-91de-8367e333cd9d",
                "tasks": []
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.96-06:00",
        "domoEvent": {
            "eventId": "35998ee6-7ffb-4ceb-9848-344cfd766e20",
            "timestamp": 1522947799949,
            "type": "order-preprocessed-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "est-customer-master",
                "promptedBy": "deed8ec0-c885-4d82-91de-8367e333cd9d",
                "orderUpdate": {}
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.96-06:00",
        "domoEvent": {
            "eventId": "3f6b3803-6efa-414e-97be-965da67c9412",
            "timestamp": 1522947799947,
            "type": "order-closed-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {"clientOrderGuid": "765f07db-0589-4816-1234-123456789012"}
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.964-06:00",
        "domoEvent": {
            "eventId": "49b9613e-0a6e-4e88-b956-3d8df26eb1b2",
            "timestamp": 1522947799948,
            "type": "order-preprocessed-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "clarify-ra-sp",
                "promptedBy": "deed8ec0-c885-4d82-91de-8367e333cd9d",
                "orderUpdate": {}
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.966-06:00",
        "domoEvent": {
            "eventId": "419f034e-8804-4b42-bf34-1737b358175b",
            "timestamp": 1522947799951,
            "type": "tasks-created-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "cm-payment-sp",
                "promptedBy": "deed8ec0-c885-4d82-91de-8367e333cd9d",
                "tasks": []
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.968-06:00",
        "domoEvent": {
            "eventId": "eedcea62-ab13-4901-b409-f6d1004a3801",
            "timestamp": 1522947799946,
            "type": "order-preprocessed-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "ascendon",
                "promptedBy": "deed8ec0-c885-4d82-91de-8367e333cd9d",
                "orderUpdate": {}
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:19.972-06:00",
        "domoEvent": {
            "eventId": "3b508e79-1d0d-44ba-b310-b49ee593e713",
            "timestamp": 1522947799947,
            "type": "tasks-created-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "cm-customer-sp",
                "promptedBy": "deed8ec0-c885-4d82-91de-8367e333cd9d",
                "tasks": []
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:20.025-06:00",
        "domoEvent": {
            "eventId": "55ca2012-7992-4767-bdec-e335609a7c3e",
            "timestamp": 1522947800010,
            "type": "tasks-created-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {
                "providerId": "est-customer-master",
                "promptedBy": "7b659c26-7944-4357-a54b-5cf5eec934ee",
                "tasks": []
            }
        }
    }, {
        "createdAt": "2018-04-05T11:03:20.033-06:00",
        "domoEvent": {
            "eventId": "cb3e2a53-bc2d-480e-a00f-950cc81263b8",
            "timestamp": 1522947800022,
            "type": "tasks-created-event",
            "clientOrderGuid": "765f07db-0589-4816-1234-123456789012",
            "payload": {"providerId": "ascendon", "promptedBy": "7b659c26-7944-4357-a54b-5cf5eec934ee", "tasks": []}
        }
    }]

const theOrder = {
    dishCustomerId: "DISH581641099720",
    clientOrderGuid: "5JANUARY",
    cft: "AMDOCS",
    attributes: {},
    lines: [
        {
            id: "1",
            type: "customer",
            attributes: {
                partyType: "PERSON",
                firstName: "Jim",
                middleName: "L",
                lastName: "Unicorn",
                salutation: "Mr",
                phoneContacts: [
                    {
                        phonePosition: 1,
                        phoneNumber: "3035551212"
                    }
                ],
                relations: [
                    {
                        providerId: "AMDOCS-CUS",
                        extRefNum: "AMD9870769"
                    }
                ]
            }
        },
        {
            id: "2",
            type: "returnDbsEquipment",
            attributes: {
                requestType: "ADVANCE EXCH",
                smartCardNumber: "S2300872005",
                circuitAccountNumber: "R1947849176",
                shipVia: "Standard",
                failureCode: "Power Failure",
                warrantyType: "DOA",
                detailLineType: "IN BOUND",
                type: "REPAIR",
                payTerms: "NO CHARGE",
                shipping: {
                    address: {
                        firstName: "Jim",
                        lastName: "Unicorn",
                        addressLine1: "1234 Main St",
                        addressLine2: "APT 2",
                        city: "Denver",
                        state: "CO",
                        zip: "80111",
                        zip4: "1111"
                    }
                }
            }
        },
        {
            id: "3",
            type: "returnDbsEquipment",
            attributes: {
                requestType: "ADVANCE EXCH",
                smartCardNumber: "S2300872005",
                circuitAccountNumber: "R1947849176",
                shipVia: "Standard",
                failureCode: "Power Failure",
                warrantyType: "DOA",
                detailLineType: "OUT BOUND",
                type: "REPAIR",
                payTerms: "NO CHARGE",
                shipping: {
                    "address": {
                        firstName: "Jim",
                        lastName: "Unicorn",
                        addressLine1: "1234 Main St",
                        addressLine2: "APT 2",
                        city: "Denver",
                        state: "CO",
                        zip: "80111",
                        zip4: "1111"
                    }
                }
            }
        }
    ]
}

/* GET events listing. */
router.get('/', function (req, res, next) {

    console.log(`res: ${res}`)
    res.json({ events: newEvents2 })
})

/* GET events/guids listing. */
router.get('/guids', function (req, res, next) {

    console.log(`res: ${res}`)
    res.json({ guids: ['123','234','345']})
})

module.exports = router;