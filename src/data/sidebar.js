import { FaTh,FaStreetView } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";

const menu = [
  {
    title: "Accueil",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Ajouter un Client",
    icon: <FaRegAddressBook />,
    path: "/add-product",
  },
  {
    title: " Les factures",
    icon: <MdOutlineInventory />,
    path: "/add-client",
  },
];

export default menu;
