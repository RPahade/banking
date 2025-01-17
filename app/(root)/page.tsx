import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Adrian', lastName : "jsm", email: 'contact@jsm.pro'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
           type="greeting"
           title='Welcome'
           user = {loggedIn?.firstName || 'Guest'}
           subtext = 'Access and manage your account transactions efficiently'
          />
          <TotalBalanceBox
          accounts = {[]}
          totalBanks={1}
          totalCurrentBalance={1250.23}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance:120.23}, {currentBalance:500.23}]}
      />
    </section>
  )
}

export default Home
