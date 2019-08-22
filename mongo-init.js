db.createUser(
    {
        user: "carson",
        pwd: "0xdeadbeef",
        roles: [
            {
                role: "readWrite",
                db: "weather_crawler"
            }
        ]
    }
);