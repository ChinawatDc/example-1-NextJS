"use client"
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layouts({ children }: { children: React.ReactNode }) {
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

    const notshow = ['/login', '/bypass']

    return (
        <>
            {!notshow.includes(currentPath) ? (
                <>
                    <Navbar />
                    <div className="globals-layout">
                        <Sidebar />
                        <div className="main-content">
                            {children}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center justify-center min-h-screen md:px-6">
                        {children}
                    </div></>
            )}
        </>
    )
}
