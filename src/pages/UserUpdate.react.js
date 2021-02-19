// @flow

import React, {Component} from 'react';
import 'whatwg-fetch';
import { Formik,Form as FormikForm } from "formik";
import {
  Container,
  Grid,
  Card,
  Button,
  Form
} from "tabler-react";
import queryString from 'query-string';
import SiteWrapper from "../SiteWrapper.react";


class UserUpdatePage extends Component{
    constructor(){
        super(...arguments);
        this.state = {            
            memberInfo:{}
        };
      }
      componentDidMount(){
        fetch('/api/member/getMember'+this.props.location.search,{
          method: 'get',
          dataType: 'json',
          headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        })
        .then((response) => response.json())
        .then((responseData) => {  
            let targetId =  queryString.parse(this.props.location.search).id;
            let member = {};            
            member = responseData.find((m) => m.id == targetId);              
            this.setState({memberInfo: member});
        })
        .catch((error)=>{
          console.log('Error fetching',error);
        });
      }  
      render(){          
          return (
            <div>      
                <Formik 
                    enableReinitialize
                    initialValues={this.state.memberInfo}
                    onSubmit={(values) => {      
                        fetch('/api/member/updateMember?id='+values.id+'&name='+values.name+'&email='+values.email+'&tel='+values.tel+'&city='+values.city+'&address='+values.address+'&point='+values.point+'&type='+values.type+'&status='+values.status+'&note='+values.note,{
                            method: 'get',
                            dataType: 'json',
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }                       
                        }).then(response => {                      
                            document.location='/userlist'
                        })
                    }}
                    render= {({ isSubmitting, values, handleChange }) => (
                        <FormikForm>
                        <SiteWrapper>
                            <div className="my-3 my-md-5">
                                <Container>
                                <Grid.Row>       
                                    <Grid.Col lg={18}>           
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>사용자 정보 입력</Card.Title>
                                            <Grid.Row>
                                                <Grid.Col md={5}>
                                                <Form.Group>
                                                    <Form.Label>이름</Form.Label>
                                                    <Form.Input
                                                        type="text"                          
                                                        placeholder="이름"                                        
                                                        name="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                    />
                                                     <Form.Input
                                                        type="hidden"                                                                                  
                                                        name="id"
                                                        value={values.id}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col sm={6} md={3}>
                                                <Form.Group>
                                                    <Form.Label>전화번호</Form.Label>
                                                    <Form.Input
                                                        type="text"
                                                        placeholder="000-0000-0000"                                        
                                                        name="tel"
                                                        value={values.tel}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col sm={6} md={4}>
                                                <Form.Group>
                                                    <Form.Label>이메일</Form.Label>
                                                    <Form.Input 
                                                        type="email" placeholder="Email" name="email" 
                                                        value={values.email}
                                                        onChange={handleChange}/>
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col sm={6} md={2}>
                                                <Form.Group>
                                                    <Form.Label>지역(시)</Form.Label>
                                                    <Form.Input type="text" name="city" 
                                                    value={values.city}
                                                    onChange={handleChange}/>
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col sm={6} md={6}>
                                                <Form.Group>
                                                    <Form.Label>상세주소</Form.Label>
                                                    <Form.Input type="text" name="address"
                                                    value={values.address}
                                                    onChange={handleChange}/>
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col sm={6} md={4}>
                                                <Form.Group>
                                                    <Form.Label>포인트</Form.Label>
                                                    <Form.Input type="number" name="point"
                                                    value={values.point}
                                                    onChange={handleChange}/>
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col md={6}>                        
                                                <Form.Group>
                                                    <Form.Label>구분</Form.Label>
                                                    <Form.SwitchStack> 
                                                        {
                                                            values.type === 'E'
                                                            ? <Form.Switch type="radio" name="type" value="E" label="운영진" onChange={handleChange} checked />  
                                                            : <Form.Switch type="radio" name="type" value="E" label="운영진" onChange={handleChange} />  
                                                        }
                                                        {
                                                            values.type === 'M'
                                                            ? <Form.Switch type="radio" name="type" value="M" label="정회원" onChange={handleChange} checked />  
                                                            : <Form.Switch type="radio" name="type" value="M" label="정회원" onChange={handleChange} />  
                                                        }
                                                        
                                                    </Form.SwitchStack>      
                                                </Form.Group>
                                                </Grid.Col>
                                                <Grid.Col sm={6} md={6}>
                                                <Form.Group>
                                                    <Form.Label>상태</Form.Label>
                                                    <Form.SwitchStack>                                                                                                        
                                                        {
                                                            values.status === 'ACTIVE'
                                                            ? <Form.Switch type="radio" name="status" value="ACTIVE" label="활동중" onChange={handleChange} checked />  
                                                            : <Form.Switch type="radio" name="status" value="ACTIVE" label="활동중" onChange={handleChange} />  
                                                        }
                                                        {
                                                            values.status === 'INACTIVE'
                                                            ? <Form.Switch type="radio" name="status" value="INACTIVE" label="탈퇴" onChange={handleChange} checked />  
                                                            : <Form.Switch type="radio" name="status" value="INACTIVE" label="탈퇴" onChange={handleChange} />  
                                                        }
                                                    </Form.SwitchStack>      
                                                </Form.Group>
                                                </Grid.Col>                    
                                                <Grid.Col md={12}>
                                                <Form.Group className="mb=0" label="소개">
                                                    <Form.Textarea
                                                    rows={5}
                                                    placeholder="간략하게 하고싶은 말을 적어주세요"
                                                    name="note"
                                                    value={values.note}
                                                    onChange={handleChange}>                         
                                                    </Form.Textarea>
                                                </Form.Group>
                                                </Grid.Col>
                                            </Grid.Row>
                                            </Card.Body>
                                            <Card.Footer className="text-right">
                                            <Button type="submit" color="primary" disabled={isSubmitting}>
                                                저장
                                            </Button>
                                            </Card.Footer>
                                        </Card>
                                    </Grid.Col>
                                </Grid.Row>
                                </Container>
                            </div>
                            </SiteWrapper>
                    </FormikForm>
                    )}
                    >        
                 
                    </Formik>     
                </div>
  
          )
      }
}

export default UserUpdatePage;