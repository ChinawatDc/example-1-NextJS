"use client"
import React, { useState, useEffect } from 'react';
import TableBasic from '@/components/Tables/TableBasic';
import { generateMockData, Product } from '@/services/api/mockup.serviecs';
import { ColumnMeta } from "../../types/table.model";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import TagStatus from '@/components/Misc/TagStatus';
import ConvertDate from '@/components/Misc/ConvertDate';
import { getentity } from "@/services/api/api.mockup";
export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const fetchData = async () => {
    try {
      const res = await getentity();
      if (res) {
        setData(res.body);
        setTotalRecords(res.body.length);
      } else {
        console.error('Fetched data is not an array:');
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching:', error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnMeta<Product>[] = [
    // { field: 'code', header: 'รหัส' },
    { field: 'content', header: 'content', sortable: true, },
    { field: 'email', header: 'email' },
    { field: 'mobile', header: 'mobile' },
    {
      field: "action",
      header: "จัดการ",
      frozen: true,
      render: (val, rec) => (
        <div>
          <Button
            onClick={() => console.log("val:", val)}
          >
            ดู
          </Button>
        </div>

      ),
    },
  ];

  return (
    <>
      <div>
        <>ตาราง1</>
        <Card>
          <TableBasic data={data} total={totalRecords} columns={columns} />
        </Card>

      </div>
      <div>
        <>ตาราง2</>
        <Card>
          <TableBasic data={data} total={totalRecords} columns={columns} selection exports tablename={"ชื่อตาราง"} />
        </Card>
      </div>
      <div>
        <>ตาราง3</>
        <Card>
          <TableBasic data={data} total={totalRecords} columns={columns} exports />
        </Card>

      </div>
    </>
  );
}
