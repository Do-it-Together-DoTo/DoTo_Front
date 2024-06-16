import React, { ReactNode } from 'react';

interface CommunityPageLayoutProps {
  children: ReactNode;
}

const CommunityPageLayout: React.FC<CommunityPageLayoutProps> = ({ children }) => {
  return (
    <main className="w-full h-[calc(100vh-3.1875rem)] flex flex-col gap-7 bg-Light_Layout-200 overflow-auto scroll scrollbar-hide dark:bg-Dark_Layout-300 items-center py-14">
      {children}
    </main>
  );
};

export default CommunityPageLayout;
