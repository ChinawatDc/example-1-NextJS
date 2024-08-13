"use client"
import { useEffect, useState } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { items } from '../router/menuData';

export default function Sidebar() {
    const [currentPath, setCurrentPath] = useState<string>('/');

    useEffect(() => {
        // Function to update current path
        const handlePathChange = () => setCurrentPath(window.location.pathname);

        // Initialize the current path
        handlePathChange();

        // Add event listeners for path changes
        window.addEventListener('popstate', handlePathChange);
        window.addEventListener('pushstate', handlePathChange);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('popstate', handlePathChange);
            window.removeEventListener('pushstate', handlePathChange);
        };
    }, []);

    const isActive = (url?: string) => {
        if (url === '/' && (currentPath === '/' || currentPath === '')) {
            return true;
        }
        return `/${url}` === currentPath;
    };

    const highlightActiveMenuItems = (menuItems: MenuItem[]): MenuItem[] => {
        return menuItems.map(item => {
            if (item.items) {
                return {
                    ...item,
                    items: highlightActiveMenuItems(item.items.flat())
                };
            }
            return {
                ...item,
                template: (item: MenuItem) => (
                    <a href={item.url} className={`pb-3 flex gap-1 items-center hover:bg-white hover:text-[#ff7b00]
                    ${isActive(item.url) ? 'text-[#ff7b00]' : ''}`}>
                        {item.icon && <i className={item.icon}></i>}
                        {item.label}
                    </a>
                )
            };
        });
    };

    const highlightedItems = highlightActiveMenuItems(items);

    return (
        <div className="sidebar-container border-r hidden md:block pr-6">
            <MegaMenu model={highlightedItems} orientation="vertical" breakpoint="767px" />
        </div>
    );
}
