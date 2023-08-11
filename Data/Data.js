import assets from "../assets/assets";

export const spentData = [
  {
    month: "August",
    week: [
      {
        spent: 50,
        weekStartDate:"07/08/2023",
      },
      {
        spent: 24,
        weekStartDate:"14/08/2023",
      },
      {
        spent: 25,
        weekStartDate:"21/08/2023",
      },
      {
        spent: 35,
        weekStartDate:"28/08/2023",
      },
    ],
  },
];


export const budgets = [
  {
    budgetTitle:"Groceries",
    budgetAvailable:1000,
    budgetSpent:600,
  },
  {
    budgetTitle:"Entertainment",
    budgetAvailable:1000,
    budgetSpent:500,
  },
]

export const goals = [
  {
    goalLabel:"New Car",
    goalTarget:1000,
    goalValue:600,
  },
  {
    goalLabel:"Emergency Fund",
    goalTarget:1000,
    goalValue:500,
  },
]


export const notifications = [
  {
    title:"You saved CHF 100 this Month!",
    subtitle:"Lorem impsum dolor sit emet consectus lorem ipsum",
    icon:assets.stat,
    time:"Today",
  },
  {
    title:"You went over budget today in Gastronomy",
    subtitle:"Lorem impsum dolor sit emet consectus lorem ipsum",
    icon:assets.food,
    time:"Yesterday",
  },
  {
    title:"New Article in our Blog has arrived!",
    subtitle:"Lorem impsum dolor sit emet consectus lorem ipsum",
    icon:assets.grid,
    time:"Yesterday",
  },
]


export const academyData = [
  {
    title:"You went over budget today in Gastronomy",
    subtitle:"Lorem impsum dolor sit emet consectus lorem ipsum",
    icon:assets.food,
    time:"Yesterday",
    bannerImage:"https://images.pexels.com/photos/273250/pexels-photo-273250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    posterName:"Floyed M.",
    posterProfilePic:"https://randomuser.me/api/portraits/men/97.jpg",
    postedTime:"10 m ago",//convert this into a timestamp and convert the timestamp to a string - use chat gpt
    minRead:"3 min read",
    articleMessage:"Discover how incorporating visual arts, music, theater, and dance can unlock creativity, enhance critical thinking, and foster a well-rounded educational experience. Join us on "
  },
  {
    title:"New Article in our Blog has arrived!",
    subtitle:"Lorem impsum dolor sit emet consectus lorem ipsum",
    icon:assets.grid,
    time:"Yesterday",
    bannerImage:"https://images.pexels.com/photos/670028/pexels-photo-670028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    posterName:"Floyed M.",
    posterProfilePic:"https://randomuser.me/api/portraits/men/22.jpg",
    postedTime:"10 m ago",//convert this into a timestamp and convert the timestamp to a string - use chat gpt
    minRead:"3 min read",
    articleMessage:"Discover how incorporating visual arts, music, theater, and dance can unlock creativity, enhance critical thinking, and foster a well-rounded educational experience. Join us on "
  },
]