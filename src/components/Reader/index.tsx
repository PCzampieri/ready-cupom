import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { api } from 'y/utils/api'

const Reader = () => {
  const [wasReady, setWasReady] = useState(false)
  const { mutate } = api.receiptRouter.createReceipt.useMutation({
    onSuccess: ()=> setWasReady(true)
  })
  const createReceipt = (url: string) => {
    mutate({
      url
    })
  }

  if (wasReady) {
    return <p>QR Lido!</p>
  }
  return (
    <>
    <QrReader
    onResult= {(result, error) => {
  if (!!result) {
    console.log(result)
    createReceipt(result.getText())
  }

  if (!!error) {
    console.info(error);
  }
}}
constraints = {{ facingMode: 'user' }}

/>
</>
 )
}

export default Reader

