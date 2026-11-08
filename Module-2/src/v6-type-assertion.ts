// type assertion 'as' syntax --> changing type (better not to use)

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (sts: Status) => {
  console.log("your status is " + sts);
};

showStatus(someStatus as Status);
