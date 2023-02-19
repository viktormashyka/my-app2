interface IPerson {
  firstName: string;
  lastName: string;
}

export const getValueFromObject = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

// getValueFromObject({ name: "Viktor" }, "age");

// getValueFromObject<IPerson>(
//   { firstname: "Viktor", lastname: "Mashyka" },
//   "firstname"
// );
