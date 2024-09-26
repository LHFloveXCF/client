import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {
  const [state, setState] = useState(false)

  const { billList } = useSelector(state => state.bills)
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY | M'))
  }, [billList])

  const [dateNow, setDate] = useState(() => {
    return dayjs().format('YYYY | M')
  })

  const [currentGroup, setCurrentGroup] = useState(() => {
    return monthGroup[dateNow] ? monthGroup[dateNow] : []
  })

  // console.log(monthGroup);



  function onConfirmDate(date) {
    setState(false)
    const formatDate = dayjs(date).format('YYYY | M')
    setDate(formatDate)

    setCurrentGroup(monthGroup[formatDate] ? monthGroup[formatDate] : [])
  }

  const currentResult = useMemo(() => {
    const pay = currentGroup.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const get = currentGroup.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
    return {
      pay, get, total: pay + get
    }
  }, [currentGroup])

  // console.log(currentResult);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setState(true)}>
            <span className="text">
              {dateNow}账单
            </span>
            <span className={classNames('arrow', state && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{currentResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{currentResult.get.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{currentResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={state}
            onCancel={() => setState(false)}
            onClose={() => setState(false)}
            onConfirm={(value) => onConfirmDate(value)}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month