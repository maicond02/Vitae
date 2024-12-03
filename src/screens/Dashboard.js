import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
    return (
        <Background>
            <Logo />
            <Header>Cadastrado com Sucesso</Header>
            <Paragraph>
                Seja Bem Vindo ao Vitae.
            </Paragraph>
            <Button
                mode="outlined"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })
                }
            >
                Entrar
            </Button>
        </Background>
    )
}
