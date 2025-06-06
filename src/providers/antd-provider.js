import { ConfigProvider } from 'antd'
import React from 'react'

export const AntdProvider = ({ children }) => {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#ed4192",
                colorInfo: "#ed4192",
                controlHeight: 40,
            }
        }}>{children}</ConfigProvider>
    )
}
