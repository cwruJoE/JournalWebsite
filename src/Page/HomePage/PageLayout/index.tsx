import { ReactNode, FC } from "react";

type LayoutComponent = FC<{
  children: ReactNode;
  [restProps: string]: any;
}> & {
  MainSection: FC<{ children: ReactNode; [restProps: string]: any }>;
  SideSection: FC<{ children: ReactNode; [restProps: string]: any }>;
};

const Layout: LayoutComponent = ({ children, ...restProps }) => {
  return (
    <div
      className="container mx-auto grid grid-cols-12 gap-8 px-4 py-8"
      {...restProps}
    >
      {children}
    </div>
  );
};

const MainSection: FC<{ children: ReactNode; [restProps: string]: any }> = ({
  children,
  ...restProps
}) => {
  return (
    <div className="col-span-7" {...restProps}>
      {children}
    </div>
  );
};

const SideSection: FC<{ children: ReactNode; [restProps: string]: any }> = ({
  children,
  ...restProps
}) => {
  return (
    <div className="col-span-5" {...restProps}>
      {children}
    </div>
  );
};

Layout.MainSection = MainSection;
Layout.SideSection = SideSection;

export default Layout;
