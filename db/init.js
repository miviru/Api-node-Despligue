db.createUser({
    user: "miguel",
    pwd: "leganes",
    roles: [
        {
            role: "readWrite",
            db: "nombres",
        },
    ],
});