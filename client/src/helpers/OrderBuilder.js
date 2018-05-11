function OrderBuilder(events, eventId) {
    const theOrder = {
        dishCustomerId: "DISH581641099720",
        clientOrderGuid: "5JANUARY",
        cft: "AMDOCS",
        attributes: {
            orderSubTotal: 14.99,
            orderTaxTotal: 0.0,
            orderTotal: 14.99,
            orderCreateDate: "2018-02-08T13:44:04.093"
        },
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

    return theOrder

}

export default OrderBuilder