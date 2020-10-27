import React from 'react'
import { BtnWrapper,MessageInput,MessageWrapper,PenIcon,DropDownInput,FormWrapper, FormItem, FormInput, UserIcon, ItemsWrapper, EmailIcon, PhoneIcon} from './ContactFormStyle'
import {Button} from '../button/ButtonStyle'
const ContactForm = () => {
    return (
        <FormWrapper>
        <ItemsWrapper>
                <FormItem>
                    <FormInput type="text" placeholder="* Nume" required id="Nume client"></FormInput>
                    <UserIcon />
                </FormItem>
                <FormItem>
                    <FormInput type="email" placeholder="* Email" required id="Email client"></FormInput>
                    <EmailIcon />
                </FormItem>
        </ItemsWrapper>
            <ItemsWrapper>
                <FormItem>
                    <FormInput type="tel" placeholder="* Telefon" required id="Telefon client"></FormInput>
                    <PhoneIcon />
                </FormItem>
                <FormItem>
                    <DropDownInput >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </DropDownInput>
                </FormItem>
            </ItemsWrapper>
            <ItemsWrapper>
                <MessageWrapper>
                    <MessageInput type="textarea" placeholder="* Detalii lucrare" required id="mesaj-clinet" rows="20" cols="50"></MessageInput>
                    <PenIcon />
                </MessageWrapper>
            </ItemsWrapper>
            <BtnWrapper>
                <Button to="">Trimite</Button>
            </BtnWrapper>
        </FormWrapper>
    )
}

export default ContactForm
