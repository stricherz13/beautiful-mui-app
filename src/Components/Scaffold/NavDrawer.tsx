import {AppBar, Drawer, List, ListItem, Toolbar, Typography} from "@mui/material";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";

const drawerWidth = 240;

const simpleStyles = {
    drawer: {
        width: drawerWidth,
        "& .MuiBackdrop-root": {
            display: "none"
        }
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(120, 120, 120, 0.2)"
    }
}

export default function NavDrawer() {
    return (
      <BrowserRouter>
          <div>
              <AppBar position="fixed" sx={{zIndex: 9999}}>
                  <Toolbar>
                      <Typography variant="h6" noWrap>
                          Advanced Material UI Styling
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Drawer variant="temporary" open={true} sx={simpleStyles.drawer} PaperProps={simpleStyles.drawerPaper}>
                  <List>
                      {[{text: "Input Form", route: "/form"}, {
                          text: "Contact card Grid", route: "/grid"}, {
                          text: "Contact Table", route: "/table"}, {
                          text: "Contact Data Grid", route: "/datagrid"
                      }].map((nav, index) => (
                        <ListItem key={nav.text}><Link to={nav.route}>{nav.text}</Link></ListItem>
                      ))}
                  </List>
              </Drawer>
              <main>
                  <Routes>
                      <Route path="/" element={<ContactForm/>}/>
                      <Route path="/form" element={<ContactForm/>}/>
                      <Route path="/grid" element={<ContactCardGrid/>}/>
                      <Route path="/table" element={<ContactTable/>}/>
                      <Route path="/datagrid" element={<ContactDataGrid/>}/>
                  </Routes>
              </main>
          </div>
      </BrowserRouter>
    )
}