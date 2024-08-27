import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "GET"){
        res.json({ok: true});
    }
    if(req.method === "POST"){
        res.json({ok: true});
    }
    if(req.method === "PUT"){
        res.json({ok: true});
    }
    if(req.method === "DELETE"){
        res.json({ok: true});
    }
}