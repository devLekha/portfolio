import React from 'react'

export const Footer = () => {
    let myStyle = {
        position: "relative",

        width: '100%'
    }
    return (
        <footer class="footer mt-auto py-3 bg-dark" style={myStyle}>
            <div class="container">
                <span class="text-muted">Copyright &copy; 2016-2021 Lekha Saraf, All Rights Reserved.</span>
            </div>
        </footer>
    )
}
