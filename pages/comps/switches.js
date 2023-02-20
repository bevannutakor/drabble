import React from 'react'
import { createTheme, NextUIProvider, Grid, Switch } from "@nextui-org/react";
import { UilEnvelope, UilEnvelopeBlock, UilBell, UilBellSlash, UilPadlock, UilLockOpenAlt, UilMapMarkerAlt, UilMapMarkerSlash, UilParkingCircle  } from '@iconscout/react-unicons'

function Switches() {
  return (
    // <NextUIProvider theme={theme}>
        <Grid.Container gap={2} className='justify-center items-center'>

            <div className='inline-block justify-center items-center text-center'>
            {/* <UilBell className='mx-8' /> */}
                <Grid >
                <Switch
                bordered
                checked={true}
                size="xl"
                color="neutral"
                css={{
                    color: '#78716c',
                    $$switchColor: '#78716c',
                    $$primarySolidHover: '#a8a29e',
                    '&:hover': {
                        color: '#78716c',
                    },
                    '&:focus': {
                        borderColor: '$background',
                    },
                    '&:active': {
                        color: '$background',
                    },
                    
                }}
                iconOn={<UilBell />}
                iconOff={<UilBellSlash />}
                />
            </Grid>
            </div>
            
            <div className='inline-block justify-center items-center text-center'>
            {/* <UilEnvelope className='mx-8' /> */}
                <Grid >
                <Switch
                bordered
                checked={true}
                size="xl"
                color="neutral"
                css={{
                    color: '#78716c',
                    $$switchColor: '#78716c',
                    $$primarySolidHover: '#a8a29e',
                    '&:hover': {
                        color: '#78716c',
                    },
                    '&:focus': {
                        borderColor: '$background',
                    },
                    '&:active': {
                        color: '$background',
                    },
                    
                }}
                iconOn={<UilEnvelope />}
                iconOff={<UilEnvelopeBlock />}
                />
            </Grid>
            </div>

            <div className='inline-block justify-center items-center text-center'>
            {/* <UilMapMarkerAlt className='mx-8' /> */}
                <Grid >
                <Switch
                bordered
                checked={true}
                size="xl"
                color="neutral"
                css={{
                    color: '#78716c',
                    $$switchColor: '#78716c',
                    $$primarySolidHover: '#a8a29e',
                    '&:hover': {
                        color: '#78716c',
                    },
                    '&:focus': {
                        borderColor: '$background',
                    },
                    '&:active': {
                        color: '$background',
                    },
                    
                }}
                iconOn={<UilMapMarkerAlt />}
                iconOff={<UilMapMarkerSlash />}
                />
            </Grid>
            </div>

            <div className='inline-block justify-center items-center text-center'>
            {/* <UilPadlock className='mx-8' /> */}
                <Grid >
                <Switch
                bordered
                checked={true}
                size="xl"
                color="neutral"
                css={{
                    color: '#78716c',
                    $$switchColor: '#78716c',
                    $$primarySolidHover: '#a8a29e',
                    '&:hover': {
                        color: '#78716c',
                    },
                    '&:focus': {
                        borderColor: '$background',
                    },
                    '&:active': {
                        color: '$background',
                    },
                    
                }}
                iconOn={<UilPadlock />}
                iconOff={<UilLockOpenAlt />}
                />
            </Grid>
            </div>

            <div className='inline-block justify-center items-center text-center'>
            {/* <UilParkingCircle className='mx-8' /> */}
                <Grid >
                <Switch
                bordered
                checked={true}
                size="xl"
                color="neutral"
                css={{
                    color: '#78716c',
                    $$switchColor: '#78716c',
                    $$solidHover: '#a8a29e',
                    '&:hover': {
                        color: '#78716c',
                    },
                    '&:focus': {
                        borderColor: '$background',
                    },
                    '&:active': {
                        color: '$background',
                    },
                    
                }}
                icon={<UilParkingCircle />}
                />
            </Grid>
            </div>

        </Grid.Container>
    // </NextUIProvider>
  )
}

export default Switches
