import styled from 'styled-components'
import { FaUserAlt, FaPhone, FaPenFancy } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
export const UserIcon = styled(FaUserAlt)`
    fill: #00B680 !important;
    margin-right:20px;

`
export const EmailIcon = styled(MdEmail)`
    fill: #00B680 !important;
    margin-right:20px;

`
export const PhoneIcon = styled(FaPhone)`
    fill: #00B680 !important;
    margin-right:20px;

`
export const PenIcon = styled(FaPenFancy)`
    fill: #00B680 !important;
    margin-right:20px;

`
export const FormWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
`
export const FormItem = styled.div`
   background-color: white;
    height: 50px;
    width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
     @media screen and (max-width:600px){
        margin-bottom:20px;
        width:100%;
    }
`
export const Form = styled.form`

`
export const FormInput= styled.input`
    background: none;
    border: none;
    flex: 1;
    height: 100%;
    outline: none;
    padding-left:20px; 
    position:relative;

`
export const ItemsWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    @media screen and (max-width:600px){
        flex-direction:column;
    }
`
export const DropDownInput = styled.select`
    width:100%;
    border:none;
`
export const MessageWrapper = styled.div`
    background-color: white;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 5px;
    #mesaj-clinet{
        height:100%;
    }
    svg{
        margin-top:10px !important;
        margin-right:10px !important;
    }
    input{
        
        &::-webkit-input-placeholder{
        position:absolute;
        top:0;
        }
    }
`
export const MessageInput = styled.textarea`
    background: none;
    border: none;
    flex: 1;
    height: 100%;
    outline: none;
    padding-left:20px; 
    position:relative;
    resize:none;
`
export const BtnWrapper = styled.div`
    align-self:start;
`