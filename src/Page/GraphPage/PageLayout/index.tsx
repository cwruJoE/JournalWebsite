import { ReactNode, FC } from "react";

// Define the Layout component with additional properties
type LayoutComponent = FC<{
    children: ReactNode;
    [restProps: string]: any;
}> & {
    MainSection: FC<{ children: ReactNode; [restProps: string]: any }>;
    SideSection: FC<{ children: ReactNode; [restProps: string]: any }>;
};

const Layout: LayoutComponent = ({ children, ...restProps }) => {
    return (
        <div className="grid grid-cols-10 align-top p-4" {...restProps}>
            {children}
        </div>
    );
};

const MainSection: FC<{ children: ReactNode; [restProps: string]: any }> = ({ children, ...restProps }) => {
    return (
        <div className="col-start-1 col-end-7" {...restProps}>
            {children}
        </div>
    );
};

const SideSection: FC<{ children: ReactNode; [restProps: string]: any }> = ({ children, ...restProps }) => {
    return (
        <div className="col-start-9 col-span-2" {...restProps}>
            {children}
        </div>
    );
};

// Assign MainSection and SideSection to Layout
Layout.MainSection = MainSection;
Layout.SideSection = SideSection;

export default Layout;