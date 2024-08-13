'use client'
import { useEffect, useState } from "react";
import { TabPanel, TabView } from "primereact/tabview";
import { getBarChart, getBarBasics } from "@/services/api/api.mockup";
import BasicDemo from "@/components/Chart/BasicDemo";
import dynamic from "next/dynamic";

// Dynamically import ApexChart and ChartBasicBar to ensure they're only loaded on the client side
const ApexChart = dynamic(() => import('@/components/Chart/ApexChart'), { ssr: false });
const ChartBasicBar = dynamic(() => import('@/components/Chart/ChartBasicBar'), { ssr: false });

function Chart() {
    const [data, setData] = useState<any>([]);
    const [dataBar, setDataBar] = useState<{ series: any[]; categories: any[] } | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const fetchData = async () => {
        try {
            const res = await getBarChart();
            const resBar = await getBarBasics();
            if (res && resBar) {
                console.log("res,", resBar);
                setDataBar(resBar);
                setData(res);
            } else {
                console.error('Fetched data is not an array:');
                setData([]);
                setDataBar(null);
            }
        } catch (error) {
            console.error('Error fetching:', error);
            setData([]);
            setDataBar(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const colors = ['#d4526e', '#13d8aa'];

    return (
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Chart primereact">
                <BasicDemo />
            </TabPanel>
            <TabPanel header="ApexChart Timeline">
                <div className="border p-4 rounded-md">
                    <ApexChart data={data} title="Timeline Charts" />
                </div>
            </TabPanel>
            <TabPanel header="ApexChart BasicBar" className="space-y-4">
                {/* Horizontal */}
                <div className="border p-4 rounded-md">
                    {dataBar ? (
                        <ChartBasicBar
                            series={dataBar.series}
                            horizontal
                            enabled
                            categories={dataBar.categories}
                            title="Fiction Books Sales"
                            colors={colors}
                        />
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>
                {/* Vertical */}
                <div className="border p-4 rounded-md">
                    {dataBar ? (
                        <ChartBasicBar
                            series={dataBar.series}
                            enabled
                            categories={dataBar.categories}
                            title="Fiction Books Sales"
                            colors={colors}
                        />
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>
            </TabPanel>
            <TabPanel header="ApexChart Pie Chart">
                {/* Content for Pie Chart */}
            </TabPanel>
        </TabView>
    );
}

export default Chart;
