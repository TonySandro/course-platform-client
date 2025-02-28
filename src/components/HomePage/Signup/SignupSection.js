import React, { useState } from 'react';
import {
    SignupSec,
    Container,
    SignupRow,
    SignupColumn,
    FormWrapper,
    FormLabel,
    FormInput,
    Button,
    Heading,
} from './SignupSection.elements'; 

const SignupSection = ({ lightBg, lightText, primary }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const userData = {
            name,
            email,
            password,
        };

        try {
            const response = await fetch('https://sua-api-de-cadastro.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Cadastro realizado com sucesso!');
                console.log('Resposta da API:', data);
            } else {
                alert('Erro ao cadastrar. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao conectar com a API.');
        }
    };

    return (
        <SignupSec lightBg={lightBg}>
            <Container>
                <SignupRow>
                    <SignupColumn lightBg={lightBg}>
                        <FormWrapper onSubmit={handleSubmit}>
                            <Heading lightText={lightText}>Cadastre-se</Heading>

                            <FormLabel lightText={lightText}>Nome</FormLabel>
                            <FormInput
                                type="text"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                lightBg={lightBg}
                                required
                            />

                            <FormLabel lightText={lightText}>Email</FormLabel>
                            <FormInput
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                lightBg={lightBg}
                                required
                            />

                            <FormLabel lightText={lightText}>Senha</FormLabel>
                            <FormInput
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                lightBg={lightBg}
                                required
                            />

                            <FormLabel lightText={lightText}>Confirme sua senha</FormLabel>
                            <FormInput
                                type="password"
                                placeholder="Confirme sua senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                lightBg={lightBg}
                                required
                            />

                            <Button type="submit" primary={primary}>
                                Cadastrar
                            </Button>
                        </FormWrapper>
                    </SignupColumn>
                </SignupRow>
            </Container>
        </SignupSec>
    );
};

export default SignupSection;