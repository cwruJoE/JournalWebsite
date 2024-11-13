import { ReactNode, FC } from "react";

type HomePageLayoutComponent = FC<{
   children: ReactNode;
   [restProps: string]: any;
}> & {
   MainSection: FC<{ children: ReactNode; [restProps: string]: any }>;
   SideSection: FC<{ children: ReactNode; [restProps: string]: any }>;
};

const Layout: HomePageLayoutComponent = ({ children, ...restProps }) => {
   return (
       <div className="grid grid-cols-10 align-top p-4" {...restProps}>
           {children}
       </div>
   );
};

const MainSection: FC<{ children: ReactNode; [restProps: string]: any }> = ({ children, ...restProps }) => {
   return (
       // Main section for article previews list
       <div className="col-start-1 col-end-7 mx-10" {...restProps}>
           {children}
       </div>
   );
};

const SideSection: FC<{ children: ReactNode; [restProps: string]: any }> = ({ children, ...restProps }) => {
   return (
       // Side section for current issue component
       <div className="col-start-9 col-span-2" {...restProps}>
           {children}
       </div>
   );
};

Layout.MainSection = MainSection;
Layout.SideSection = SideSection;

export default Layout;