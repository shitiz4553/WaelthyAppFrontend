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


export const spendingsData = [
  {
    category: "Transport",
    icon: "train",
    amount: 765.0,
    spendings:[
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Friday,6 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,6 May"
      },
    ]
  },
  {
    category: "Gastronomy",
    icon: "fast-food",
    amount: 555.0,
    spendings:[
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Friday,6 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,6 May"
      },
    ]
  },
  {
    category: "Grocery",
    icon: "cart",
    amount: 233.0,
    spendings:[
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Friday,6 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,6 May"
      },
    ]
  },
  {
    category: "Car",
    icon: "car",
    amount: 533.0,
    spendings:[
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Friday,6 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,6 May"
      },
    ]
  },
  {
    category: "Health & Beauty",
    icon: "heart",
    amount: 225.0,
    spendings:[
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,5 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Friday,6 May"
      },
      {
        spendingTitle:"Biner Zermatt",
        spendingSubtitle:"Zermatt",
        spendingAmount:29.50,
        spendingDate:"Thursday,6 May"
      },
    ]
  },
];


export const expensesData = [
  {
    tabOneHeading:"Housing",
    tabTwoHeading:"Est. Cost",
    tabThreeHeading:"Actual Cost",
    tabFourHeading:"Difference",
    expenses:[
      {
        title:"Mortage/Rent",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Supplies",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Phone & Internet",
        projectedCost:0,
        actualCost:0
      },
      {
        title:"Internet",
        projectedCost:100,
        actualCost:100
      },
      {
        title:"Electricity",
        projectedCost:70,
        actualCost:90
      },
    ]
  },
  {
    tabOneHeading:"Personal Care",
    tabTwoHeading:"Est. Cost",
    tabThreeHeading:"Actual Cost",
    tabFourHeading:"Difference",
    expenses:[
      {
        title:"Beauty",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Parlor",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Barber",
        projectedCost:0,
        actualCost:0
      },
      {
        title:"Shopping",
        projectedCost:100,
        actualCost:100
      },
    ]
  },
  {
    tabOneHeading:"Savings/Investments",
    tabTwoHeading:"Est. Cost",
    tabThreeHeading:"Actual Cost",
    tabFourHeading:"Difference",
    expenses:[
      {
        title:"Monthly Saving",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Supplies",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Phone & Internet",
        projectedCost:0,
        actualCost:0
      },
    ]
  },
  {
    tabOneHeading:"Academy",
    tabTwoHeading:"Est. Cost",
    tabThreeHeading:"Actual Cost",
    tabFourHeading:"Difference",
    expenses:[
      {
        title:"Mortage/Rent",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Supplies",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Phone & Internet",
        projectedCost:0,
        actualCost:0
      },
      {
        title:"Internet",
        projectedCost:100,
        actualCost:100
      },
      {
        title:"Electricity",
        projectedCost:70,
        actualCost:90
      },
    ]
  },
  {
    tabOneHeading:"Accounts",
    tabTwoHeading:"Est. Cost",
    tabThreeHeading:"Actual Cost",
    tabFourHeading:"Difference",
    expenses:[
      {
        title:"Mortage/Rent",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Supplies",
        projectedCost:2550,
        actualCost:2550
      },
      {
        title:"Phone & Internet",
        projectedCost:0,
        actualCost:0
      },
      {
        title:"Internet",
        projectedCost:100,
        actualCost:100
      },
      {
        title:"Electricity",
        projectedCost:70,
        actualCost:90
      },
    ]
  },
]



export const monthData = [
  {
    month: "Jan",
    weeks: [
      { weekLabel: "Week 1", data: [25, 250, 180, 200, 300, 240, 210] },
      { weekLabel: "Week 2", data: [355, 300, 220, 260, 350, 280, 250] },
      { weekLabel: "Week 3", data: [255, 220, 150, 280, 320, 260, 290] },
      { weekLabel: "Week 4", data: [220, 280, 300, 240, 270, 210, 320] },
    ],
  },
  {
    month: "Feb",
    weeks: [
      { weekLabel: "Week 1", data: [66, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Mar",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Apr",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "May",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Jun",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Jul",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Aug",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Sep",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Oct",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Nov",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
  {
    month: "Dec",
    weeks: [
      { weekLabel: "Week 1", data: [180, 230, 190, 220, 280, 250, 260] },
      { weekLabel: "Week 2", data: [220, 260, 280, 300, 340, 310, 330] },
      { weekLabel: "Week 3", data: [210, 240, 260, 280, 320, 290, 300] },
      { weekLabel: "Week 4", data: [230, 280, 250, 290, 330, 310, 340] },
    ],
  },
];

