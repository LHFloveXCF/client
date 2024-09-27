import classNames from 'classnames'
import './index.scss'
import { useMemo, useState } from 'react'
import { billTypeToName } from '@/constants/billType'
import Icon from '@/constants/icon'

// 用{}来接受其它组件传入的参数；参数名字已经定义好的
const DailyBill = ({ date, dayBillList }) => {
    // 使用useMemo来计算每日数据
    const result = useMemo(() => {
        console.log(dayBillList);

        const pay = dayBillList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
        const get = dayBillList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
        return {
            pay,
            get,
            total: pay + get
        }
    }, [dayBillList])

    // 使用useState控制账单的打开和关闭
    const [visible, setVisible] = useState(false)
    return (
        <div className={classNames('dailyBill')} onClick={() => setVisible(!visible)}>
            <div className="header">
                <div className="dateIcon">
                    <span className="date">{date}</span>
                    <span className={classNames('arrow', !visible && 'expand')}></span>
                </div>
                <div className="oneLineOverview">
                    <div className="pay">
                        <span className="type">支出</span>
                        <span className="money">{result.pay}</span>
                    </div>
                    <div className="income">
                        <span className="type">收入</span>
                        <span className="money">{result.get}</span>
                    </div>
                    <div className="balance">
                        <span className="money">{result.total}</span>
                        <span className="type">结余</span>
                    </div>
                </div>
                {/* 单日列表 */}
                <div className="billList" style={{ display: !visible && 'none' }}>
                    {dayBillList.map(item => {
                        return (
                            <div className="bill" key={item.id}>
                                <div className="detail">
                                    <div className="billType">
                                        <Icon type={item.useFor}/> {billTypeToName[item.useFor]}
                                    </div>
                                </div>
                                <div className={classNames('money', item.type)}>
                                    {item.money.toFixed(2)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default DailyBill