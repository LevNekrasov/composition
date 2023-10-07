const NavigationMenuTab = ({ tab }:{ tab:string }) => {
  return <li className="navigation-tab_item">{tab}</li>;
};

// отображение кнопок навигации
export const NavigationMenu = ({ tabs }:{ tabs:string[] }) => {
  return (
    <ul className="navigation-tab_list">
      {tabs.map((tab, i) => (
        <NavigationMenuTab tab={tab} key={i} />
      ))}
    </ul>
  );
};