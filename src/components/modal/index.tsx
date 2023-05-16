import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import  styled, { keyframes }  from 'styled-components'
import { AiFillCloseSquare, AiFillEye } from "react-icons/ai";

interface Props {
    title: string,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    icon?: any,
    obj: any
}
export const Modal: React.FC <Props>= ({title, setIsOpen , icon, obj}) => {
    const details: [string, string][] = Object.entries(obj);
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
     
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
      
    
  return (
    <ModalContainer id="modal-container">
        <ModalContent ref={modalRef}>   
            <CloseIcon onClick={closeModal}><AiFillCloseSquare color='#7e7e7e' size={27}/></CloseIcon>
            <div>
                <AiFillEye color='#7e7e7e' size={30}/> 
                <h2 style={{marginTop: '0px'}}>{title}</h2>
            </div>
            <ModalDetails>
                {icon}
                <DetailsItems>
                    { details.map((detail) => (
                        <DetailsItem>
                            <ItemName>{detail[0]}</ItemName>
                            <ItemValue >{detail[1]}</ItemValue>
                        </DetailsItem>
                    ))}
                </DetailsItems>
            </ModalDetails>
        </ModalContent>
    </ModalContainer>
  )
}
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform:  scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const ModalContainer = styled.div`
    position: fixed; 
    z-index: 10; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-image: linear-gradient(to bottom right, #22582881, #e6a71e71);
`;
const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 60px 20px 20px 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 40%;
    animation: ${fadeIn} 0.3s ease-out;
`;
const CloseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;
const ModalDetails = styled.div`
    background-color: #f1f1f1;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
`;
const DetailsItems = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    padding: 10px;
`;
const DetailsItem = styled.span`
        display: flex;
        flex-direction: column;
`;
const ItemName = styled.span`
    font-size:13px;
    font-weight:500;
    margin-bottom:4px;
`;
const ItemValue = styled.span`
    font-size:13px;
    font-weight:700;
`;