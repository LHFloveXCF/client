import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '@/constants/icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/constants/billType'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { addBill } from '@/store/modules/billListStore'
import { type } from '@testing-library/user-event/dist/type'
import { uniqueId } from 'lodash'

const New = () => {
    const navigate = useNavigate()
    // 账单类型
    const [billType, setBillType] = useState('income')
    // 账单icon
    const [billOpsFor, setOpsFor] = useState('')
    // 账单日期选择框
    const [billDateState, setBillDateState] = useState(false)
    // 账单日期
    const [billDate, setBillDate] = useState('今天')
    // 账单总额
    const [billCount, setBillCount] = useState("")
    function changeCount(value) {
        setBillCount(value)
    }
    // 保存账单

    const dispatch = useDispatch()
    const saveBill = () => {
        const newBill = {
            type:billType,
            money:billType === 'income' ? +billCount : -billCount,
            useFor:billOpsFor,
            date: dayjs().format(),
            id: uniqueId()
        }

        console.log(newBill);
        

        dispatch(addBill(newBill))
    }

    function confirmBillDate(selectDate) {
        setBillDateState(false)
        setBillDate(dayjs(selectDate).format('MM-DD'))
    }
    return (
        <div className="keepAccounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>
                记一笔
            </NavBar>

            <div className="header">
                <div className="kaType">
                    <Button
                        shape="rounded"
                        onClick={() => setBillType('pay')}
                        className={classNames(billType === 'pay' ? 'selected' : '')}
                    >
                        支出
                    </Button>
                    <Button
                        onClick={() => setBillType('income')}
                        className={classNames(billType === 'income' ? 'selected' : '')}
                        shape="rounded"
                    >
                        收入
                    </Button>
                </div>

                <div className="kaFormWrapper">
                    <div className="kaForm">
                        <div className="date"  onClick={() => setBillDateState(true)} >
                            <Icon type="calendar" className="icon"/>
                            <span className="text">{billDate}</span>
                            <DatePicker
                                className="kaDate"
                                title="记账日期"
                                visible={billDateState}
                                onConfirm={(value) => confirmBillDate(value)}
                                onCancel={() => setBillDateState(false)}
                                max={new Date()}
                            />
                        </div>
                        <div className="kaInput">
                            <Input
                                className="input"
                                placeholder="0.00"
                                type="number"
                                value={billCount}
                                onChange={(value) => changeCount(value)}
                            />
                            <span className="iconYuan">¥</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kaTypeList">
                {billListData[billType].map(item => {
                    return (
                        <div className="kaType" key={item.type}>
                            <div className="title">{item.name}</div>
                            <div className="list">
                                {item.list.map(item => {
                                    return (
                                        <div
                                            className={classNames(
                                                'item',
                                                billOpsFor === item.type ? 'selected' : ''
                                            )}
                                            onClick={() => setOpsFor(item.type)}
                                            key={item.type}
                                        >
                                            <div className={classNames('icon')}>
                                                <Icon type={item.type} />
                                            </div>
                                            <div className="text">{item.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="btns">
                <Button className="btn save" onClick={() => saveBill()}>
                    保 存
                </Button>
            </div>
        </div>
    )
}

export default New