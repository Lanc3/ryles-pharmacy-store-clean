import {Link} from '@shopify/hydrogen';

/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function DropdownMenuItem({title, listItems, mainRoute}) {
  return (
    <div className="p-10">
      <div className="dropdown inline-block relative">
        <button className=" text-ryles-blue font-semibold py-2 px-4 rounded inline-flex items-center">
          <Link
            to={mainRoute}
            className="m-5 p-1 outline-none hover:border-ryles-blue border-transparent border-2 hover:border-current text-[#2D4C85] rounded-lg"
          >
            {title}
          </Link>
        </button>
        {listItems.length <= 0 ? (
          <div></div>
        ) : (
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            {listItems.map((item) => (
              <div className="" key={item.id}>
                <li className="rounded-b bg-white bg-opacity-95 hover:border-ryles-blue border-transparent border-2 hover:border-current py-2 px-4 block whitespace-no-wrap">
                  <Link
                    to={item.route}
                    className="text-ryles-blue font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
