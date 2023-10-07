// общий компонент виджета

export const Widget = ({ children, widgetName, title }:{ children:string, widgetName:string, title:string }) => {
  return (
    <div className={`widget ${widgetName}-widget`}>
      <h5 className="widget_title">{title}</h5>
      <div className="widget_content">{children}</div>
    </div>
  );
};