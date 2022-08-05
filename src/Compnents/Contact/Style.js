/*
    ===============================
            Drop Styles
    ===============================
*/
import styled from 'styled-components';

export const DropSection = styled.div`
     padding: 50px 0;
     text-align: center
 `
 
export const DropTitle=styled.h2`
     font-size: 60px;
     margin-bottom: 30px
`
  
export const DropSpan=styled.span`
     font-weight: normal
`
 
export const DropForm=styled.form`
     width: 70%;
     margin: auto;
`
export const DropInput=styled.input`
     box-sizing: border-box;
     outline: 0;
     padding: 5px;
     margin-bottom: 10px
`
 export const FormInput = styled.div`
     overflow: hidden
 `
export const InputText=styled(DropInput)`
     float: left;
     width: 49%;
 `
 
 export const InputEmail=styled(DropInput)`
     float: right;  
     width: 49%;
 `
 
 export const InputSub=styled(DropInput)`
     width: 100%;
 `
 
 export const DropTextarea=styled.textarea`
     width: 100%;
     outline: 0;
     background: #ccc
`
 
export const InputSubmit=styled(DropInput)`
     width: 60%;
     background: #fff;
     border: 1px solid #ccc;
     color: #888;
     cursor: pointer
 `
 