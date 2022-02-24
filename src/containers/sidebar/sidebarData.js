import React from "react";
import { FiShare2 } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { BsGrid, BsBarChart } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineSliders, AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { RiExchangeFundsLine, RiExchangeDollarLine } from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BsGrid />,
  },
  {
    title: "Section 1",
    path: "/section1",
    icon: <BiBarChartSquare />,
  },
  {
    title: "Section 2",
    path: "/section2",
    icon: <AiOutlineSliders />,
  },
  {
    title: "Section 3",
    path: "/section3",
    icon: <RiExchangeFundsLine />,
  },
  {
    title: "Section 4",
    path: "/section4",
    icon: <RiExchangeDollarLine />,
  },
  {
    title: "Section",
    path: "/section",
    icon: <HiOutlineDatabase />,
  },
  {
    title: "Section 6",
    path: "/section6",
    icon: <AiOutlinePieChart />,
  },
  {
    title: "Section 7",
    path: "/section7",
    icon: <BsBarChart />,
  },
  {
    title: "Section 8",
    path: "/section8",
    icon: <FiShare2 />,
  },
  {
    title: "Documentation",
    path: "/documentation",
    icon: <TiDocumentText />,
  },
];
