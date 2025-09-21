
import {Result, Button} from 'antd'
import {useNavigate} from "react-router-dom";

export default function NotFound () {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return(
    <Result status={404} title='您访问的页面不存在' subTitle='点击按钮返回首页' extra={<Button type="primary" onClick={handleClick}>点击返回首页</Button>}/>
  )
}
