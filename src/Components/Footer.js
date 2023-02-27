import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content' style={{
        padding: '5px 0 20px',
        margin: '40px auto',
        width: '80.77%'
      }}>

        <div style={{
          padding: '5px 0 20px',
          margin: '80px auto 60px'
        }}>
          <h1>Thank you for reading. Feel free to reach out for any further discussion, feedback or questions.</h1>
        </div>
        <div style={{
          paddingBottom: '80px',
        }}>
          <h4 style={{ fontSize: "25px" }}>Pan Pan</h4>
          <ul style={{
            display: 'flex',
            flexDirection: "column",
            float: 'right'
          }}>
            <li>
              <b>Email:</b>
              <a href="mailto:mailbox.pan@gmail.com">mailbox.pan@gmail.com</a>
            </li>
            <li>
              <b>Linkedin:</b>
              <a href="https://www.linkedin.com/in/panpanpan/">in/panpanpan</a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Footer