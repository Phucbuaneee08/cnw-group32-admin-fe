import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.svg";

const sidebarVar = [
  {
    path: "/dashboard/sales",
    title: "Revenue",
    icon: <svg
      viewBox="0 0 1024 1024"
           fill="currentColor"
           height="1em"
           width="1em"
    >
    <path d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0045.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 00-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 00-45.2 0L165.7 610.5a7.94 7.94 0 000 11.3z" />

    </svg>,
    authorize: "all",
  },
  {
    path: "/dashboard/reservation-management",
    title: "Reservation",
    icon: <svg
       fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
    >
       <path
              d="M10.854 7.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 9.793l2.646-2.647a.5.5 0 01.708 0z"
            />
            <path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" />
    </svg>,
    authorize: "admin",
  },
  {
    path: "/dashboard/homestay-management",
    title: "Homestay",
    icon: <svg
      viewBox="0 0 1024 1024"
           fill="currentColor"
           height="1em"
           width="1em"
    >
      <path
        d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"
      />
    </svg>,
    authorize: "all",
  },
  {
    path: "/dashboard/user-management",
    title: "Employee",
    icon: <svg
      viewBox="0 0 640 512"
            fill="currentColor"
            height="1em"
            width="1em"
    >
      <path
         d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zM64 245.7c-10 11.2-16 26.1-16 42.3s6 31.1 16 42.3v-84.6zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416v-21.5c20-24.7 32-56.2 32-90.5 0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112 0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-80 144c0 16.2 6 31 16 42.3v-84.6c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zm64 42.3c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-42.8c-37.8-18-64-56.5-64-101.2 0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
      />
    </svg>,
    authorize: "super_admin",
  },
  {
    path: "/dashboard/discount-management",
    title: "Discount",
    icon: <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.448.436l-1.13 1.129a.488.488 0 01-.344.143H3.196c-.822 0-1.488.666-1.488 1.488v1.778c0 .13-.052.253-.143.345L.435 6.448a1.488 1.488 0 000 2.104l1.13 1.13a.488.488 0 01.143.344v1.778c0 .822.666 1.488 1.488 1.488h1.778c.13 0 .253.052.345.143l1.129 1.13a1.488 1.488 0 002.104 0l1.13-1.13a.488.488 0 01.344-.143h1.778c.822 0 1.488-.666 1.488-1.488v-1.778c0-.13.052-.253.143-.345l1.13-1.129a1.488 1.488 0 000-2.104l-1.13-1.13a.488.488 0 01-.143-.344V3.196c0-.822-.666-1.488-1.488-1.488h-1.778a.488.488 0 01-.345-.143L8.552.435a1.488 1.488 0 00-2.104 0zm-1.802 9.21l5-5 .708.708-5 5-.708-.708zM5 5v1h1V5H5zm4 5h1V9H9v1z"
                  clipRule="evenodd"
                />
              </svg>,
    authorize: "admin",
  },
];

function Sidebar() {
  const { role } = useSelector((state) => state.authReducer);

  let location = useLocation();
  const sidebarList = sidebarVar.map((item) => {
    if (item.authorize === "all" || (item.authorize === role))
      if (location.pathname === item.path)
        return (
          <li style={{border: '6px solid rgba(0, 0, 0, 0.05)'}} className="flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-blue-600   hover:text-blue-700" >
            {item.icon}
            <Link
              to={item.path}
              className="ml-2 text-blue-600 font-bold md:text-xl text-auto"

            >
              {item.title}
            </Link>
          </li>
        );
      // có focus
      else
        return (
          <li className="flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-gray-600 transform hover:scale-125 hover:text-blue-700">
            {item.icon}
            <Link to={item.path} className="ml-2">
              {item.title}
            </Link>
          </li>
        ); // không focus
  });

  const sidebarClass =
    "flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-gray-600 transform hover:scale-125 hover:text-green-700";
  return (
    <div className="w-full h-full flex flex-no-wrap">
      {/* Sidebar starts */}
      <div className="absolute lg:relative w-full h-screen shadow bg-gray-100 flex flex-col lg:block">
        <div>
          <img className="mx-auto mt-5 h-24 w-auto" src={logo} alt="Logo" />
        </div>
        <ul className="py-6" aria-orientation="vertical">
          {sidebarList}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
