// type assertion 'as' syntax --> changing type (better not to use)

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (sts: Status) => {
  console.log("your status is " + sts);
};

showStatus(someStatus as Status);

// no null assertion
interface Config {
  port?: number;
}

const config: Config = {
  port: 3000,
};

// const currentPort: number = config.port!;
const currentPort: number = config.port as number;

// constant assertion --> make something readonly

const configuration = {
  port: 8080,
  preffix: "api/v1",
} as const;



