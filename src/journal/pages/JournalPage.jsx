
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
    {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint similique deleniti incidunt necessitatibus assumenda. Libero non iure perspiciatis magnam temporibus explicabo dignissimos fugiat amet placeat. Animi cumque aut eaque pariatur?</Typography> */}
    <NothingSelectedView />
   {/*  <NoteView/> */}
    <IconButton
      size="large"
      sx={{
        color: "white",
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50, 
        bottom:50
      }}
    >
      <AddOutlined sx={{ fontSize:30 }}/>

    </IconButton>
    {/* Nothing Selected */}
    {/* NoteView */}
    </JournalLayout>
  )
}
