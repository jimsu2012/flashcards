import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../router/router';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const history = useHistory()

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image
                        onClick={() => history.replace(ROUTES.home)}
                        src={"data:image/png;base64,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"}
                        height={"35px"}
                        paddingX={"10px"}
                    />

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        onClick={() => {
                            history.replace(ROUTES.home)
                        }}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Logout
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const history = useHistory()

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                onClick={() => history.replace(navItem.href)}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    const history = useHistory()
    return (
        <Link
            onClick={() => history.replace(href)}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};



const NAV_ITEMS = [
    {
        label: 'Decks',
        children: [
            {
                label: 'View Decks',
                subLabel: 'Look at the latest decks that people have created for your learning',
                href: ROUTES.view,
            },
            {
                label: 'Create Decks',
                subLabel: 'Help contribute to the decks and help eveyones learning as a community',
                href: ROUTES.add,
            },
        ],
    },
];