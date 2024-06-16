import React, { ReactNode } from 'react';

interface CommunityPageLayoutProps {
  children: ReactNode;
}

const CommunityPageLayout: React.FC<CommunityPageLayoutProps> = ({ children }) => {
  return (
    <main className="w-full dt:h-[calc(100vh-3.1875rem)] mb:h-full flex flex-col gap-7 mb:bg-Light_Layout-400 bg-Light_Layout-200 overflow-auto scroll scrollbar-hide dark:bg-Dark_Layout-300 items-center dt:py-14 mb:p-[2rem]">
      {children}
    </main>
  );
};

export default CommunityPageLayout;
