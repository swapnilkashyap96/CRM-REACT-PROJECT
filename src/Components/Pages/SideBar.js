import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'
import DashboardIcon from '../../assets/icon/menu/dashboard-active.svg'
import TasksIcon from '../../assets/icon/menu/tasks.svg'
import EmailIcon from '../../assets/icon/menu/email.svg'
import ContactsIcon from '../../assets/icon/menu/contacts.svg'
import ChatsIcon from '../../assets/icon/menu/chat.svg'
import DealsIcon from '../../assets/icon/menu/deals.svg'
import SettingIcon from '../../assets/icon/settings/settings.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'


function SideBar() {
    const headerHeading = useSelector((state) => state.headerHeading.taskHeading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTaskHeading('Dashboard'))
    }, [])

    return (
        <>

            <div className='sidebar'>


                <div className='row justify-content-start'>
                    <h5 className='p-2 fz-3  color-blue'>{headerHeading}</h5>
                </div>

                <div className='row'>
                    <ul className='d-flex'>
                        <li><img src={DashboardIcon}></img> <Link className='pl-2' to='/'> Dashboard</Link></li>
                        <li><img src={TasksIcon}></img> <Link className='pl-2' to='/tasks'> Tasks</Link></li>
                        <li><img src={EmailIcon}></img> <Link className='pl-2' to='/email'> Email</Link></li>
                        <li><img src={ContactsIcon}></img> <Link className='pl-2' to='/contacts'> Contacts</Link></li>
                        <li><img src={ChatsIcon}></img> <Link className='pl-2' to='/chats'> Chat</Link></li>
                        <li><img src={DealsIcon}></img> <Link className='pl-2' to='/deals'> Deals</Link></li>
                        <li><img src={SettingIcon}></img> <Link className='pl-2' to='/settings'> Settings</Link></li>
                    </ul>
                </div>


            </div>

        </>
    )
}

export default SideBar