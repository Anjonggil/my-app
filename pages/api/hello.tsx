import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";

class Data {
    name : string;

    constructor(name: string){
        this.name = name;
    }
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    let result = new Data("giri An");
    res.status(200).json(result);
}