interface Activitiy {
    activity: string,
    accessibility: number,
    type: string,
    participants: number,
    price: string,
    link: string,
    id: string
}

const activities: Array<Activitiy> = [
  {
    activity: "Learn how to write in shorthand",
    accessibility: 0.1,
    type: "education",
    participants: 1,
    price: "",
    link: "",
    id: "6778219",
  },
  {
    activity: "Learn how to french braid hair",
    accessibility: 0.1,
    type: "education",
    participants: 1,
    price: "",
    link: "",
    id: "8926492",
  },
  {
    activity: "Compliment someone",
    accessibility: 0.0,
    type: "social",
    participants: 2,
    price: "",
    link: "",
    id: "9149470",
  },
];

export default activities