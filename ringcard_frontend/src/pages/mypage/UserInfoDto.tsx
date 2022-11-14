
import dotenv from "dotenv";
import path from "path";
import { config } from "process";

const ENV_PATH = path.resolve(__dirname + "/../.env");

dotenv.config({ path: ENV_PATH });
// console.log("config.ts, host: ",process.env.DB_HOST);  // dotenv 확인용 코드



type Nullable<T> = T | null;

type UserInfoDto = {
    // 이름
    userRingcardName: string;
    // 아이디
    username: string;
    // 이메일
    userEmail: Nullable<string>;
    // 아래는 활용 안함
    password: string;

    twitterId: Nullable<string>;
}

export default config;