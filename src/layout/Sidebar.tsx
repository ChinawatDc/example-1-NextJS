"use client"

import { useEffect, useState } from 'react';

import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { items } from '../router/menuData';
export default function Sidebar() {
    const [currentPath, setCurrentPath] = useState<string>('/');

    useEffect(() => {
        const handlePathChange = () => setCurrentPath(window.location.pathname);
        handlePathChange(); // Initialize the current path on mount

        window.addEventListener('popstate', handlePathChange);
        window.addEventListener('pushstate', handlePathChange);

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
                    ${isActive(item.url) ? 'text-[#ff7b00] ' : ''}`}>
                        {item.icon && <i className={item.icon}></i>}
                        {item.label}
                    </a>

                )
            };
        });
    };
    const highlightedItems = highlightActiveMenuItems(items);

    return (
        <div>
            <MegaMenu model={highlightedItems} orientation="vertical" breakpoint="767px" />
        </div>
    );
}
