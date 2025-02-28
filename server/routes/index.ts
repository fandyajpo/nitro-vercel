import { getAge } from "~/utils";

export default defineEventHandler(async () => {
  return {
    name: "Fandy Ahmad Januar Pratama",
    born: "2003-01-11",
    age: getAge("2003-01-11"),
    hobbies: ["Coding", "Gaming", "Reading", "Play Kite"],
    funProject: {
      wheelOfname: "https://roulette-react-spring.vercel.app/",
    },
    test: process.env.ENV,
    // TEST
  };
});
