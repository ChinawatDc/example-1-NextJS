"use client"

import FullScreen from "@/components/Galleria/FullScreen";
import Thumbnail from "@/components/Galleria/Thumbnail";
import { getPhotos } from "@/services/api/photos.api.mockup";
import { dataProps } from "@/types/fileUpload.model";
import { TabPanel, TabView } from "primereact/tabview";
import { useEffect, useState } from "react";

export default function Galleria() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState<dataProps[]>([]);
    const fetchImages = async () => {
        try {
            const fetchedData = await getPhotos();
            if (Array.isArray(fetchedData)) {
                setData(fetchedData);
            } else {
                console.error('Fetched data is not an array:', fetchedData);
                setData([]);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
            setData([]);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);


    return (
        <div className='grid'>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Full Screen">
                    <FullScreen data={data} />
                </TabPanel>
                <TabPanel header="Thumbnail">
                    <div className=" grid ">
                        <div className=" lg:col-8">
                            <Thumbnail data={data} />
                        </div>
                        <div className="lg:col-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat expedita blanditiis temporibus nobis et recusandae nam possimus quae architecto exercitationem vitae accusantium esse quam accusamus aliquam porro, officiis molestiae asperiores?</div>
                    </div>
                </TabPanel>

            </TabView>
        </div>
    )
}
