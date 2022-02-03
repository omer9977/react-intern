import React from 'react'
import { Checkbox, Grid, Menu, Sidebar } from 'semantic-ui-react'


export default function SideBar() {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid>
      <Grid.Column width={16}>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column width={4}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => {
              setVisible(false)
            }}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Games</Menu.Item>
            <Menu.Item as='a'>Channels</Menu.Item>
          </Sidebar>
      </Grid.Column>
    </Grid>
  )
}
