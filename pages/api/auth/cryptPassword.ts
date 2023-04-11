import type { NextApiRequest, NextApiResponse } from 'next'
const bcrypt = require("bcrypt")

type Data = {
    password: string
    error: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const saltRounds = 10;
    const body = JSON.parse(req.body);

    bcrypt.hash(body.password, saltRounds, function(err, hash) {
        res.status(200).json({ password: hash, error: err })
    });
}
