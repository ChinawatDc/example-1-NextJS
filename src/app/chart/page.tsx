"use client";
import React, { useEffect, useState } from "react";
import { TabPanel, TabView } from "primereact/tabview";
import { getBarBasics, getBarChart } from "@/services/api/api.mockup";
import BasicDemo from "@/components/Chart/BasicDemo";
import ApexChart from "@/components/Chart/ApexChart";
import ChartBasicBar from "@/components/Chart/ChartBasicBar";

interface ChartData {
    series: any[];
    categories: any[];
}

function Chart() {
    const [data, setData] = useState<any[]>([]);
    const [dataBar, setDataBar] = useState<ChartData | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const fetchData = async () => {
        try {
            const [barChartData, barBasicsData] = await Promise.all([getBarChart(), getBarBasics()]);
            if (barChartData && barBasicsData) {
                setData(barChartData);
                setDataBar(barBasicsData);
            } else {
                console.error('Fetched data is not valid.');
                setData([]);
                setDataBar(null);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
            setDataBar(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const chartComponents: { [key: string]: React.FC<any> } = {
        BasicDemo: BasicDemo,
        ApexChart: (props: any) => <ApexChart {...props} />,
        ChartBasicBar: (props: any) => <ChartBasicBar {...props} />,
    };

    const renderChart = () => {
        switch (activeIndex) {
            case 0:
                return React.createElement(chartComponents.BasicDemo);
            case 1:
                return (
                    <div className="border p-4 rounded-md">
                        {data.length ? (
                            React.createElement(chartComponents.ApexChart, { data, title: "Timeline Charts" })
                        ) : (
                            <p>Loading data...</p>
                        )}
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        {/* Horizontal Bar Chart */}
                        <div className="border p-4 rounded-md">
                            {dataBar ? (
                                React.createElement(chartComponents.ChartBasicBar, {
                                    series: dataBar.series,
                                    horizontal: true,
                                    enabled: true,
                                    categories: dataBar.categories,
                                    title: "Fiction Books Sales",
                                    colors: ['#d4526e', '#13d8aa'],
                                })
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        {/* Vertical Bar Chart */}
                        <div className="border p-4 rounded-md">
                            {dataBar ? (
                                React.createElement(chartComponents.ChartBasicBar, {
                                    series: dataBar.series,
                                    enabled: true,
                                    categories: dataBar.categories,
                                    title: "Fiction Books Sales",
                                    colors: ['#d4526e', '#13d8aa'],
                                })
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Chart primereact">
                    {renderChart()}
                </TabPanel>
                <TabPanel header="ApexChart Timeline">
                    {renderChart()}
                </TabPanel>
                <TabPanel header="ApexChart BasicBar">
                    {renderChart()}
                </TabPanel>
            </TabView>
        </>
    );
}

export default Chart;
