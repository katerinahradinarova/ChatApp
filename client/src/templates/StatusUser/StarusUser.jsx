import React, { useState } from 'react';
import UserItem from './UserItem';
import imgUser from '../../images/img-user.png';
import SearchUser from './SearchUser';
import Bots from '../Bots/Bots';


export default function StarusUser({ data,
    status, statusFunc, users, func, funcC }) {

    const [activeTab, setActiveTab] = useState('Online')

    const [find, setFind] = useState('')

    const setUser = (usr) => {
        func(usr)
      
        const one = data.username.split('#')[1]
        const two = usr?.username ? usr.username.split('#')[1] : `Bot #234242`.split('#')[1];
        funcC(parseInt(one) + parseInt(two))
    }

    return (
        <div className={`status-user ${status ? 'show' : ''}`}>
            <div className="status-user-top">
                <div className="status-user__header">

                    <div className="closeee" onClick={e => statusFunc(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div 
                        onClick={e => setActiveTab('Online')}
                        className={`${activeTab === 'All' || 'status-user-active'}`}>
                        <p>Online</p>
                    </div>
                    <div
                        onClick={e => setActiveTab('All')}
                        className={`${activeTab === 'Online' || 'status-user-active'}`}>
                        <p>All</p>
                    </div>
                </div>
                <div className="block-users">
                    {activeTab === 'Online' ? (
                        <>
                        {users.map(user => {
                            if(user.status === 'online' && user.username !== data.username) {
                                if(find !== '') {
                                    if(user.username.includes(find)) {
                                        return (
                                            <div onClick={e => setUser(user)}>
                                                <UserItem img={imgUser} name={user.username} link='lorem loremlorem loremlorem loremlorem lorem' />
                                            </div>
                                        )
                                    }
                                } else {
                                    return (
                                        <div onClick={e => setUser(user)}>
                                            <UserItem img={imgUser} name={user.username} link='lorem loremlorem loremlorem loremlorem lorem' />
                                        </div>
                                    )
                                }
                            }
                            return  <div onClick={() => setUser(user)}><Bots data={user}/></div>
                        })}
                        </>
                    ) : (
                        <>
                        {users.map(user => {
                            if (user?.type) {
                                return  <div onClick={() => setUser(user)}><Bots data={user}/></div>
                            } else {
                                return <div onClick={() => setUser(user)}> <UserItem img={imgUser} name={user.username} link='lorem loremlorem loremlorem loremlorem lorem' /></div>
                            }
                               
                            
                        })}
                        </>
                    )}
                </div>
            </div>
            <div className="status-user-bottom">
                <SearchUser func={setFind} />
            </div>
        </div>
    )
}
