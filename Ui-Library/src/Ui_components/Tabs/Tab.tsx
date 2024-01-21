// Tabs.tsx

import React, { ReactNode, useState } from 'react';
import './tab-styles.scss'; 

interface Tab {
    label: string;
    content: ReactNode;
    disabled?: boolean;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        if (!tabs[index].disabled) {
            setActiveTab(index);
        }
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`tab ${activeTab === index ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">{tabs[activeTab].content}</div>
        </div>
    );
};

export default Tabs;
