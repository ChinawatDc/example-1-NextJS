import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { CSVLink } from 'react-csv'

interface CsvExportProps {
  filename?: string
}

type Props = CsvExportProps

const CsvExport = ({ filename }: Props, ref: any) => {
  const [csvData, setCsvData]: any[] = useState([])
  const csvInstance = useRef<any | null>(null)

  const asyncExportMethod = async (result: any) => {
    setCsvData(result)
  }

  useImperativeHandle(
    ref,
    () => ({
      exportFromOutside(result: any) {
        asyncExportMethod(result)
      },
    }),
    []
  )

  useEffect(() => {
    if (csvData && csvInstance?.current?.link) {
      if (process.env.NODE_ENV == 'test') return
      /* istanbul ignore next */
      setTimeout(() => {
        csvInstance.current.link.click()
        setCsvData([])
      })
    }
  }, [csvData])

  return (
    <div>
      {csvData.length ? (
        <CSVLink
          data={csvData}
          filename={filename || 'export.csv'}
          ref={csvInstance}
        />
      ) : undefined}
    </div>
  )
}

export default forwardRef(CsvExport)
