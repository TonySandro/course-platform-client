import styled from 'styled-components';

export const SignupSec = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#101522')};
    color: ${({ lightBg }) => (lightBg ? '#101522' : '#f9f9f9')};
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
`;

export const SignupRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignupColumn = styled.div`
    background: ${({ lightBg }) => (lightBg ? '#fff' : 'rgba(255, 255, 255, 0.1)')};
    padding: 40px;
    border-radius: 10px;
    backdrop-filter: ${({ lightBg }) => (lightBg ? 'none' : 'blur(10px)')};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: ${({ lightBg }) => (lightBg ? '1px solid #ddd' : '1px solid rgba(255, 255, 255, 0.3)')};
    max-width: 500px;
    width: 100%;
`;

export const FormWrapper = styled.div`
    max-width: 100%;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 20px;
    border: 1px solid ${({ lightBg }) => (lightBg ? '#ccc' : 'rgba(255, 255, 255, 0.3)')};
    border-radius: 5px;
    background: ${({ lightBg }) => (lightBg ? '#fff' : 'transparent')};
    color: ${({ lightBg }) => (lightBg ? '#101522' : '#fff')};
    font-size: 16px;

    &::placeholder {
        color: ${({ lightBg }) => (lightBg ? '#999' : 'rgba(255, 255, 255, 0.7)')};
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 5px;
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
    }
`;

export const Heading = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const ResponsiveWrapper = styled.div`
    @media (max-width: 768px) {
        ${SignupColumn} {
            padding: 20px;
        }

        ${FormInput} {
            padding: 10px 12px;
        }

        ${Button} {
            padding: 10px 12px;
        }

        ${Heading} {
            font-size: 28px;
        }
    }
`;