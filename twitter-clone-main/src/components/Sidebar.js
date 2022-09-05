import React from 'react'
import './SideBar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarLink from './SidebarLink';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';


function Sidebar() {
  return (
    <div className='sideBar'>
      <div className='twitter-icon'>
        <TwitterIcon fontSize='large'/>
      </div>
      <div className='sidebarLinks'>
        <SidebarLink Icon={HomeIcon} text='Home' />
        <SidebarLink Icon={TagIcon} text='Explore' />
        <SidebarLink Icon={NotificationsNoneOutlinedIcon} text='Notifications' />
        <SidebarLink Icon={EmailOutlinedIcon} text='Messages' />
        <SidebarLink Icon={BookmarkBorderOutlinedIcon} text='Bookmarks' />
        <SidebarLink Icon={AssignmentOutlinedIcon} text='Lists' />
        <SidebarLink Icon={PersonOutlineOutlinedIcon} text='Profile' />
        <SidebarLink Icon={PendingOutlinedIcon} text='More' />
      </div>
    </div>
  )
}

export default Sidebar
