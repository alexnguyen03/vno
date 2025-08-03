import { AbsoluteCenter, Box, Button, Dialog, Menu, Portal, SimpleGrid } from '@chakra-ui/react';

export function Toolbar() {
  return (
    <Box bg={'red.200'} position="relative" h="80px">
      <AbsoluteCenter>
        <SimpleGrid columns={{ base: 3, md: 3 }} gap={{ base: '24px', md: '32px' }}>
          <Box borderRadius="md" color="fg">
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="plain" outline={0} size="sm">
                  Notes
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="new-txt">New Text note</Menu.Item>
                    <Menu.Item value="new-file">New note...</Menu.Item>
                    <Menu.Item value="new-win">New Window</Menu.Item>
                    <Menu.Item value="open-file">Open note...</Menu.Item>
                    <Menu.Item value="export">Export</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
          <Box borderRadius="md" color="fg">
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="plain" outline={0} size="sm">
                  Journals
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="new-txt">New Text note</Menu.Item>
                    <Menu.Item value="new-file">New note...</Menu.Item>
                    <Menu.Item value="new-win">New Window</Menu.Item>
                    <Menu.Item value="open-file">Open note...</Menu.Item>
                    <Menu.Item value="export">Export</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
          <Box borderRadius="md" color="fg">
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="plain" outline={0} size="sm">
                  Planing
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="new-txt">New Text note</Menu.Item>
                    <Menu.Item value="new-file">New note...</Menu.Item>
                    <Menu.Item value="new-win">New Window</Menu.Item>
                    <Menu.Item value="open-file">Open note...</Menu.Item>
                    <Menu.Item value="export">Export</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </SimpleGrid>
      </AbsoluteCenter>
    </Box>
  );
}
