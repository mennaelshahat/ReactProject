import {React} from 'react';
import { DropForm, DropSection, DropSpan, DropTitle, InputText ,InputEmail, InputSub, InputSubmit ,DropTextarea,FormInput } from './Style';
import Footer from './../Footer';
const Contact = () => {
  return (
    <>
        <DropSection>
            <div class="container">
                <DropTitle><DropSpan>Drop </DropSpan>Me A line</DropTitle>
                <DropForm action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputSub type="text" class="sub" placeholder="Your Subject"/>
                    <DropTextarea cols="30" rows="10" placeholder="Your Message"></DropTextarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </DropForm>
            </div>
        </DropSection>
        <Footer />
        </>
  );
}

export default Contact;
