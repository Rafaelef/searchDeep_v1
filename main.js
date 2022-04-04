const data = [
    {
        "_id": "5e985a07feddae7617ac44f6",
        "age": 24,
        "eyeColor": "brown",
        "name": "Cummings Baxter",
        "gender": "male",
        "company": "VELOS",
        "email": "cummingsbaxter@velos.com",
        "phone": "+1 (907) 482-2451",
        "tags": [
            "labore",
            "elit",
            "excepteur",
            "nisi",
            "mollit",
            "anim",
            "aliquip"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Sheppard Jensen"
            }
        ]
    },
    {
        "_id": "5e985a0709dfa1e6fd93c6ad",
        "age": 32,
        "eyeColor": "brown",
        "name": "Madelyn Dickson",
        "gender": "female",
        "company": "KENGEN",
        "email": "madelyndickson@kengen.com",
        "phone": "+1 (984) 521-2439",
        "tags": [
            "nisi",
            "veniam",
            "dolore",
            "officia",
            "ex",
            "non",
            "pariatur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Bruce Barton"
            },
            {
                "id": 1,
                "name": "Juliet Schmidt"
            },
            {
                "id": 2,
                "name": "Horton Haley"
            },
            {
                "id": 3,
                "name": "Herminia Witt"
            }
        ]
    },
    {
        "_id": "5e985a0737e2306e9aef6ecd",
        "age": 26,
        "eyeColor": "blue",
        "name": "Mcguire Mercado",
        "gender": "male",
        "company": "LINGOAGE",
        "email": "mcguiremercado@lingoage.com",
        "phone": "+1 (963) 450-2194",
        "tags": [
            "cupidatat",
            "occaecat",
            "amet",
            "qui",
            "elit",
            "esse",
            "deserunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Loraine Harper"
            },
            {
                "id": 1,
                "name": "Luann Randall"
            },
            {
                "id": 2,
                "name": "Obrien Rich"
            },
            {
                "id": 3,
                "name": "Noble Wilkerson"
            }
        ]
    },
    {
        "_id": "5e985a07148cfba58c860ec2",
        "age": 26,
        "eyeColor": "brown",
        "name": "Marina Porter",
        "gender": "female",
        "company": "GORGANIC",
        "email": "marinaporter@gorganic.com",
        "phone": "+1 (867) 417-3497",
        "tags": [
            "laborum",
            "aliquip",
            "sit",
            "adipisicing",
            "aute",
            "cupidatat",
            "aliquip"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Blair Hill"
            },
            {
                "id": 1,
                "name": "Ebony Jimenez"
            }
        ]
    },
    {
        "_id": "5e985a074984f9f08ccaaa4c",
        "age": 25,
        "eyeColor": "green",
        "name": "Barlow Ferguson",
        "gender": "male",
        "company": "TOYLETRY",
        "email": "barlowferguson@toyletry.com",
        "phone": "+1 (837) 484-2231",
        "tags": [
            "est",
            "dolor",
            "minim",
            "ut",
            "anim",
            "culpa",
            "non"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Delacruz Acevedo"
            },
            {
                "id": 1,
                "name": "Gloria Tanner"
            },
            {
                "id": 2,
                "name": "Cantrell Myers"
            },
            {
                "id": 3,
                "name": "Fisher Leonard"
            }
        ]
    }
]


searchWith = () => {
    let filter = document.getElementById("filter").value;
    let filtered = [];
    let rows = [];
    let output = document.getElementById("section");
    let br = document.createElement("br");

    output.textContent = "Wyniki zawierające podaną frazę: ";
    output.appendChild(br);

    if (filter.toString().length < 2){
        output.appendChild(br);
        output.innerHTML += "Too Short!"
    }else{
        data.forEach(obiekt => {
        let vals = Object.values(obiekt);
            
        vals.forEach(val => {
            

            if(!Array.isArray(val)){
                let text = val.toString().toLowerCase();
                if (text.includes(filter.toString().toLowerCase())){
                    if (filtered.includes(obiekt)){}
                    else (filtered.push(obiekt))
                }
            }else {
                val.forEach(element => {
                    let text = element.toString().toLowerCase();
                    if (!(typeof(element) === 'object') && element !== null) {
                        if (text.includes(filter.toString().toLowerCase())){
                            if (filtered.includes(obiekt)){}
                            else (filtered.push(obiekt))
                        }
                    } else {
                        let deepVals = Object.values(element);
                        
                        deepVals.forEach(element => {
                            let text = element.toString().toLowerCase();
                            if (text.includes(filter.toString().toLowerCase())){
                                if (filtered.includes(obiekt)){}
                                else (filtered.push(obiekt))
                            }
                        });
                    }
                });
            }
            
        });
    });
        filtered.forEach(el => {
            let user;
            user = "Name: "+el.name+" Age: "+el.age;
            rows.push(user);
        });
        rows.forEach(row => {
            output.innerHTML += row;
            output.appendChild(br);
        });
        console.log(filtered, filtered.length);

    }   
}
