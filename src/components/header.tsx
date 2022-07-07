import { MediaQuery, createStyles, Header, Menu, Group, Center, Burger, Image , Modal, Button, TextInput} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import { IoWalletOutline } from 'react-icons/io5'
const useStyles = createStyles((theme) => ({
    inner: {
        height: "inherit",
        display: 'flex',
    },

    links: {
        marginRight: "400px",
        [theme.fn.smallerThan('lg')]: {
            display: 'none',
        },
    },

    burger: {
        marginRight: "40px",
        paddingTop: "50px",
        [theme.fn.largerThan('lg')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten("#D3D3D3", 1),
            color: "#000000",
            cursor: "pointer"
        },
    },

    linkLabel: {
        marginRight: 5,
    },
}));

interface HeaderSearchProps {
    links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function PageHeader({ links }: HeaderSearchProps) {
    const [modalOpened, setOpened] = useState(false);
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes } = useStyles();
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    delay={0}
                    transitionDuration={0}
                    placement="end"
                    gutter={1}
                    control={
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <MdOutlineKeyboardArrowDown size={15} />
                            </Center>
                        </a>
                    }
                >
                    {menuItems}
                </Menu>
            );
        }
        return (
            <a
                key={link.label}
                className={classes.link}
                onClick={link.label === "Contact Us" ? () => { setOpened(true); } : (event) => event.preventDefault()}
            >
                {link.label}
            </a>

        );
    });

    console.log(modalOpened)
    return (
        <>
            <Header height={100} style={{ "backgroundColor": "transparent", "borderBottom": 0, "position": "relative" }} fixed={true}>
                <div className={classes.inner}>
                    <MediaQuery smallerThan={"lg"} styles={{ "marginLeft": "5% !important" }}>
                        <Group style={{ "marginRight": "auto", "marginLeft": "200px" }} spacing={10}>
                            <Image src='https://media.discordapp.net/attachments/950689808366325820/992085364103712798/PAY_OUT.png' />
                            <IoWalletOutline size={60} color={"#FFFFFF"} />
                        </Group>
                    </MediaQuery>
                    <Group spacing={20} className={classes.links}>
                        {items}
                    </Group>
                    <Burger
                        color={"white"}
                        opened={opened}
                        onClick={() => toggleOpened()}
                        className={classes.burger}
                        size="lg"
                    />
                </div>
            </Header>
            <>
                <Modal
                    opened={modalOpened}
                    onClose={() => setOpened(false)}
                    title="Enter your details"
                >
                   <TextInput label={"Full name"} required></TextInput>
                   <TextInput label={"Email ID"} required></TextInput>
                   <TextInput label={"Phone"} required></TextInput>
                   <Button style={{"marginTop": "20px"}} onClick={() => {setOpened(false); showNotification({
                    "title": "Thank you",
                    "message": "We'll contact you soon!",
                    "autoClose": 5000
                   })}}> Submit </Button>
                </Modal>
            </>
        </>
    );
}