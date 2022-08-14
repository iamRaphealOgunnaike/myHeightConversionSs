import { useState } from 'react';
import Form from 'react-bootstrap/Form';



const Converter =()=>{
    const [fromUnit,setFromUnit]=useState("Kilogram(kg)")
    const [toUnit,setToUnit]=useState("Gram(g)")
    const [value,setValue]= useState("")
    const [result,setResult]= useState("")
    const [currentConversion, setCurrentConversion]= useState("1")
    
    const onSelectChange=(event)=>{
      console.log('event', event.target.value)
      const value = event.target.value
      setCurrentConversion(value)
      setValue("")
      setResult("")
      if(value=='1'){
        setFromUnit('Kilogram(kg)')
        setToUnit('Gram(g)')
      }
      else if(value=='2'){
        setFromUnit('Kilogram(kg)')
        setToUnit('Decagram(dag)')
      }
      else if(value=='3'){
        setFromUnit('Gram(g)')
        setToUnit('Decagram(dag)')

      }
    }
    
    const onValueChange =(event)=>{    
      setValue(event.target.value)
      if(event.target.value==''){
        setResult("")
      }
      else {
        if(currentConversion=='1'){
          setResult(parseFloat(event.target.value)*1000)
        }
        else if(currentConversion=='2'){
          setResult(parseFloat(event.target.value)*100)
        }
        else if(currentConversion=='3'){
          setResult(parseFloat(event.target.value)*0.1)
        }

      }
    }

    const onResultChange =(event)=>{
      setResult(event.target.value)
      if(event.target.value==''){
        setValue("")
      }
      else {
        if(currentConversion=='1'){
          setValue(parseFloat(event.target.value)/1000)
        }
        else if(currentConversion=='2'){
          setValue(parseFloat(event.target.value)/100)
        }
        else if(currentConversion=='3'){
          setValue(parseFloat(event.target.value)/0.1)
        }
      }
      
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="conversion">
                <Form.Label>Select Your Conversion</Form.Label>
                <Form.Select aria-label="Default select example" onChange={onSelectChange} >                   
                    <option value="1">Kilogram(kg)-Gram(g)</option>
                    <option value="2">Kilogram(kg)-Decagram(dag)</option>
                    <option value="3">Gram(g)-Decagram(dag)</option>
                </Form.Select>
                
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{fromUnit}</Form.Label>
            <Form.Control type="text" placeholder="Enter Value" value={value} onChange={onValueChange}/>           
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{toUnit}</Form.Label>
            <Form.Control type="text" placeholder="Result" value={result} onChange={onResultChange}/>
          </Form.Group>                  
        </Form>
      );
    }
    
  

export default Converter;
