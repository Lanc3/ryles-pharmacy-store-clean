import {Link} from '@shopify/hydrogen';
import {Drawer} from './Drawer.client';

export function MenuDrawer({isOpen, onClose, menu}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid bg-white">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {
  const menuItems = [
    {
      name: 'All',
      route: 'products',
      id: 1,
    },
    {
      name: 'Vitamins & Supplements',
      route: '/collections/health',
      id: 2,
    },
    {
      name: 'Pain Relief',
      route: '/collections/pain-relief',
      id: 3,
    },
    {
      name: 'Eye Care',
      route: '/collections/eye-care',
      id: 3,
    },
    {
      name: 'Indigestion Remedies',
      route: '/collections/indigestion-remedies',
      id: 3,
    },
  ];

  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8 bg-white">
      {/* Top level menu items */}
      <button className="bg-transparent pl-4">
        <Link className={`font-bold text-rylesblue`} to="/">
          {' '}
          Home
        </Link>
      </button>
      <div className="dropdown pl-44">
        <button className="bg-transparent m-5 font-bold text-rylesblue">
          Shop
        </button>
        <div className="dropdown-content text-rylesblue">
          {menuItems.map((item, index) => {
            return (
              <Link className={`font-bold text-rylesblue`} to={item.route}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <button className="bg-transparent m-5 pl-4">
        <Link className={`font-bold text-rylesblue`} to="/about">
          About
        </Link>
      </button>
      <button className="bg-transparent m-5 pl-4">
        <Link className={`font-bold text-rylesblue`} to="/contact">
          Contact
        </Link>
      </button>
    </nav>
  );
}
