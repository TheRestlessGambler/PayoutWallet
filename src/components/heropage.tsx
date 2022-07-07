
import {
    createStyles,
    Button,
    Group,
    Text,
} from '@mantine/core';
import { ReactComponent as SVG } from '../assets/wallet.svg'

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: "150px",
        paddingBottom: "17%"
    },

    content: {
        marginTop:"90px",
        marginLeft: "12%",
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: "5%",
            marginLeft: "10%",
        },
    },
    button: {
        marginTop: "30px",
        marginLeft: "70px",
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,
        height: "300px",

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

}));

export function HeroBullets() {
    const { classes } = useStyles();
    return (
        <div>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Text color="white" mt="md" size={"xl"} style={{"opacity": "0.5"}}>
                        transfer your money seemlessely 
                    </Text>            

                    <Group mt={30}>
                        <a href='https://rzp.io/l/IAWEpIx'>
                        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className={classes.button} size={"xl"} component="a">
                            Transfer
                        </Button>
                        </a>
                    </Group>
                </div>
                <SVG className={classes.image} />
            </div>
        </div>
    );
}