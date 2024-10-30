import Cover from '../../shared/Cover/Cover';
import MenuItem from '../../shared/MenuItem/MenuItem';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
          {title && <Cover img={coverImg} title={title}></Cover>}
            <div className=" mt-10 mb-10 grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    items={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;