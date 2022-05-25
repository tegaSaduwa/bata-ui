import ComponentsLayout from '@/components/ComponentsLayout'
import Sidebar from '@/layouts/Sidebar'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()
  const { pid } = router.query
  console.log(pid)
  return (
    <div>
       <>
      <div className="flex">
        <Sidebar />
        <ComponentsLayout heading={pid}/>
      </div>
    </>
    </div>
  )
}

export default index