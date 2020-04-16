import React from 'react';
import CountDown from 'ant-design-pro/lib/CountDown';

const targetTime = new Date().getTime() + 3900000;

    const Clock = () => (
        <CountDown style={{ fontSize: 20 }} target={targetTime} />
    )

    export default Clock;