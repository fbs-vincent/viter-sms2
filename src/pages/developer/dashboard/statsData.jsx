import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";

export const stats = [
  {
    title: "Total Students",
    value: 124,
    trend: true,
    trendLabel: "+12% from last month",
    icon: <FaUserGraduate />,
    color: "blue",
  },
  {
    title: "Total Teachers",
    value: 28,
    trend: true,
    trendLabel: "+2% new this year",
    icon: <FaChalkboardUser />,
    color: "green",
  },
  {
    title: "Total Classes",
    value: 12,
    trend: false,
    trendLabel: "Grade 7 to Grade 12",
    icon: <FaSchool />,
    color: "purple",
  },
];
