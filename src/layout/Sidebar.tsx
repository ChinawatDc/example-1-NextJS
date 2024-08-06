'use client';
import React, { useEffect, useState } from 'react';
import { items } from '../router/menuData';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';

export default function Sidebar() {
    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const handlePathChange = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePathChange);
        window.addEventListener('pushstate', handlePathChange);

        return () => {
            window.removeEventListener('popstate', handlePathChange);
            window.removeEventListener('pushstate', handlePathChange);
        };
    }, []);

    const isActive = (url?: string) => `/${url}` === currentPath;

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
                style: item.url && isActive(item.url) ? { border: '2px solid #007bff', backgroundColor: '#f1f1f1' } : undefined
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
