"use client"
import React, { useState, useEffect } from 'react';
import TableBasic from '@/components/Tables/TableBasic';
import { generateMockData, Product } from '@/services/api/mockup.serviecs';
import { ColumnMeta } from "@/models/table.model";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import TagStatus from '@/components/Misc/TagStatus';
import ConvertDate from '@/components/Misc/ConvertDate';
export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const columns: ColumnMeta<Product>[] = [
    // { field: 'code', header: 'รหัส' },
    { field: 'name', header: 'ชื่อโครงการ', sortable: true },
    {
      field: 'quantity', header: '%',
      render: (val, rec) => (
        <>
          {val.quantity}%
        </>
      ),
    },
    { field: 'nameby', header: 'ผู้สร้างโครงการ' },
    {
      field: 'status', header: 'สถานะ', align: 'center',
      render: (val, rec) => (
        <TagStatus name={val.status} />
      ),
    },
    {
      field: 'startdate', header: 'สถานะ', align: 'center',
      render: (val, rec) => (
        <ConvertDate date={val.startdate} />
      ),
    },
    {
      field: 'enddate', header: 'สถานะ', align: 'center',
      render: (val, rec) => (
        <ConvertDate date={val.enddate} />
      ),
    },
    // {
    //   field: "action",
    //   header: "จัดการ",
    //   render: (val, rec) => (
    //     <div>
    //       <Button
    //         onClick={() => console.log("val:", val)}
    //       >
    //         ดู
    //       </Button>
    //     </div>

    //   ),
    // },
  ];

  useEffect(() => {
    const res = generateMockData();
    setData(res.entities);
    setTotalRecords(res.page_information.count);
  }, []);

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
