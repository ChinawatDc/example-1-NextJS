"use client"

import FullScreen from "@/components/Galleria/FullScreen";
import { getPhotos } from "@/services/api/photos.api.mockup";
import { dataProps } from "@/types/fileUpload.model";
import { useEffect, useState } from "react";

export default function Galleria() {
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
    const [data, setData] = useState<dataProps[]>([]);
    return (
        <div>
            <FullScreen data={data} />
        </div>
    )
}
