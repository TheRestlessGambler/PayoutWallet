import { Stack, Center, Title, Text } from '@mantine/core';
import { PageHeader } from './components/header';
import { HeroBullets } from './components/heropage';
const link = {
  "links": [
    {
      "link": "/",
      "label": "home"
    },
    {
      "link": "#1",
      "label": "charge list",
      "links": [
        {
          "link": "/",
          "label": "Amazon"
        },
        {
          "link": "/",
          "label": "Simpl"
        },
        {
          "link": "/",
          "label": "Mobikwik"
        }
      ]
    },
    {
      "link": "/",
      "label": "Contact Us"
    },
  ]
}



function App() {
  return (
    <>
      <><Stack style={{ "backgroundColor": "#325cfd", "borderBottomLeftRadius": "50px", "borderBottomRightRadius": "50px" }}>
        <PageHeader links={link['links']} />
        <HeroBullets />
      </Stack>
      </>
      <Center style={{"display": "flex", "flexDirection": "column", "marginTop": "20px"}}>
        <Title order={1} style={{"fontFamily": "monospace", "paddingBottom": "20px"}}>
            About Us
        </Title >
        <Text style={{"fontFamily": "monospace", "paddingLeft": "30px"}} size={"lg"}>
          Payout wallet is a payment service through which you can transfer your cashback or money from your e-wallet apps to your bank account <br/> <Center>Our aim is to securely transfer your money through registered payment gateways </Center> <br/><Center> Please refer to the contact us section for any queries </Center>
        </Text>
      </Center>
    </>
  );
}

export default App;
