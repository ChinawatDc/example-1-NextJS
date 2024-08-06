"use client"
import React, { useState, useEffect } from 'react';
import TableBasic from '@/src/components/Tables/TableBasic';
import { generateMockData, Product } from '@/src/services/api/mockup.serviecs';
import { ColumnMeta } from "@/src/models/table.model";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { PrimeReactProvider } from 'primereact/api';
export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const columns: ColumnMeta<Product>[] = [
    { field: 'code', header: 'รหัส' },
    { field: 'name', header: 'ชื่อ', sortable: true },
    { field: 'category', header: 'ประเภท' },
    { field: 'quantity', header: 'ปริมาณ' },
    {
      field: "action",
      header: "จัดการ",
      render: (val, rec) => (
        <div>
          <Button
            onClick={() => console.log("val:", val)}
          >
            ทดสอบ
          </Button>
        </div>

      ),
    },
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
